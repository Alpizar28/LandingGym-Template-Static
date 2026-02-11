'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ConfigData } from '@/types/config';

interface HeaderProps {
    config: ConfigData['business'];
}

export default function Header({ config }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#home' },
        { name: 'Servicios', href: '#services' },
        { name: 'Clases', href: '#classes' },
        { name: 'Precios', href: '#pricing' },
        { name: 'Galería', href: '#gallery' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm border-b border-white/10'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold font-heading tracking-tighter hover:opacity-80 transition-opacity">
                        <span className="text-primary">{config.name.split(' ')[0]}</span>
                        <span className="text-foreground">{config.name.split(' ').slice(1).join(' ')}</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
                        >
                            ÚNETE AHORA
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border animate-in slide-in-from-top-5">
                    <nav className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium p-2 hover:bg-muted/50 rounded transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="mt-2 bg-primary text-primary-foreground p-3 rounded-xl text-center font-bold"
                            onClick={() => setIsOpen(false)}
                        >
                            ÚNETE AHORA
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
