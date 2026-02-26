import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Globe, Cpu, Layers, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Sub-millisecond response times for real-time applications.',
    icon: Zap,
    color: 'shadow-yellow-500/20',
    iconColor: 'text-yellow-400',
    size: 'md:col-span-2'
  },
  {
    title: 'Enterprise Security',
    description: 'Military-grade encryption for all your sensitive data.',
    icon: Shield,
    color: 'shadow-emerald-500/20',
    iconColor: 'text-emerald-400',
    size: 'md:col-span-1'
  },
  {
    title: 'Global Scale',
    description: 'Deploy anywhere with our distributed edge network.',
    icon: Globe,
    color: 'shadow-blue-500/20',
    iconColor: 'text-blue-400',
    size: 'md:col-span-1'
  },
  {
    title: 'Neural Core',
    description: 'Advanced reasoning capabilities powered by our proprietary architecture.',
    icon: Cpu,
    color: 'shadow-purple-500/20',
    iconColor: 'text-purple-400',
    size: 'md:col-span-2'
  },
  {
    title: 'Multi-Modal',
    description: 'Seamlessly process text, code, images, and audio in one flow.',
    icon: Layers,
    color: 'shadow-indigo-500/20',
    iconColor: 'text-indigo-400',
    size: 'md:col-span-1'
  },
  {
    title: 'Deep Analytics',
    description: 'Gain insights into your AI usage with real-time monitoring.',
    icon: BarChart3,
    color: 'shadow-cyan-500/20',
    iconColor: 'text-cyan-400',
    size: 'md:col-span-2'
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
          Engineered for Excellence
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Every component is meticulously crafted to provide the ultimate AI experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`glass-panel p-8 rounded-3xl group hover:bg-white/10 transition-all cursor-default ${feature.size}`}
          >
            <div className={`p-3 rounded-2xl bg-white/5 w-fit mb-6 neon-glow shadow-lg ${feature.color}`}>
              <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
              {feature.title}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
