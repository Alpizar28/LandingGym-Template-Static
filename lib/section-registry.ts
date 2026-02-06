// lib/section-registry.ts
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Using 'any' for props is practical here as sections have disparate props
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SectionComponent = ComponentType<{ content: any }>; // Using specific content type would require generic components, keeping loose for dynamic map but better than raw any

const SECTIONS: Record<string, SectionComponent> = {
    home: dynamic(() => import('@/components/sections/Hero').then(mod => mod.default)),
    services: dynamic(() => import('@/components/sections/Services').then(mod => mod.default)),
    pricing: dynamic(() => import('@/components/sections/Pricing').then(mod => mod.default)),
    gallery: dynamic(() => import('@/components/sections/Gallery').then(mod => mod.default)),
    about: dynamic(() => import('@/components/sections/About').then(mod => mod.default)),
    contact: dynamic(() => import('@/components/sections/Contact').then(mod => mod.default)),
    classes: dynamic(() => import('@/components/sections/Classes').then(mod => mod.default)),
    generic: dynamic(() => import('@/components/sections/GenericSection').then(mod => mod.default)),
};

export function getSectionComponent(key: string): SectionComponent | null {
    return SECTIONS[key] || null;
}
