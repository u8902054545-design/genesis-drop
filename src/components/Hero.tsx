import React from 'react';
import { motion } from 'motion/react';
import { Send, Upload, Mic, Settings, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 px-6 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-500/10 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-medium text-indigo-400 uppercase tracking-widest">Next Generation AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Intelligence that feels <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              truly personal.
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the most advanced language model designed for creative professionals and high-performance teams.
          </p>
        </motion.div>

        {/* AI Input Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="animated-gradient-border rounded-2xl shadow-2xl shadow-indigo-500/10">
            <div className="p-4 flex flex-col gap-4">
              <textarea
                placeholder="Ask Lumina anything..."
                className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-slate-500 resize-none h-32 text-lg font-light"
              />
              
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <button className="p-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all">
                    <Upload className="w-5 h-5" />
                  </button>
                  <button className="p-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all">
                    <Mic className="w-5 h-5" />
                  </button>
                  <button className="p-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
                
                <button className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-semibold rounded-xl hover:bg-slate-200 transition-all shadow-lg active:scale-95">
                  <span>Generate</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Floating Action Hint */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            <span>Press ⌘ + Enter to send</span>
            <div className="w-1 h-1 rounded-full bg-slate-700" />
            <span>Shift + Enter for new line</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
