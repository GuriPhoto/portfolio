import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['works', 'thoughts']),
    tags: z.array(z.string()),
    thumbnail: z.string().optional(),
    series: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = { posts };
