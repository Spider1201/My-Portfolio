import React, { useState } from 'react'
import {cn} from "@/lib/utils"
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiReactos,
    SiPython,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiJson,
    SiGit,
    SiGithub,
    SiExpo,
    SiAutodeskrevit,     // optional
} from "react-icons/si";
import { FaJava } from 'react-icons/fa';
import { BiLogoVisualStudio } from "react-icons/bi";
import { PiMicrosoftWordLogo } from "react-icons/pi";
import { VscTerminalPowershell } from "react-icons/vsc";

const SkillsSection = () => {
   

  const skills = [
    // Frontend
    { name: "HTML", icon: <SiHtml5 size={38} />, category: "Frontend" },
    { name: "CSS", icon: <SiCss3 size={38} />, category: "Frontend" },
    { name: "JavaScript", icon: <SiJavascript size={38} />, category: "Frontend" },
    { name: "React", icon: <SiReact size={38} />, category: "Frontend" },
    { name: "React Native", icon: <SiReactos size={38}/>, category: "Frontend"},

    // Backend
    { name: "Java", icon: <FaJava size={38} />, category: "Backend" },
    { name: "Python", icon: <SiPython size={38} />, category: "Backend" },
    { name: "Node.js", icon: <SiNodedotjs size={38} />, category: "Backend" },
    { name: "Express.js", icon: <SiExpress size={38} />, category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb size={38} />, category: "Backend" },
    { name: "JSON", icon: <SiJson size={38} />, category: "Backend" },

    // Tools
    { name: "Git", icon: <SiGit size={38} />, category: "Tools" },
    { name: "GitHub", icon: <SiGithub size={38} />, category: "Tools" },
    { name: "VS Code", icon: <BiLogoVisualStudio size={38} />, category: "Tools" },
    { name: "Expo", icon: <SiExpo size={38} />, category: "Tools" },
    { name: "Command Line / Terminal", icon: <VscTerminalPowershell size={38} />, category: "Tools" },
    { name: "Microsoft Office Suite", icon: <PiMicrosoftWordLogo size={38} />, category: "Tools" }, 
    { name: "Autodesk Revit", icon: <SiAutodeskrevit size={38} />, category: "Tools" },   
];
        

    const categories = ["all", "Frontend", "Backend", "Tools",]
     const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)


    return (
        <section id='skills' className="py-24 px-4 relative bg-secondary/30">
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My <span className='text-primary'>Skills</span>
                </h2>
                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                            onClick={() => setActiveCategory(category)}
                        >{category}

                        </button>
                    ))}
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                            <div className='text-left mb-4 flex justify-between'>
                                {skill.icon}
                                <h3 className='font-semibold text-lg hover:text-primary'>{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection