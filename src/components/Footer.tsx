import React from 'react';
import { Sparkles, Twitter, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-indigo-500 rounded-lg">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-display font-bold text-white">Lumina AI</span>
          </div>
          
          <div className="flex items-center gap-8">
            {['Privacy', 'Terms', 'Security', 'Status'].map((item) => (
              <a key={item} href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-white/5 text-slate-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-white/5 text-slate-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-white/5 text-slate-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="text-center text-xs text-slate-600 font-mono uppercase tracking-[0.2em]">
          © 2026 Lumina Intelligence Systems Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
