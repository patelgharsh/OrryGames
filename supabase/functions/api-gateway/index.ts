import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import CryptoJS from "npm:crypto-js@4.2.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const ENCRYPTION_KEY = 'OrryGames_SecureKey_2026_v1_AES256';

function encryptData(data: any): string {
  const jsonString = JSON.stringify(data);
  const encrypted = CryptoJS.AES.encrypt(jsonString, ENCRYPTION_KEY).toString();
  return encrypted;
}

function decryptData(encryptedData: string): any {
  const decrypted = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
  const jsonString = decrypted.toString(CryptoJS.enc.Utf8);
  return JSON.parse(jsonString);
}

interface RateLimitStore {
  [key: string]: { count: number; resetTime: number };
}

const rateLimits: RateLimitStore = {};

const RATE_LIMIT_WINDOW = 60000;
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const limit = rateLimits[identifier];

  if (!limit || now > limit.resetTime) {
    rateLimits[identifier] = {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    };
    return true;
  }

  if (limit.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  limit.count++;
  return true;
}

interface GatewayRequest {
  action: string;
  payload: any;
}

interface EmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

async function handleSendEmail(payload: EmailPayload) {
  const { name, email, subject, message } = payload;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Invalid email address",
    };
  }

  const serviceId = Deno.env.get("EMAILJS_SERVICE_ID");
  const templateId = Deno.env.get("EMAILJS_TEMPLATE_ID");
  const publicKey = Deno.env.get("EMAILJS_PUBLIC_KEY");

  const emailJsResponse = await fetch(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        },
      }),
    }
  );

  if (!emailJsResponse.ok) {
    throw new Error("Failed to send email");
  }

  return {
    success: true,
    message: "Your message has been sent successfully! We will get back to you soon.",
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const clientIP = req.headers.get("x-forwarded-for") || "unknown";

    if (!checkRateLimit(clientIP)) {
      const encryptedError = encryptData({
        success: false,
        message: "Rate limit exceeded. Please try again later.",
      });
      return new Response(
        JSON.stringify({
          data: encryptedError,
        }),
        {
          status: 429,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const body = await req.json();
    const { action, payload }: GatewayRequest = decryptData(body.data);

    let result;

    switch (action) {
      case "send-email":
        result = await handleSendEmail(payload);
        break;

      default:
        result = {
          success: false,
          message: "Unknown action",
        };
    }

    const encryptedResult = encryptData(result);

    return new Response(
      JSON.stringify({
        data: encryptedResult,
      }),
      {
        status: result.success ? 200 : 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Gateway error:", error);

    const encryptedError = encryptData({
      success: false,
      message: "An error occurred. Please try again later.",
    });

    return new Response(
      JSON.stringify({
        data: encryptedError,
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
