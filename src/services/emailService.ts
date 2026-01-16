import emailjs from '@emailjs/browser';

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

const getEnvVariable = (key: string): string => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

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

    const serviceId = getEnvVariable('VITE_EMAILJS_SERVICE_ID');
    const templateId = getEnvVariable('VITE_EMAILJS_TEMPLATE_ID');
    const publicKey = getEnvVariable('VITE_EMAILJS_PUBLIC_KEY');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'contact.orrygames@gmail.com'
    };

    await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    return {
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.'
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
