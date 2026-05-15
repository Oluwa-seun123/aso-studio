import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "AI Video",
      "Graphics",
      "Web Dev",
      "AI Automation",
    ]),
    image: z.string(),
    link: z.string().url().optional(),
    client: z.string().optional(),
    date: z.string().transform((str) => new Date(str)),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};