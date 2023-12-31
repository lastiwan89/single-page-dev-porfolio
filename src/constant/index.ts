// icons
type Icons = {
  label: string;
  url: string;
};

export const ICONS: Icons[] = [
  {
    label: "github",
    url: "/icon-github.svg",
  },
  {
    label: "frontedmentor",
    url: "/icon-frontend-mentor.svg",
  },
  {
    label: "linkedln",
    url: "/icon-linkedin.svg",
  },
  {
    label: "twitter",
    url: "/icon-twitter.svg",
  },
];

// skill section
type Skill = {
  label: string;
  years: string;
};

export const SKILL: Skill[] = [
  {
    label: "HTML",
    years: "4 years experience",
  },
  {
    label: "CSS",
    years: "4 Years Experience",
  },
  {
    label: "Javascript",
    years: "4 Years Experience",
  },
  {
    label: "Accessibility",
    years: "4 Years Experience",
  },
  {
    label: "React",
    years: "3 Years Experience",
  },
  {
    label: "Sass",
    years: "3 Years Experience",
  },
];

// Project section
type Project = {
  label: string;
  tech: {
    tech1: string;
    tech2?: string;
    tech3?: string;
  };
  url: string;
};
export const PROJECT: Project[] = [
  {
    label: "design portfolio",
    tech: {
      tech1: "html",
      tech2: "css",
    },
    url: "/thumbnail-project-1-small.webp",
  },
  {
    label: "e-learning landing page",
    tech: {
      tech1: "html",
      tech2: "css",
    },
    url: "/thumbnail-project-2-small.webp",
  },
  {
    label: "todo web app",
    tech: {
      tech1: "html",
      tech2: "css",
      tech3: "javascript",
    },
    url: "/thumbnail-project-3-small.webp",
  },
  {
    label: "entertainment web app",
    tech: {
      tech1: "html",
      tech2: "css",
      tech3: "javascript",
    },
    url: "/thumbnail-project-4-small.webp",
  },
  {
    label: "memory game",
    tech: {
      tech1: "html",
      tech2: "css",
      tech3: "javascript",
    },
    url: "/thumbnail-project-5-small.webp",
  },
  {
    label: "art gallery showcase",
    tech: {
      tech1: "html",
      tech2: "css",
      tech3: "javascript",
    },
    url: "/thumbnail-project-6-small.webp",
  },
];
