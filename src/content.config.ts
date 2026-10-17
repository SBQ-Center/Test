import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

// Content schema covering all frontmatter fields found in repository
// - title: required
// - summary / description: optional (both accepted)
// - publishedAt: optional (ISO date string recommended)
// - language: optional enum (ar|en)
// - featured, draft: optional booleans
// - cover, author: optional strings

const publications = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    description: z.string().optional(),
    publishedAt: z.string().optional(),
    language: z.enum(['ar', 'en']).optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    cover: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  publications,
};
