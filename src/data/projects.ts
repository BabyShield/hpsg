export type Project = {
  slug: string;
  title: string;
  serviceLabel: string;
  areaLabel: string;
  postcode: string;
  summary: string;
  approach: string;
  specHighlights: string[];
  photoDir: string;
};

export const projects: Project[] = [
  {
    slug: "tbc-project-01",
    title: "[TBC: project title from supplied HR summary]",
    serviceLabel: "[TBC: service]",
    areaLabel: "[TBC: area]",
    postcode: "[TBC]",
    summary:
      "Case study withheld until a project summary is supplied. We do not invent projects, clients or addresses.",
    approach: "[TBC: approach]",
    specHighlights: ["[TBC: spec highlights]"],
    photoDir: "/images/projects/tbc-project-01",
  },
  {
    slug: "tbc-project-02",
    title: "[TBC: project title from supplied HR summary]",
    serviceLabel: "[TBC: service]",
    areaLabel: "[TBC: area]",
    postcode: "[TBC]",
    summary:
      "Case study withheld until a project summary is supplied. We do not invent projects, clients or addresses.",
    approach: "[TBC: approach]",
    specHighlights: ["[TBC: spec highlights]"],
    photoDir: "/images/projects/tbc-project-02",
  },
  {
    slug: "tbc-project-03",
    title: "[TBC: project title from supplied HR summary]",
    serviceLabel: "[TBC: service]",
    areaLabel: "[TBC: area]",
    postcode: "[TBC]",
    summary:
      "Case study withheld until a project summary is supplied. We do not invent projects, clients or addresses.",
    approach: "[TBC: approach]",
    specHighlights: ["[TBC: spec highlights]"],
    photoDir: "/images/projects/tbc-project-03",
  },
  {
    slug: "tbc-project-04",
    title: "[TBC: project title from supplied HR summary]",
    serviceLabel: "[TBC: service]",
    areaLabel: "[TBC: area]",
    postcode: "[TBC]",
    summary:
      "Case study withheld until a project summary is supplied. We do not invent projects, clients or addresses.",
    approach: "[TBC: approach]",
    specHighlights: ["[TBC: spec highlights]"],
    photoDir: "/images/projects/tbc-project-04",
  },
  {
    slug: "tbc-project-05",
    title: "[TBC: project title from supplied HR summary]",
    serviceLabel: "[TBC: service]",
    areaLabel: "[TBC: area]",
    postcode: "[TBC]",
    summary:
      "Case study withheld until a project summary is supplied. We do not invent projects, clients or addresses.",
    approach: "[TBC: approach]",
    specHighlights: ["[TBC: spec highlights]"],
    photoDir: "/images/projects/tbc-project-05",
  },
  {
    slug: "tbc-project-06",
    title: "[TBC: project title from supplied HR summary]",
    serviceLabel: "[TBC: service]",
    areaLabel: "[TBC: area]",
    postcode: "[TBC]",
    summary:
      "Case study withheld until a project summary is supplied. We do not invent projects, clients or addresses.",
    approach: "[TBC: approach]",
    specHighlights: ["[TBC: spec highlights]"],
    photoDir: "/images/projects/tbc-project-06",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
