import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

// Content schema covering all frontmatter fields found in repository
// - title: required
// - summary / description: optional (both accepted)
// - publishedAt: optional (ISO date string recommended) — accepts Date or string
// - language: optional enum (ar|en)
// - featured, draft: optional booleans
// - cover, author: optional strings

const isoDateString = z.preprocess((val) => {
  if (typeof val === 'string') return val;
  if (val instanceof Date) return val.toISOString();
  return val;
}, z.string().optional());

const publications = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    description: z.string().optional(),
    publishedAt: isoDateString,
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
