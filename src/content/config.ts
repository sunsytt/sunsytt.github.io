import { defineCollection, z } from 'astro:content';

// Schema del blog. Zod valida en tiempo de build: si un artículo en
// Markdown no cumple este formato, `astro build` falla con un error
// claro en vez de romperse en producción.
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160, {
        message: 'La descripción no debe superar 160 caracteres (SEO)',
      }),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      tags: z.array(z.string()).default([]),
      category: z.string(),
      draft: z.boolean().default(false),
    }),
});

export const collections = {
  blog: blogCollection,
};
