export type Skill = {
  category: string;
  name: string;
  top: string;
  left: string;
  size: string;
  duration: number;
  xAmp: number;
  yAmp: number;
  delay: number;
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
  { category: "Core", name: "JavaScript (ES6+)", top: "55.7%", left: "22.5%", size: "28px", duration: 5.0, xAmp: 16, yAmp: 16, delay: 1.3 },
  { category: "Core", name: "TypeScript", top: "91.2%", left: "43.7%", size: "30px", duration: 7.5, xAmp: 16, yAmp: 8, delay: 1.1 },
  { category: "Core", name: "HTML5", top: "20.9%", left: "52.7%", size: "24px", duration: 4.9, xAmp: 10, yAmp: 12, delay: 1.7 },
  { category: "Core", name: "CSS3", top: "4.4%", left: "86.9%", size: "24px", duration: 6.4, xAmp: -6, yAmp: 8, delay: 1.7 },
  { category: "Core", name: "Responsive Design", top: "74.0%", left: "55.4%", size: "22px", duration: 7.2, xAmp: -18, yAmp: -13, delay: 1.9 },
  { category: "Core", name: "Semantic HTML", top: "37.6%", left: "12.4%", size: "18px", duration: 7.2, xAmp: -10, yAmp: -9, delay: 1.8 },

  // React Ecosystem
  { category: "React Ecosystem", name: "React", top: "69.3%", left: "85.6%", size: "34px", duration: 6.2, xAmp: -12, yAmp: -12, delay: 1.3 },
  { category: "React Ecosystem", name: "Next.js", top: "53.0%", left: "52.7%", size: "32px", duration: 5.4, xAmp: -15, yAmp: -17, delay: 1.1 },
  { category: "React Ecosystem", name: "React Hooks", top: "32%", left: "62%", size: "20px", duration: 7.0, xAmp: -8, yAmp: -16, delay: 1.1 },
  { category: "React Ecosystem", name: "REST API", top: "16%", left: "20%", size: "20px", duration: 5.2, xAmp: -8, yAmp: -10, delay: 0.9 },

  // Styling
  { category: "Styling", name: "Tailwind CSS", top: "38.6%", left: "38.3%", size: "26px", duration: 6.4, xAmp: 12, yAmp: -15, delay: 1.1 },
  { category: "Styling", name: "Sass (SCSS)", top: "36.8%", left: "75.2%", size: "18px", duration: 6.3, xAmp: -9, yAmp: 8, delay: 0.9 },
  { category: "Styling", name: "CSS Grid", top: "57.2%", left: "73.3%", size: "20px", duration: 6.5, xAmp: -13, yAmp: -6, delay: 1.9 },
  { category: "Styling", name: "Flexbox", top: "83.4%", left: "18.9%", size: "18px", duration: 4.2, xAmp: -8, yAmp: -18, delay: 1.3 },
  { category: "Styling", name: "BEM", top: "20.3%", left: "37.5%", size: "18px", duration: 4.6, xAmp: -12, yAmp: -18, delay: 0.4 },
  { category: "Styling", name: "CSS Variables", top: "70.2%", left: "35.8%", size: "14px", duration: 7.4, xAmp: 11, yAmp: 17, delay: 1.4 },
  { category: "Styling", name: "CSS Nesting", top: "23.3%", left: "83.5%", size: "14px", duration: 4.8, xAmp: 15, yAmp: 15, delay: 0.7 },
  { category: "Styling", name: "CSS Container Queries", top: "84.7%", left: "69.5%", size: "15px", duration: 6.9, xAmp: 11, yAmp: 10, delay: 0.3 },

  // Browser API
  { category: "Browser API", name: "DOM API", top: "90.5%", left: "31.4%", size: "14px", duration: 6.7, xAmp: 7, yAmp: 8, delay: 0.9 },
  { category: "Browser API", name: "Event Loop", top: "24.0%", left: "3.9%", size: "14px", duration: 6.4, xAmp: 18, yAmp: -13, delay: 1.3 },
  { category: "Browser API", name: "LocalStorage", top: "70.1%", left: "6.4%", size: "16px", duration: 6.1, xAmp: -8, yAmp: -7, delay: 0.6 },

  // Tools
  { category: "Tools", name: "Vite", top: "37.1%", left: "25.8%", size: "22px", duration: 5.1, xAmp: 15, yAmp: -13, delay: 1.7 },
  { category: "Tools", name: "Webpack", top: "55.6%", left: "5.5%", size: "18px", duration: 4.1, xAmp: -11, yAmp: -8, delay: 1.1 },
  { category: "Tools", name: "ESLint", top: "8.0%", left: "37.2%", size: "18px", duration: 6.1, xAmp: 13, yAmp: 16, delay: 0.6 },
  { category: "Tools", name: "Git", top: "56.0%", left: "87.5%", size: "22px", duration: 4.1, xAmp: 14, yAmp: 17, delay: 0.5 },
  { category: "Tools", name: "GitHub", top: "8.5%", left: "72.7%", size: "16px", duration: 6.7, xAmp: -9, yAmp: 12, delay: 0.7 },

  // UI/UX
  { category: "UI/UX", name: "Figma", top: "4.8%", left: "52.3%", size: "18px", duration: 5.0, xAmp: -10, yAmp: -9, delay: 0.9 },
];