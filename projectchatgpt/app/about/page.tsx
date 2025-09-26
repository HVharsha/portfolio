"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';
import skillsData from '@/data/skills.json';
import { Skill } from '@/types';

const skills = skillsData as Skill[];

const AboutHero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl">
  <Image
   src="/images/pavan.jpg"// 👈 use your file name here
    alt="Architect Portrait"
    fill
    className="object-cover transition-transform duration-700 hover:scale-105"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
</div>

            
            {/* Floating accent */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-teal-600 rounded-full opacity-20"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              About Me
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I'm a passionate architect and recent MSc graduate in Construction Project Management, 
              I bring a strong blend of project management expertise and architectural design capabilities. 
              With experience as a BIM Coordinator, I specialize in bridging design vision with efficient project execution,
               leveraging my background in BIM and construction management to deliver sustainable and innovative solutions.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              My approach combines cutting-edge technology with timeless design principles, 
              ensuring that every project tells a unique story while meeting the highest 
              standards of functionality and sustainability.
            </motion.p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, label: "MSc CPM — UWE Bristol,UK", value: "2021" },                
                { icon: GraduationCap, label: "B.Arch — Mysore School of Architecture, India", value: "2024" },
                { icon: MapPin, label: "Based in Bristol", value: "United Kingdom" },
                { icon: Calendar, label: "Years Experience", value: "4+" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <item.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.value}</p>
                    <p className="text-xs text-gray-600">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExperienceTimeline = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const experiences = [
    {
      year: "2025 - Present",
      title: "4D BIM Coordinator",
      company: "Statom Group",
      description: "specialize in 4D BIM coordination, aligning digital models with project timelines to ensure efficient construction delivery."
    },
    {
      year: "Aug 2021 - Jan 2022", 
      title: "Visiting Faculty",
      company: "Mysore School of Architecture",
      description: "Teaching 3rd year BArch students, Rhino Jan 2022 3D and Revit"
    },
    {
      year: "Aug 2021 - Aug 2023",
      title: "Project Architect", 
      company: "Desirazu Associates",
      description: "Handling Residential Project, Assisting Senior Architect, Technical Support,Handling Commercial, Institutional Projects, Maintaining CDE, BIM Coordination."
    },
    {
      year: "Feb 2021 - July 2021",
      title: "Intern Architect",
      company: "Desirazu Associates",
      description: "3D Modeler Coordination with Jr Architect."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">
            Experience Timeline
          </h2>
          <p className="text-xl text-gray-600">
            A journey of architectural growth and innovation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-12 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline line */}
              <div className="flex-shrink-0 w-4 h-4 bg-teal-600 rounded-full mt-1 mr-6 relative z-10">
                {index < experiences.length - 1 && (
                  <div className="absolute top-4 left-1/2 w-0.5 h-20 bg-teal-200 transform -translate-x-1/2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-grow bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                    {exp.year}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">{exp.company}</h4>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Map skill names to logos (store your icons in /public/icons/)
  const skillIcons: Record<string, string> = {
    AutoCAD: "/icons/autocad-seeklogo.png",
    Revit: "/icons/revit.png",
    SketchUp: "/icons/SketchUp.jpg",
    Rhino: "/icons/Rhino.png",
    Grasshopper: "/icons/Grasshopper.png",
    Navisworks: "/icons/navisworks.png",
    Enscape: "/icons/enscape.jpg",
    Lumion: "/icons/Lumion.jpg",
    Photoshop: "/icons/photoshop.png",
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">
            Software & Tools
          </h2>
          <p className="text-xl text-gray-600">
            Technical expertise across the architectural workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              className="bg-gray-50 p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category}</h3>
              <div className="space-y-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.1 }}
                  >
                    {/* Skill Row */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {skillIcons[skill.name] && (
                          <Image
                            src={skillIcons[skill.name]}
                            alt={skill.name}
                            width={28}
                            height={28}
                            className="rounded-md object-contain"
                          />
                        )}
                        <span className="font-medium text-gray-900">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + index * 0.1 + 0.3,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <ExperienceTimeline />
      <SkillsSection />
      
    </div>
  );
}