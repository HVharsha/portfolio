"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  User,
  Ruler,
  Download,
} from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";
import { notFound } from "next/navigation";

const projects = projectsData as Project[];

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound(); // ✅ will trigger Next.js 404 page
  }

  return (
    <div className="pt-16">
      <ProjectHero project={project} />
      <ProjectDetails project={project} />
      <ProjectGallery project={project} />
    </div>
  );
}

//
// 🔹 Hero Section
//
const ProjectHero = ({ project }: { project: Project }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.span
          className="inline-block px-4 py-2 bg-teal-600 text-white text-sm rounded-full font-medium mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {project.category}
        </motion.span>

        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold font-playfair mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {project.shortDescription}
        </motion.p>

        {/* Meta */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {[
            { icon: Calendar, label: project.year.toString() },
            { icon: MapPin, label: project.location },
            { icon: User, label: project.client },
            { icon: Ruler, label: project.area },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Back button */}
      <motion.div
        className="absolute top-24 left-4 sm:left-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors duration-300"
          data-cursor-hover
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </motion.div>
    </section>
  );
};

//
// 🔹 Project Details
//
const ProjectDetails = ({ project }: { project: Project }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Project Details
              </h3>

              <div className="space-y-4">
                {[
                  { label: "Client", value: project.client },
                  { label: "Year", value: project.year },
                  { label: "Location", value: project.location },
                  { label: "Area", value: project.area },
                  { label: "Role", value: project.role },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex justify-between py-2 border-b border-gray-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="font-medium text-gray-600">
                      {item.label}:
                    </span>
                    <span className="text-gray-900">{item.value}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tools */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h4 className="font-semibold text-gray-900 mb-4">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <motion.span
                      key={tool}
                      className="px-3 py-1 bg-teal-50 text-teal-700 text-sm rounded-full font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Download PDF */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <AnimatedButton
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    // TODO: Replace with actual PDF link
                    console.log("Download case study PDF for:", project.title);
                  }}
                >
                  <Download size={16} />
                  Download Case Study
                </AnimatedButton>
              </motion.div>
            </div>

            {/* Main Description */}
            <div className="lg:col-span-2">
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About This Project
              </motion.h3>

              <motion.div
                className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p>{project.description}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

//
// 🔹 Project Gallery
//
const ProjectGallery = ({ project }: { project: Project }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold font-playfair text-gray-900 mb-4">
            Project Gallery
          </h3>
          <p className="text-xl text-gray-600">
            Explore detailed views and architectural moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

//
// 🔹 Static Params (Next.js prebuilds pages at build time)
//
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

