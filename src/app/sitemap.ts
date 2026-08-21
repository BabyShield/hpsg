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

  const lastModified = new Date();

  return [...staticPaths, ...servicePaths, ...areaPaths, ...comboPaths, ...projectPaths].map(
    (path) => {
      let priority = 0.6;
      if (path === "/") priority = 1;
      else if (servicePaths.includes(path)) priority = 0.9;
      else if (comboPaths.includes(path)) priority = 0.8;
      else if (areaPaths.includes(path)) priority = 0.7;
      else if (path === "/contact/" || path === "/about/") priority = 0.6;
      else if (path === "/privacy/") priority = 0.2;
      return {
        url: absoluteUrl(path),
        lastModified,
        changeFrequency: path === "/" || servicePaths.includes(path) ? ("weekly" as const) : ("monthly" as const),
        priority,
      };
    },
  );
}
