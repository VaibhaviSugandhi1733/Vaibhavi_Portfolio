import { Mail, ExternalLink, Github, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const CONTACTS = [
  {
    label: 'Email',
    value: 'vaibhavi.sugandh20@gmail.com',
    icon: Mail,
    href: 'mailto:vaibhavi.sugandh20@gmail.com',
    copyable: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vaibhavi-sugandh',
    icon: ExternalLink,
    href: 'https://linkedin.com/in/vaibhavi-sugandh',
  },
  {
    label: 'GitHub',
    value: 'github.com/vaibhavi-sugandh',
    icon: Github,
    href: 'https://github.com/vaibhavi-sugandh',
  },
];

export default function TestContactCards() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl mx-auto mt-8">
      {CONTACTS.map((contact) => (
        <a
          key={contact.label}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-1 w-full md:w-1/3 bg-black/80 border border-green-500 rounded-lg p-6 flex items-center gap-4 transition-all duration-200 hover:shadow-2xl hover:scale-105 hover:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          tabIndex={0}
        >
          <contact.icon className="w-7 h-7 text-green-400 group-hover:text-green-300 transition-colors" />
          <div className="flex-1">
            <div className="font-bold text-green-300">{contact.label}</div>
            <div className="text-green-200 text-sm break-all">{contact.value}</div>
          </div>
          {contact.copyable && (
            <button
              type="button"
              onClick={e => {
                e.preventDefault();
                copyToClipboard(contact.value);
              }}
              className="ml-2 p-2 rounded hover:bg-green-900 transition-colors"
              tabIndex={0}
              aria-label="Copy email"
            >
              {copied ? (
                <CheckCircle className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5 text-green-400" />
              )}
            </button>
          )}
        </a>
      ))}
    </div>
  );
} 