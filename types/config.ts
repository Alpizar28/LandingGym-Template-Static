// Section Content Interfaces
// Section Content Interfaces
export interface HeroContent {
    headline?: string;
    subheadline?: string;
    ctaText?: string;
    ctaLink?: string;
    backgroundImage?: string;
}

export interface ServicesContent {
    title?: string;
    subtitle?: string;
    body?: any; // String or PortableText
    image?: string;
    ctaText?: string;
    ctaLink?: string;
}

export interface Plan {
    _id: string; // Keep compatibility or use id
    name: string;
    price: string;
    currency: string;
    frequency: string;
    features: string[];
    highlight?: boolean;
    ctaLink?: string;
}

export interface PricingContent {
    headline?: string;
    subheadline?: string;
    plans?: Plan[];
}

export interface GalleryContent {
    headline?: string;
    subheadline?: string;
    images?: string[];
}

export interface AboutContent {
    title?: string;
    subtitle?: string;
    body?: any;
    image?: string;
}

export interface ClassItem {
    name: string;
    schedule: string;
    description?: string;
    instructor?: string;
}

export interface ClassesContent {
    headline?: string;
    subheadline?: string;
    classes?: ClassItem[];
}

export interface ContactContent {
    headline?: string;
    email?: string;
    phone?: string;
    address?: string;
    mapEmbedUrl?: string; // Optional iframe src
    formActionUrl?: string; // Endpoint for form submission (e.g. Formspree)
}

export interface GenericContent {
    title?: string;
    subtitle?: string;
    body?: any;
}

// Discriminator for Section Config
export type SectionContent =
    | HeroContent
    | ServicesContent
    | PricingContent
    | GalleryContent
    | AboutContent
    | ContactContent
    | ClassesContent
    | GenericContent;

export interface SectionConfig {
    key: string;
    enabled: boolean;
    contentRef: SectionContent;
}

export interface ConfigData {
    business: {
        name: string;
        colors: {
            primary: string;
            secondary: string;
            accent: string;
            background: string;
            text: string;
            muted: string;
        };
        contact: {
            email: string;
            phone: string;
            address?: string;
        };
        social?: {
            instagram?: string;
            facebook?: string;
            twitter?: string;
        };
    };
    sections: SectionConfig[];
}
