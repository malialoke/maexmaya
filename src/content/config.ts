/**
 * Content Collections Configuration
 * 
 * Defines the schema for all content types.
 * Stories are the primary collection for now.
 * Journal posts and other collections can be added later.
 */
import { defineCollection, z } from 'astro:content';

const stories = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string(),
    publishDate: z.coerce.date(),
    
    // Story metadata
    synopsis: z.string().max(300).describe('2-3 sentence teaser for the accordion'),
    excerpt: z.string().max(1000).describe('Opening quote/hook from the story - displays as blockquote'),
    
    // Display options
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    
    // Story format - determines how the story renders
    // 'prose' = standard markdown rendering (default)
    // 'scrollytelling' = custom React component with scroll animations
    format: z.enum(['prose', 'scrollytelling']).default('prose'),
    
    // For scrollytelling stories, specify which component to use
    // This maps to a component in src/components/stories/
    component: z.string().optional().describe('Component name for scrollytelling stories'),
    
    // Optional categorization
    series: z.string().optional().describe('If part of a connected series'),
    tags: z.array(z.string()).default([]),
    
    // Optional reading experience
    estimatedReadTime: z.number().optional().describe('Minutes - auto-calculated if not provided'),
    contentWarnings: z.array(z.string()).default([]),
    
    // Future transmedia connections
    soundtrack: z.string().optional().describe('Link to associated music'),
    relatedMedia: z.array(z.object({
      type: z.enum(['music', 'image', 'video', 'external']),
      title: z.string(),
      url: z.string()
    })).default([]),
    
    // Cover image (optional for now)
    coverImage: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
  })
});

// Journal collection for writing process posts, reflections, etc.
const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    excerpt: z.string().max(200),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    
    // Optional image for the journal layout
    image: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
  })
});

export const collections = {
  stories,
  journal,
};