'use client';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { ConfigData } from '@/types/config';

interface FooterProps {
    config: ConfigData['business'];
}

export default function Footer({ config }: FooterProps) {
    return (
        <footer className="bg-zinc-950 text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold font-heading mb-4 block">
                            <span className="text-primary">{config.name}</span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-xs">
                            Transformando vidas a través del fitness, comunidad y entrenamiento experto. Únete al movimiento hoy.
                        </p>
                        <div className="flex gap-4">
                            {config.social?.instagram && (
                                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                    <Instagram size={20} />
                                </a>
                            )}
                            {config.social?.facebook && (
                                <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                    <Facebook size={20} />
                                </a>
                            )}
                            {config.social?.twitter && (
                                <a href={config.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                    <Twitter size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-heading">ENLACES RÁPIDOS</h3>
                        <ul className="space-y-3">
                            <li><Link href="#services" className="text-gray-400 hover:text-primary transition-colors">Servicios</Link></li>
                            <li><Link href="#classes" className="text-gray-400 hover:text-primary transition-colors">Clases</Link></li>
                            <li><Link href="#pricing" className="text-gray-400 hover:text-primary transition-colors">Precios</Link></li>
                            <li><Link href="#gallery" className="text-gray-400 hover:text-primary transition-colors">Galería</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-heading">CONTÁCTANOS</h3>
                        <ul className="space-y-4">
                            {config.contact?.address && (
                                <li className="flex items-start gap-3 text-gray-400">
                                    <MapPin className="shrink-0 text-primary" size={20} />
                                    <span>{config.contact.address}</span>
                                </li>
                            )}
                            {config.contact?.phone && (
                                <li className="flex items-center gap-3 text-gray-400">
                                    <Phone className="shrink-0 text-primary" size={20} />
                                    <span>{config.contact.phone}</span>
                                </li>
                            )}
                            {config.contact?.email && (
                                <li className="flex items-center gap-3 text-gray-400">
                                    <Mail className="shrink-0 text-primary" size={20} />
                                    <span>{config.contact.email}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} {config.name}. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
