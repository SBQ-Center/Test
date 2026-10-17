import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const publications = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
    draft: z.boolean().optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  publications,
};
