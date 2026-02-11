
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { getSectionComponent } from '@/lib/section-registry';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ConfigData, SectionConfig } from '@/types/config';

// Revalidate every 60 seconds (ISR) or use 0 for SSR
export const revalidate = 60;

// Dynamic params validation
export const dynamicParams = true;

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Fetch helper
async function getGymConfig(slug: string): Promise<ConfigData | null> {
    const { data, error } = await supabase
        .from('gym_demos')
        .select('config_json')
        .eq('slug', slug)
        .eq('is_active', true)
        .single();

    if (error || !data) {
        console.warn(`Gym demo not found for slug: ${slug}`, error);
        return null;
    }

    return data.config_json as ConfigData;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const config = await getGymConfig(slug);

    if (!config) {
        return {
            title: 'Gym Not Found',
        };
    }

    return {
        title: config.business.name || 'Gym Demo',
        description: config.sections.find((s: SectionConfig) => s.key === 'home')?.contentRef?.subheadline || 'Welcome',
    };
}

export default async function DynamicGymPage({ params }: PageProps) {
    const { slug } = await params;
    const config = await getGymConfig(slug);

    if (!config) {
        notFound();
    }

    const sections = config.sections || [];

    return (
        <div className="flex min-h-screen flex-col" style={{
            '--background': config.business.colors.background,
            '--foreground': config.business.colors.text,
            '--primary': config.business.colors.primary,
            '--secondary': config.business.colors.secondary,
            '--accent': config.business.colors.accent,
            '--muted': config.business.colors.muted,
        } as React.CSSProperties}>
            <Header config={config.business} />
            <main className="flex-1">
                {sections.map((section: any, index: number) => {
                    if (!section.enabled) return null;

                    const Component = getSectionComponent(section.key);
                    if (!Component) return null;

                    return (
                        <Component
                            key={`${section.key}-${index}`}
                            content={section.contentRef}
                        />
                    );
                })}
                {sections.length === 0 && (
                    <div className="p-20 text-center">
                        <h1 className="text-4xl font-bold">No Sections Enabled</h1>
                        <p>This demo has no content configured.</p>
                    </div>
                )}
            </main>
            <Footer config={config.business} />
        </div>
    );
}
