import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Menu, User } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="p-2 bg-indigo-500 rounded-lg shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-white">Lumina AI</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Pricing', 'Store', 'API'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* User Profile & Token Balance */}
        <div className="flex items-center gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-medium text-slate-300">1,240 Tokens</span>
          </motion.div>
          
          <button className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <User className="w-5 h-5 text-slate-300" />
          </button>
          
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6 text-slate-300" />
          </button>
        </div>
      </div>
    </nav>
  );
};
