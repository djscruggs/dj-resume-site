import emailjs from '@emailjs/browser';
import {FC, memo, useCallback, useMemo, useState} from 'react';

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

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      data['reply_to'] = data['user_email'];
      emailjs.send('service_gd8ahdd', 'template_zs03dvf', data, 'CUs0nfElnWZlGwWWM')
      setMessage(`Thank you ${data.user_name} for your message`);
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" id="sendEmail" method="POST" onSubmit={handleSendMessage}>
      {message !== '' && <div className="text-green-500">{message}</div>}
      <input
        className={inputClasses}
        name="user_name"
        onChange={onChange}
        placeholder="Name"
        required
        type="text"
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="user_email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <input
        className={inputClasses}
        name="user_phone"
        onChange={onChange}
        placeholder="Phone number"
        type="text"
      />
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

ContactForm.displayName = 'ContactForm';
export default ContactForm;
