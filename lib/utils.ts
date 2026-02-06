import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const toPlainText = (blocks: any[] | string = []) => {
    if (!blocks) return '';
    if (typeof blocks === 'string') return blocks;
    // Basic placeholder for now, can be expanded for real PortableText parsing if needed later
    return Array.isArray(blocks) ? "Content placeholder" : String(blocks);
};
