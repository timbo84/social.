export default function sitemap() {
  const base = "https://www.socialeventrentalsne.com";

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/gallery", priority: 0.8, changeFrequency: "weekly" },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { url: "/FAQ", priority: 0.7, changeFrequency: "monthly" },
    { url: "/booking", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/event-photo-booth", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/backdrop-booth", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/flower-arch", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/glam-booth", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/snack-cart", priority: 0.8, changeFrequency: "monthly" },
    { url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { url: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
