"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Award, Users, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Assume these components are defined within this file or their full code is provided.
// In a single-file React app, we must define all components within the same file.
const HeroBackground = () => {
    // Placeholder for HeroBackground component
    return <div className="absolute inset-0 z-0 bg-gray-800"></div>;
};

const AnimatedButton = ({ href, children, variant, size, className }) => {
    // Placeholder for AnimatedButton component
    return <a href={href} className={`px-6 py-3 rounded-full font-bold transition-colors ${variant === 'outline' ? 'border-2 border-white text-white' : 'bg-white text-gray-800'} ${className}`}>{children}</a>;
};

const ProjectCard = ({ project, index }) => {
    // Placeholder for ProjectCard component
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600">{project.shortDescription}</p>
        </div>
    );
};

// Mock data and types as we don't have access to the original files
const projects = [
  {
    slug: "lakeside-house",
    title: "Lakeside House",
    shortDescription: "A modern retreat designed for serenity and seamless integration with nature.",
    heroImage: "/images/lakeside-house-hero.jpg",
    category: "Residential",
    location: "Lake District, UK",
    year: 2023,
    area: "350 sqm",
    tools: ["AutoCAD", "SketchUp", "V-Ray", "Photoshop"],
  },
  {
    slug: "urban-hub",
    title: "The Urban Hub",
    shortDescription: "A multi-purpose commercial building with a focus on sustainable urban development.",
    heroImage: "/images/urban-hub-hero.jpg",
    category: "Commercial",
    location: "New York, USA",
    year: 2022,
    area: "1200 sqm",
    tools: ["Revit", "Lumion", "Grasshopper"],
  },
  {
    slug: "eco-village",
    title: "Eco-Village",
    shortDescription: "A community-focused housing project built entirely with renewable materials.",
    heroImage: "/images/eco-village-hero.jpg",
    category: "Sustainable",
    location: "Kyoto, Japan",
    year: 2021,
    area: "5000 sqm",
    tools: ["ArchiCAD", "Rhino", "Enscape"],
  },
];

// Hero section component
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      <HeroBackground />
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold font-playfair mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              staggerChildren: 0.1
            }}
          >
            <motion.span className="block">Architectural</motion.span>
            <motion.span className="block text-teal-400">Excellence</motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Creating innovative spaces that blend functionality, sustainability, and aesthetic beauty.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <AnimatedButton 
              href="/projects" 
              size="lg"
              className="w-full sm:w-auto"
            >
              View Projects
            </AnimatedButton>
            <AnimatedButton 
              href="/contact" 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto"
            >
              Get In Touch
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/70 cursor-pointer"
          data-cursor-hover
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Stats section component
const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  const stats = [
    { icon: Award, number: 25, label: "Awards Won", suffix: "+" },
    { icon: Users, number: 150, label: "Happy Clients", suffix: "+" },
    { icon: Calendar, number: 8, label: "Years Experience", suffix: "" },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon size={32} />
              </motion.div>
              
              <motion.h3
                className="text-4xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                >
                  {stat.number}{stat.suffix}
                </motion.span>
              </motion.h3>
              
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Projects section component
const FeaturedProjects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest architectural innovations and design solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <AnimatedButton href="/projects" size="lg">
            View All Projects
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
};

// Main Home page component
export default function Home() {
  return (
    <div>
      <Hero />
      <StatsSection />
      <FeaturedProjects />
    </div>
  );
}
