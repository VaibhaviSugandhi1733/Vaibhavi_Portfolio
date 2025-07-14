import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  const terminalText = `$ echo "@ ${year} Vaibhavi Sugandhi"
Built with React & Tailwind CSS

$ echo "Designed with ❤️ for the DevOps community"
$ echo "Thank you for visiting! Let's connect and build something awesome."`;
  return (
    <footer className="w-full mt-16">
      <div className="terminal-window max-w-2xl mx-auto mb-8 rounded-2xl shadow-2xl border border-green-900 overflow-hidden">
        <div className="terminal-header flex items-center gap-2 px-4 py-2 bg-black/80 border-b border-green-900">
          <span className="terminal-dot red w-3 h-3 rounded-full bg-red-500 inline-block"></span>
          <span className="terminal-dot yellow w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
          <span className="terminal-dot green w-3 h-3 rounded-full bg-green-500 inline-block"></span>
          <span className="ml-3 text-green-400 text-sm font-mono">footer.sh</span>
        </div>
        <div className="bg-black/90 px-6 py-6">
          <pre className="text-green-400 font-mono text-base leading-relaxed whitespace-pre-wrap">
            <code>{terminalText}</code>
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 