import { z } from 'zod';

// Helper for generic body content (string or array for now)
const bodySchema = z.union([z.string(), z.array(z.any())]).optional();

export const HeroContentSchema = z.object({
    headline: z.string().optional(),
    subheadline: z.string().optional(),
    ctaText: z.string().optional(),
    ctaLink: z.string().optional(),
    backgroundImage: z.string().optional(),
});

export const ServicesContentSchema = z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    body: bodySchema,
    image: z.string().optional(),
    ctaText: z.string().optional(),
    ctaLink: z.string().optional(),
});

export const PlanSchema = z.object({
    _id: z.string().optional(),
    name: z.string(),
    price: z.string(),
    currency: z.string(),
    frequency: z.string(),
    features: z.array(z.string()),
    highlight: z.boolean().optional(),
    ctaLink: z.string().optional(),
    ctaText: z.string().optional(),
});

export const PricingContentSchema = z.object({
    headline: z.string().optional(),
    subheadline: z.string().optional(),
    plans: z.array(PlanSchema).optional(),
});

export const GalleryContentSchema = z.object({
    headline: z.string().optional(),
    subheadline: z.string().optional(),
    images: z.array(z.string()).optional(),
});

export const AboutContentSchema = z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    body: bodySchema,
    image: z.string().optional(),
});

export const ContactContentSchema = z.object({
    headline: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    mapEmbedUrl: z.string().optional(),
    formActionUrl: z.string().optional(),
});

export const ClassItemSchema = z.object({
    name: z.string(),
    schedule: z.string(),
    description: z.string().optional(),
    instructor: z.string().optional(),
});

export const ClassesContentSchema = z.object({
    headline: z.string().optional(),
    subheadline: z.string().optional(),
    classes: z.array(ClassItemSchema).optional(),
});

export const GenericContentSchema = z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    body: bodySchema,
});

export const SectionContentSchema = z.union([
    HeroContentSchema,
    ServicesContentSchema,
    PricingContentSchema,
    GalleryContentSchema,
    AboutContentSchema,
    ContactContentSchema,
    ClassesContentSchema,
    GenericContentSchema,
]);

export const SectionConfigSchema = z.object({
    key: z.string(),
    enabled: z.boolean(),
    contentRef: SectionContentSchema,
});

export const ConfigDataSchema = z.object({
    business: z.object({
        name: z.string(),
        colors: z.object({
            primary: z.string(),
            secondary: z.string(),
            accent: z.string(),
            background: z.string(),
            text: z.string(),
            muted: z.string(),
        }),
        contact: z.object({
            email: z.string().email(),
            phone: z.string(),
            address: z.string().optional(),
        }),
        social: z.object({
            instagram: z.string().optional(),
            facebook: z.string().optional(),
            twitter: z.string().optional(),
        }).optional(),
    }),
    sections: z.array(SectionConfigSchema),
});
