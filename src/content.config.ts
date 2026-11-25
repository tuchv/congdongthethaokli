import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. Bộ sưu tập Bài viết & Review
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    publishedDate: z.coerce.date(),
    author: z.string().default('Ban Quản Trị Kli Sports'),
    status: z.enum(['published', 'draft']).default('published'),
    category: z.string().default('gym'),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    isFeatured: z.boolean().default(false),
    featuredPosition: z.string().default('1'),
    venueReview: z.object({
      isReviewPost: z.boolean().default(false),
      venueName: z.string().optional(),
      overallRating: z.string().default('5.0'),
      rankBadge: z.string().default('Phòng Tập Hạng A - Khuyên Dùng'),
      facilityScore: z.string().default('9.5/10'),
      coachScore: z.string().default('9.0/10'),
      priceScore: z.string().default('9.8/10'),
      cleanlinessScore: z.string().default('9.2/10'),
      pros: z.string().optional(),
      cons: z.string().optional(),
      verdict: z.string().optional(),
    }).optional(),
  }),
});

// 2. Bộ sưu tập Phòng tập & Sân bãi
const locations = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/locations' }),
  schema: z.object({
    name: z.string(),
    region: z.string(),
    areaName: z.string(),
    sport: z.string(),
    address: z.string(),
    phone: z.string(),
    priceRange: z.string().default('Từ 450.000đ/tháng'),
    rating: z.string().default('4.9'),
    reviewsCount: z.number().default(100),
    badge: z.string().default('Hỗ trợ Cali'),
    specialOffer: z.string().optional(),
    description: z.string().optional(),
    facilities: z.array(z.string()).default([]),
    image: z.string().optional(),
    isFeatured: z.boolean().default(true),
  }),
});

export const collections = { posts, locations };
