import React from 'react';
import { motion } from 'motion/react';
import { Coins, ArrowRight, Tag } from 'lucide-react';

const packs = [
  { amount: '50k', price: '$9', discount: null },
  { amount: '250k', price: '$39', discount: '15%' },
  { amount: '1M', price: '$129', discount: '30%' },
];

export const TokenStore = () => {
  return (
    <section id="store" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass-panel rounded-[40px] p-12 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] -z-10" />
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Coins className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Token Packs</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Need more power? <br />
              Top up instantly.
            </h2>
            <p className="text-slate-400 mb-8">
              Purchase additional tokens to keep your creative momentum going. Tokens never expire and can be used across all Lumina models.
            </p>
            <button className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors group">
              View all packs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
            {packs.map((pack, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 rounded-3xl text-center border-white/5 hover:border-indigo-500/50 transition-all relative group"
              >
                {pack.discount && (
                  <div className="absolute -top-3 -right-3 px-2 py-1 bg-emerald-500 text-[10px] font-bold text-white rounded-lg shadow-lg flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    SAVE {pack.discount}
                  </div>
                )}
                <div className="text-3xl font-bold text-white mb-1">{pack.amount}</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-4">Tokens</div>
                <div className="text-xl font-bold text-indigo-400">{pack.price}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
