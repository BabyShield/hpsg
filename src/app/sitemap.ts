import type { MetadataRoute } from "next";

import { areas } from "@/data/areas";
import { areaPhotos, servicePhotos } from "@/data/photos";
import { publishedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { getCombos } from "@/lib/matrix";
import { absoluteUrl } from "@/lib/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl("/"),
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
    images: [absoluteUrl("/images/home/hero.jpg")],
  };

  const staticPages: MetadataRoute.Sitemap = [
    { path: "/areas/", priority: 0.7 },
    { path: "/about/", priority: 0.6, image: "/images/about/office-neighbourhood.jpg" },
    { path: "/contact/", priority: 0.6, image: "/images/about/office-neighbourhood.jpg" },
    { path: "/group/", priority: 0.4 },
    { path: "/privacy/", priority: 0.2 },
    { path: "/projects/", priority: 0.5, image: "/images/services/kitchen-renovation.jpg" },
  ].map(({ path, priority, image }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
    ...(image ? { images: [absoluteUrl(image)] } : {}),
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/${service.slug}/`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
    images: [absoluteUrl(servicePhotos[service.slug].src)],
  }));

  const areaPages: MetadataRoute.Sitemap = areas.map((area) => ({
    url: absoluteUrl(`/areas/${area.slug}/`),
    lastModified,
    changeFrequency: "monthly",
    priority: area.tier === 1 ? 0.7 : 0.55,
    images: areaPhotos[area.slug] ? [absoluteUrl(areaPhotos[area.slug].src)] : undefined,
  }));

  const comboPages: MetadataRoute.Sitemap = getCombos().map((combo) => ({
    url: absoluteUrl(`/${combo.service.slug}/${combo.area.slug}/`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
    images: [
      absoluteUrl(servicePhotos[combo.service.slug].src),
      ...(areaPhotos[combo.area.slug] ? [absoluteUrl(areaPhotos[combo.area.slug].src)] : []),
    ],
  }));

  const projectPages: MetadataRoute.Sitemap = publishedProjects().map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}/`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  return [home, ...staticPages, ...servicePages, ...areaPages, ...comboPages, ...projectPages];
}
