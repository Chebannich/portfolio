"use client"

import { useState } from "react";
import { skills, skillCategories } from "@/data/skills";

export default function Skills () {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
    
  return (
    <section className="flex flex-col justify-between items-center px-12 py-9" id="skills">
      <h2 className="font-medium text-5xl mb-12">Skills</h2>
      <div className="flex gap-6 mb-7">
        {skillCategories.map((category) => (
          <button key={category} onClick={() => setActiveCategory(activeCategory === category ? null : category)} className="px-4 py-2 rounded-full bg-sky-500 cursor-pointer">{category}</button>
        ))}
      </div>
      <div className="relative w-full h-[450px]">
        {skills.map((skill) => (
          <span key={skill.name} 
                style={{position: "absolute", top: skill.top, left: skill.left, fontSize: skill.size}}
                className={`px-3 py-1 rounded-full transition-opacity ${activeCategory === skill.category ? "bg-sky-500 text-white opacity-100" : activeCategory ? "bg-gray-700 opacity-30" : "bg-gray-700 opacity-100"}`}>
                  {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}