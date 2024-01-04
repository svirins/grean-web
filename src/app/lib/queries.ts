import { FEATURED_POSTS_LIMIT } from "@/app/lib/constants";
import groq from "groq";

const postFields = groq`
  datePublished,
  "tags": tags[] -> {
    _id,
    title,
    "slug": slug.current
  },
  "description": array::join(string::split((pt::text(body[_type == "block"][0...1])), "")[0..384], "") + "..."
`;

const commonFields = groq`
  _id,
  title,
  "slug": slug.current,
  coverImage {
    asset,
    alt,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "lqip": asset->metadata.lqip
  }
`;

// POSTS AND TAGS QUERIES
// TODO: implement Paginated Posts Query
export const allPostsQuery = groq`
*[_type == "post" ] | order(datePublished desc, _updatedAt desc) {
  _id,
  "publishedAt": _updatedAt,
  title,
  "slug": slug.current,
  "tags": tags[] -> title
}`;

// search posts by title
export const searchPostsQuery = groq`
*[_type == "post" &&  !(_id in path("drafts.**"))] | order(datePublished desc, _updatedAt desc) [$fromPosition...$toPosition] {
  "readingTime": round(length(pt::text(body)) / 5 / 180 ),
  ${commonFields},
  ${postFields}
}`;

// filter posts by 'featured'
export const featuredPostsQuery = groq`
*[_type == "post" && displayAtFront && !(_id in path("drafts.**"))] |  order(datePublished desc, _updatedAt desc) [0...${FEATURED_POSTS_LIMIT}] {
  ${commonFields},
  ${postFields},
  "readingTime": round(length(pt::text(body)) / 5 / 180 )

}`;

// get post (with related posts) by 'slug'
export const postBySlugQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
  ${commonFields},
  ${postFields},
    body,
    "readingTime": round(length(pt::text(body)) / 5 / 180 ),
    "relatedPosts": relatedPosts[] -> {
      ${commonFields},
      ${postFields},
      "readingTime": round(length(pt::text(body)) / 5 / 180 )
    }
  }
}`;

// get posts by 'tag'
export const postsByTagQuery = groq`
*[_type == "tag" && slug.current == $slug] {
  title,
  description,
  "posts":  *[_type == 'post' && references(^._id)] {
    ${commonFields},
    ${postFields},
    "readingTime": round(length(pt::text(body)) / 5 / 180 )
    } | order(_updatedAt desc)
}[0]`;

// PSYHELP QUERIES
// get all psyHelp pages'
export const allPsyHelpQuery = groq`
*[_type == "psyHelp" && !(_id in path("drafts.**"))] | order(order asc) {
  ${commonFields},
  description
}`;

// get psyHelp by 'slug
export const psyHelpBySlugQuery = groq`
{
  "psyHelp": *[_type == "psyHelp" && slug.current == $slug] | order(_updatedAt desc) [0] {
  ${commonFields},
    description,
    body
  }
}`;

// THERAPY QUERIES
// get all THERAPY pages'
export const allTherapiesQuery = groq`
*[_type == "therapy" && !(_id in path("drafts.**"))] | order(order asc) {
  ${commonFields},
  description
}`;

// get psyHelp by 'slug
export const therapyBySlugQuery = groq`
{
  "therapy": *[_type == "therapy" && slug.current == $slug] | order(_updatedAt desc) [0] {
  ${commonFields},
    body,
    description
  }
}`;

// BASIC PAGE QUERY
export const pageBySlugQuery = groq`
{
"page": *[_type == "page" && slug.current == $slug] | order(_updatedAt desc) [0] {
    title,
    body
  }
}`;

// SLUGS QUERIES
export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][]{
  "slug": slug.current,
  "date": _updatedAt
  }`;

export const tagSlugsQuery = groq`
*[_type == "tag" && defined(slug.current)][]{
  "slug": slug.current,
  "date": _updatedAt
  }`;

export const therapySlugsQuery = groq`
*[_type == "therapy" && defined(slug.current)][]{
  "slug": slug.current,
  "date": _updatedAt
  }`;

export const psyHelpSlugsQuery = groq`
*[_type == "psyHelp" && defined(slug.current)][]{
  "slug": slug.current,
  "date": _updatedAt
  }`;

export const totalPostsNumberQuery = groq`count(*[_type == 'post' && !(_id in path("drafts.**"))])`;

export const postUpdatedQuery = groq`*[_type == "post" && _id == $id].slug.current`;

