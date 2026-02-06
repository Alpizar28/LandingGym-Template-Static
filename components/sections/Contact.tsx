'use client';

import { motion } from 'framer-motion';

interface ContactProps {
    content?: {
        headline?: string;
        email?: string;
        phone?: string;
        address?: string;
        mapEmbedUrl?: string;
    }
}

export default function Contact({ content }: ContactProps) {
    const {
        headline = "Contáctanos",
        email,
        phone,
        address,
        mapEmbedUrl
    } = content || {};

    return (
        <section id="contact" className="py-24 bg-background border-t border-border">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">Contacto</h2>
                        <h3 className="text-4xl md:text-5xl font-black uppercase mb-8">{headline}</h3>

                        <div className="space-y-6 text-lg">
                            {address && (
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-muted-foreground mb-1">Ubicación</h4>
                                        <p>{address}</p>
                                    </div>
                                </div>
                            )}

                            {phone && (
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-muted-foreground mb-1">Teléfono</h4>
                                        <p>{phone}</p>
                                    </div>
                                </div>
                            )}

                            {email && (
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-muted-foreground mb-1">Email</h4>
                                        <p>{email}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-800">
                        {mapEmbedUrl ? (
                            <iframe
                                src={mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground uppercase font-bold tracking-widest text-sm">
                                Mapa no disponible
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
