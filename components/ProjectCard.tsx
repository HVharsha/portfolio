"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Link href={`/projects/${project.slug}`} data-cursor-hover>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
          
          {/* Category badge */}
          <motion.div
            className="absolute top-4 left-4 px-3 py-1 bg-teal-600 text-white text-sm rounded-full font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
          >
            {project.category}
          </motion.div>

          {/* Project info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <motion.h3 
              className="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            >
              {project.title}
            </motion.h3>
            
            <motion.p 
              className="text-sm text-gray-200 mb-3 line-clamp-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
            >
              {project.shortDescription}
            </motion.p>
            
            <motion.div 
              className="flex items-center justify-between text-sm text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
            >
              <span>{project.location}</span>
              <span>{project.year}</span>
            </motion.div>
          </div>

          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </div>

        {/* Project details */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.slice(0, 3).map((tool, toolIndex) => (
              <motion.span
                key={tool}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + toolIndex * 0.05 + 0.5 }}
              >
                {tool}
              </motion.span>
            ))}
            {project.tools.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                +{project.tools.length - 3} more
              </span>
            )}
          </div>
          
          <motion.div 
            className="flex items-center justify-between text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
          >
            <span>{project.area}</span>
            <span className="text-teal-600 font-medium group-hover:text-teal-700 transition-colors">
              View Project →
            </span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};