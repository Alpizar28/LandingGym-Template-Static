'use client';

import { GenericContent } from '@/types/config';

interface GenericSectionProps {
    content: GenericContent;
    variant?: string;
}

export default function GenericSection({ content, variant = 'default' }: GenericSectionProps) {
    if (!content) return null;

    const { title, subtitle, body } = content;

    return (
        <section className="py-20 bg-background border-y border-muted/20">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                {subtitle && (
                    <p className="text-primary font-bold tracking-widest mb-4 uppercase text-sm">{subtitle}</p>
                )}
                <h2 className="text-4xl font-black mb-8 tracking-tight text-foreground">{title}</h2>

                {body && (
                    <div className="prose prose-xl prose-primary mx-auto text-muted-foreground mb-12">
                        {body.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className="mb-4">{paragraph}</p>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
