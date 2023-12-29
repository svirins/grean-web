import {
  getPostSlugs,
  getTagSlugs,
  getTherapySlugs,
  getPsyHelpSlugs,
} from "@/app/lib/sanity";
const homepage = "https://www.doctorgrean.by";

export default async function sitemap() {
  const postData = await getPostSlugs();
  const tagData = await getTagSlugs();
  const psyHelpData = await getPsyHelpSlugs();
  const therapyData = await getTherapySlugs();

  const posts = postData.map((post) => ({
    url: `${homepage}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));
  const tags = tagData.map((tag) => ({
    url: `${homepage}/blog/tag/${tag.slug}`,
    lastModified: new Date(tag.date).toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));
  const psyHelps = psyHelpData.map((help) => ({
    url: `${homepage}/therapy/${help.slug}`,
    lastModified: new Date(help.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));
  const therapies = therapyData.map((therapy) => ({
    url: `${homepage}/therapy/${therapy.slug}`,
    lastModified: new Date(therapy.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));
  const routes = [
    { url: "/", priority: 1 },
    { url: "/psyhelp", priority: 1 },
    { url: "/therapy", priority: 1 },
    { url: "/about-me", priority: 1 },
    { url: "/blog", priority: 1 },
    { url: "/q-and-a", priority: 0.8 },
    { url: "/terms-and-conditions", priority: 0.8 },
    { url: "/prices-and-payment", priority: 0.8 },
  ].map((route) => ({
    url: `${homepage}${route.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));

  return [...routes, ...posts, ...tags, ...psyHelps, ...therapies];
}
