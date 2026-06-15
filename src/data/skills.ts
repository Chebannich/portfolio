export type Skill = {
  category: string;
  name: string;
  top: string;
  left: string;
  size: string;
}

export const skillCategories = [
  "Core",
  "React Ecosystem",
  "Styling",
  "Browser API",
  "Tools",
  "UI/UX",
];

export const skills: Skill[] = [
  // Core
  { category: "Core", name: "JavaScript (ES6+)", top: "55.7%", left: "22.5%", size: "28px" },
  { category: "Core", name: "TypeScript", top: "91.2%", left: "43.7%", size: "30px" },
  { category: "Core", name: "HTML5", top: "20.9%", left: "52.7%", size: "24px" },
  { category: "Core", name: "CSS3", top: "4.4%", left: "86.9%", size: "24px" },
  { category: "Core", name: "Responsive Design", top: "74.0%", left: "55.4%", size: "22px" },
  { category: "Core", name: "Semantic HTML", top: "37.6%", left: "12.4%", size: "18px" },

  // React Ecosystem
  { category: "React Ecosystem", name: "React", top: "69.3%", left: "85.6%", size: "34px" },
  { category: "React Ecosystem", name: "Next.js", top: "53.0%", left: "52.7%", size: "32px" },
  { category: "React Ecosystem", name: "React Hooks", top: "32%", left: "62%", size: "20px" },
  { category: "React Ecosystem", name: "REST API", top: "16%", left: "20%", size: "20px" },

  // Styling
  { category: "Styling", name: "Tailwind CSS", top: "38.6%", left: "38.3%", size: "26px" },
  { category: "Styling", name: "Sass (SCSS)", top: "36.8%", left: "75.2%", size: "18px" },
  { category: "Styling", name: "CSS Grid", top: "57.2%", left: "73.3%", size: "20px" },
  { category: "Styling", name: "Flexbox", top: "83.4%", left: "18.9%", size: "18px" },
  { category: "Styling", name: "BEM", top: "20.3%", left: "37.5%", size: "18px" },
  { category: "Styling", name: "CSS Variables", top: "70.2%", left: "35.8%", size: "14px" },
  { category: "Styling", name: "CSS Nesting", top: "23.3%", left: "83.5%", size: "14px" },
  { category: "Styling", name: "CSS Container Queries", top: "84.7%", left: "69.5%", size: "15px" },

  // Browser API
  { category: "Browser API", name: "DOM API", top: "90.5%", left: "31.4%", size: "14px" },
  { category: "Browser API", name: "Event Loop", top: "24.0%", left: "3.9%", size: "14px" },
  { category: "Browser API", name: "LocalStorage", top: "70.1%", left: "6.4%", size: "16px" },

  // Tools
  { category: "Tools", name: "Vite", top: "37.1%", left: "25.8%", size: "22px" },
  { category: "Tools", name: "Webpack", top: "55.6%", left: "5.5%", size: "18px" },
  { category: "Tools", name: "ESLint", top: "8.0%", left: "37.2%", size: "18px" },
  { category: "Tools", name: "Git", top: "56.0%", left: "87.5%", size: "22px" },
  { category: "Tools", name: "GitHub", top: "8.5%", left: "72.7%", size: "16px" },

  // UI/UX
  { category: "UI/UX", name: "Figma", top: "4.8%", left: "52.3%", size: "18px" },
];