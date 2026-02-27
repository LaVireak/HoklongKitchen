export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export interface ContactFormDto {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ALLOWED_INTERESTS = new Set([
  '',
  'ovens',
  'refrigeration',
  'mixers',
  'prep',
  'ventilation',
  'dishwashers',
  'full-kitchen',
  'other',
]);

function normalizeText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function sanitizeMessage(value: string): string {
  let cleaned = '';
  for (const char of value) {
    const code = char.charCodeAt(0);
    if (code >= 32 && code !== 127) {
      cleaned += char;
    }
  }
  return cleaned.trim();
}

export function toContactFormDto(input: ContactFormInput): ContactFormDto {
  return {
    name: normalizeText(input.name),
    email: input.email.trim().toLowerCase(),
    phone: input.phone.trim().replace(/[^\d+()\-\s]/g, ''),
    interest: ALLOWED_INTERESTS.has(input.interest) ? input.interest : '',
    message: sanitizeMessage(input.message),
  };
}

export function validateContactForm(input: ContactFormInput): {
  data: ContactFormDto;
  errors: ContactFormErrors;
} {
  const data = toContactFormDto(input);
  const errors: ContactFormErrors = {};

  if (!data.name) errors.name = 'Name is required';
  else if (data.name.length > 80) errors.name = 'Name must be 80 characters or less';

  if (!data.email) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (data.phone && data.phone.length > 30) {
    errors.phone = 'Phone must be 30 characters or less';
  }

  if (!data.message) errors.message = 'Message is required';
  else if (data.message.length < 10) errors.message = 'Message must be at least 10 characters';
  else if (data.message.length > 1000) errors.message = 'Message must be 1000 characters or less';

  return { data, errors };
}
