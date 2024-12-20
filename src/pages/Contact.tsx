import { useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { app } from '../config/firebase';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: "http://www.linkedin.com/in/dominik-konik",
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      href: "https://github.com/RandomowyRandom",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: "https://x.com/RedrayDev",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const db = getFirestore(app);
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: new Date(),
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="min-h-screen pt-20 bg-background dark:bg-neutral-900">
      <div className="animate-fade-in">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white mb-8">Get in Touch</h2>
          
          <div className="mb-12">
            <h3 className="text-lg md:text-xl font-semibold text-text-primary dark:text-white mb-6">
              Professional Profiles
            </h3>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                  aria-label={link.name}
                >
                  <div className="p-4 rounded-full bg-white dark:bg-neutral-800 shadow-sm group-hover:shadow-md transition-all border border-neutral-200 dark:border-neutral-700 text-primary-500 dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-300">
                    {link.icon}
                  </div>
                  <span className="mt-2 text-sm text-text-secondary dark:text-neutral-300 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-neutral-200 dark:bg-neutral-700 mb-12" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm md:text-base text-text-primary dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white text-sm md:text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm md:text-base text-text-primary dark:text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white text-sm md:text-base"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm md:text-base text-text-primary dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white text-sm md:text-base"
              ></textarea>
            </div>
            
            {submitStatus && (
              <div className={`text-sm ${submitStatus === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {submitStatus === 'success' 
                  ? 'Message sent successfully!' 
                  : 'Failed to send message. Please try again.'}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-500 text-white py-2 md:py-3 rounded-lg hover:bg-primary-600 transition text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 