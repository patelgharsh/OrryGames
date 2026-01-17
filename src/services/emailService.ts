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

    const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${encodeURIComponent(formData.message)}`;
    const mailtoLink = `mailto:contact.orrygames@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${emailBody}`;

    window.location.href = mailtoLink;

    return {
      success: true,
      message: 'Opening your email client. Please send the email from there.'
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
