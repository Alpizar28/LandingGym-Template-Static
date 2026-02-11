'use client';

import { motion } from 'framer-motion';

import { ContactContent } from '@/types/config';

interface ContactProps {
    content?: ContactContent;
}

export default function Contact({ content }: ContactProps) {
    const {
        headline = "Contáctanos",
        email,
        phone,
        address,
        mapEmbedUrl,
        formActionUrl
    } = content || {};

    return (
        <section id="contact" className="py-24 bg-background border-t border-border">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">Contacto</h2>
                        <h3 className="text-4xl md:text-5xl font-black uppercase">{headline}</h3>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-card p-8 rounded-3xl border border-muted shadow-lg"
                    >
                        <form action={formActionUrl || "https://formspree.io/f/xbjnqopk"} method="POST" className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold uppercase text-muted-foreground">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full bg-background border border-input rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Tu nombre completo"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold uppercase text-muted-foreground">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full bg-background border border-input rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold uppercase text-muted-foreground">Mensaje</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full bg-background border border-input rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="¿En qué podemos ayudarte?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold uppercase py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                        {!formActionUrl && <p className="text-xs text-muted-foreground mt-4 text-center">Formulario en modo demo (Configura 'formActionUrl' en config.json)</p>}
                    </motion.div>

                    {/* Right Column: Info & Map */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid gap-6"
                        >
                            {address && (
                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-muted-foreground mb-1">Ubicación</h4>
                                        <p className="font-medium">{address}</p>
                                    </div>
                                </div>
                            )}

                            {phone && (
                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-muted-foreground mb-1">Teléfono</h4>
                                        <p className="font-medium">{phone}</p>
                                    </div>
                                </div>
                            )}

                            {email && (
                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-muted-foreground mb-1">Email</h4>
                                        <p className="font-medium">{email}</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-muted relative"
                        >
                            {mapEmbedUrl ? (
                                <iframe
                                    src={mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground uppercase font-bold tracking-widest text-xs">
                                    Mapa no disponible
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
