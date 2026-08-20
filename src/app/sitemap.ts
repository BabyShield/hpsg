import { publishedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { getCombos } from "@/lib/matrix";
import { absoluteUrl } from "@/lib/schema";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/areas/",
    "/about/",
    "/contact/",
    "/group/",
    "/privacy/",
    "/projects/",
  ];

  const servicePaths = services.map((service) => `/${service.slug}/`);
  const areaPaths = areas.map((area) => `/areas/${area.slug}/`);
  const comboPaths = getCombos().map(
    (combo) => `/${combo.service.slug}/${combo.area.slug}/`,
  );
  const projectPaths = publishedProjects().map((project) => `/projects/${project.slug}/`);

  return [...staticPaths, ...servicePaths, ...areaPaths, ...comboPaths, ...projectPaths].map(
    (path) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    }),
  );
}
