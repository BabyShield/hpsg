import type { MetadataRoute } from "next";

import { areas } from "@/data/areas";
import { guides } from "@/data/guides";
import { areaPhotos, servicePhotos } from "@/data/photos";
import { publishedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { getCombos } from "@/lib/matrix";
import { absoluteUrl, assetUrl } from "@/lib/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl("/"),
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
    images: [assetUrl("/images/home/hero.jpg")],
  };

  const staticPages: MetadataRoute.Sitemap = [
    { path: "/areas/", priority: 0.7 },
    { path: "/about/", priority: 0.6, image: "/images/about/office-neighbourhood.jpg" },
    { path: "/contact/", priority: 0.6, image: "/images/about/office-neighbourhood.jpg" },
    { path: "/group/", priority: 0.4 },
    { path: "/privacy/", priority: 0.2 },
    { path: "/projects/", priority: 0.3, image: "/images/services/kitchen-renovation.jpg" },
    { path: "/guides/", priority: 0.5 },
  ].map(({ path, priority, image }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
    ...(image ? { images: [assetUrl(image)] } : {}),
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/${service.slug}/`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
    images: [assetUrl(servicePhotos[service.slug].src)],
  }));

  const areaPages: MetadataRoute.Sitemap = areas.map((area) => ({
    url: absoluteUrl(`/areas/${area.slug}/`),
    lastModified,
    changeFrequency: "monthly",
    priority: area.tier === 1 ? 0.7 : 0.55,
    images: areaPhotos[area.slug] ? [assetUrl(areaPhotos[area.slug].src)] : undefined,
  }));

  const comboPages: MetadataRoute.Sitemap = getCombos().map((combo) => ({
    url: absoluteUrl(`/${combo.service.slug}/${combo.area.slug}/`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
    images: [
      assetUrl(servicePhotos[combo.service.slug].src),
      ...(areaPhotos[combo.area.slug] ? [assetUrl(areaPhotos[combo.area.slug].src)] : []),
    ],
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: absoluteUrl(`/guides/${guide.slug}/`),
    lastModified: new Date(guide.dateModified),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const projectPages: MetadataRoute.Sitemap = publishedProjects().map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}/`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  return [
    home,
    ...staticPages,
    ...servicePages,
    ...areaPages,
    ...comboPages,
    ...guidePages,
    ...projectPages,
  ];
}
