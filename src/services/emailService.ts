export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateFormData = (formData: EmailFormData): string | null => {
  if (!formData.name.trim()) {
    return 'Name is required';
  }
  if (!formData.email.trim()) {
    return 'Email is required';
  }
  if (!validateEmail(formData.email)) {
    return 'Please enter a valid email address';
  }
  if (!formData.subject.trim()) {
    return 'Subject is required';
  }
  if (!formData.message.trim()) {
    return 'Message is required';
  }
  return null;
};

export const sendEmail = async (formData: EmailFormData): Promise<EmailResponse> => {
  try {
    const validationError = validateFormData(formData);
    if (validationError) {
      return {
        success: false,
        message: validationError
      };
    }

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    if (!supabaseUrl) {
      throw new Error('Missing Supabase configuration');
    }

    const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to send message. Please try again later.'
      };
    }

    return {
      success: result.success,
      message: result.message
    };
  } catch (error) {
    console.error('Email send error:', error);

    if (error instanceof Error) {
      return {
        success: false,
        message: `Failed to send message: ${error.message}`
      };
    }

    return {
      success: false,
      message: 'Failed to send message. Please try again later or contact us directly at contact.orrygames@gmail.com'
    };
  }
};
