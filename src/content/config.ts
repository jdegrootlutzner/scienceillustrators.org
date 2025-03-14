import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().optional(),
    image: z.string().optional(),
  }),
});

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    image: z.string().optional(),
    order: z.number().optional().default(999),
  }),
});

const partnerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    website: z.string().url().optional(),
    order: z.number().optional().default(999),
  }),
});

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    order: z.number().optional().default(999),
  }),
});

export const collections = {
  'articles': articlesCollection,
  'team': teamCollection,
  'partners': partnerCollection,
  'faqs': faqCollection,
};