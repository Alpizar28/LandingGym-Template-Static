'use client';

import { motion } from 'framer-motion';

interface ClassesProps {
    content?: {
        headline?: string;
        subheadline?: string;
        classes?: {
            name: string;
            schedule: string;
            description?: string;
            instructor?: string;
        }[];
    }
}

export default function Classes({ content }: ClassesProps) {
    const {
        headline = "Nuestros Horarios",
        subheadline = "Encuentra tu momento",
        classes = []
    } = content || {};

    if (!classes || classes.length === 0) return null;

    return (
        <section id="classes" className="py-24 bg-zinc-950 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase mb-4 text-sm"
                    >
                        {headline}
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black uppercase"
                    >
                        {subheadline}
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((cls, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-zinc-900 p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-2xl font-bold uppercase group-hover:text-primary transition-colors">{cls.name}</h4>
                                <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">{cls.schedule}</span>
                            </div>
                            {cls.description && <p className="text-gray-400 mb-4 text-sm leading-relaxed">{cls.description}</p>}
                            {cls.instructor && (
                                <div className="text-sm text-gray-500 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    <span>Coach: {cls.instructor}</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
