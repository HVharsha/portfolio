"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjectCard } from '@/components/ProjectCard';
import { Filter } from 'lucide-react';
import projectsData from '@/data/projects.json';
import { Project } from '@/types';

const projects = projectsData as Project[];

const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Competition'];

const ProjectsHero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section ref={ref} className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl lg:text-6xl font-bold font-playfair text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Projects
        </motion.h1>
        
        <motion.p
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore our portfolio of innovative architectural solutions that blend 
          creativity with functionality.
        </motion.p>

        <motion.div
          className="inline-flex items-center gap-2 text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Filter size={16} />
          <span>{projects.length} Projects</span>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectFilter = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-teal-600 text-white shadow-lg'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-cursor-hover
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      layout
    >
      <AnimatePresence mode="wait">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div>
      <ProjectsHero />
      
      <section ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProjectGrid projects={filteredProjects} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}