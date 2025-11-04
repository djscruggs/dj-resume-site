import emailjs from '@emailjs/browser';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';

import { RECAPTCHA_SITE_KEY } from '../../../config';

// Declare global grecaptcha and callback
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
    onRecaptchaSubmit?: (token: string) => void;
  }
}

interface FormData {
  [key: string]: string | undefined;
  user_name: string;
  user_email: string;
  user_phone: string;
  user_message: string;
  reply_to: string;
}

const ContactForm: FC = memo(() => {
  const [message, setMessage] = useState('');
  const defaultData = useMemo(
    () => ({
      user_name: '',
      user_email: '',
      user_phone: '',
      user_message: '',
      reply_to: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  // Function to send email with reCAPTCHA token
  const sendEmailWithToken = useCallback(
    async (token: string) => {
      try {
        console.log('reCAPTCHA token received, sending email...');

        // Prepare form data with reCAPTCHA token
        const formData = { ...data };
        formData['reply_to'] = formData['user_email'];
        formData['g-recaptcha-response'] = token;

        // Send email via EmailJS
        await emailjs.send('service_gd8ahdd', 'template_zs03dvf', formData, 'CUs0nfElnWZlGwWWM');

        setMessage(`Thank you ${formData.user_name} for your message`);

        // Reset the form
        setData(defaultData);
      } catch (error) {
        console.error('Error sending message:', error);
        setMessage('Failed to send message. Please try again.');
      }
    },
    [data, defaultData],
  );

  // Set up the global callback function
  useEffect(() => {
    window.onRecaptchaSubmit = sendEmailWithToken;

    return () => {
      delete window.onRecaptchaSubmit;
    };
  }, [sendEmailWithToken]);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const { name, value } = event.target;

      const fieldData: Partial<FormData> = { [name]: value };

      setData({ ...data, ...fieldData });
    },
    [data],
  );

  const handleSendMessage = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // Check if grecaptcha is ready
      if (typeof window !== 'undefined' && window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
            .then(token => {
              sendEmailWithToken(token);
            })
            .catch(error => {
              console.error('reCAPTCHA execution failed:', error);
              setMessage('reCAPTCHA verification failed. Please try again.');
            });
        });
      } else {
        console.error('reCAPTCHA not loaded');
        setMessage('reCAPTCHA not loaded. Please refresh the page and try again.');
      }
    },
    [sendEmailWithToken],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" id="sendEmail" method="POST" onSubmit={handleSendMessage}>
      {message !== '' && <div className="text-green-500">{message}</div>}
      <input className={inputClasses} name="user_name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="user_email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <input className={inputClasses} name="user_phone" onChange={onChange} placeholder="Phone number" type="text" />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="user_message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

export default ContactForm;
