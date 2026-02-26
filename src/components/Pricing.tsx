import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for individuals exploring AI.',
    features: ['5,000 tokens/mo', 'Standard model access', 'Community support', 'Basic analytics'],
    highlight: false
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For professionals and growing teams.',
    features: ['100,000 tokens/mo', 'Advanced model access', 'Priority support', 'Advanced analytics', 'API access'],
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Custom solutions for large scale.',
    features: ['Unlimited tokens', 'Dedicated infrastructure', '24/7 White-glove support', 'Custom model training', 'SLA guarantees'],
    highlight: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Choose the plan that best fits your needs. No hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-8 rounded-3xl flex flex-col ${
              tier.highlight 
                ? 'bg-indigo-500/5 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20' 
                : 'glass-panel'
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                <Sparkles className="w-3 h-3" />
                MOST POPULAR
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-slate-400">/mo</span>}
              </div>
              <p className="text-slate-400 text-sm">{tier.description}</p>
            </div>

            <div className="flex-grow space-y-4 mb-8">
              {tier.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-center gap-3">
                  <div className={`p-1 rounded-full ${tier.highlight ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/5 text-slate-400'}`}>
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-3 rounded-xl font-bold transition-all active:scale-95 ${
              tier.highlight 
                ? 'bg-white text-black hover:bg-slate-200' 
                : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
            }`}>
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
