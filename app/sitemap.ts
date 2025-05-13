import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const formattedDate = "2025-01-11";

  return [
    {
      url: "https://ewslearning.com/programs",
      lastModified: formattedDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://ewslearning.com/onesb",
      lastModified: formattedDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://ewslearning.com/company",
      lastModified: formattedDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://ewslearning.com/resources",
      lastModified: formattedDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://ewslearning.com/services",
      lastModified: formattedDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://ewslearning.com/course-overview",
      lastModified: formattedDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://ewslearning.com/creating-sustainable-workplaces",
      lastModified: formattedDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://ewslearning.com/importance-of-proper-waste-management",
      lastModified: formattedDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://ewslearning.com/recycling-at-workplace",
      lastModified: formattedDate,
      changeFrequency: "yearly",
      priority: 1,
    }, 
    {
      url: "https://ewslearning.com/young-guardians",
      lastModified: formattedDate,
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
