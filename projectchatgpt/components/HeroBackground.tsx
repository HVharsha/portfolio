"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HeroBackground } from "./HeroBackground"; // keep your particle background

const featuredProjects = [
  {
    title: "Modern Villa",
    slug: "modern-villa",
    image: "/images/projects/villa.jpg",
  },
  {
    title: "Urban Tower",
    slug: "urban-tower",
    image: "/images/projects/tower.jpg",
  },
  {
    title: "Glass Pavilion",
    slug: "glass-pavilion",
    image: "/images/projects/pavilion.jpg",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background: photo/video + particles + gradient */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt="Architectural background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* dark overlay */}
        <HeroBackground />
      </div>

      {/* Hero text */}
      <motion.div
        className="relative z-10 px-4 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">
          Architectural <span className="text-amber-500">Excellence</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 font-sans">
          Creating innovative spaces that blend functionality, sustainability,
          and aesthetic beauty.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-lg bg-amber-500 text-white font-semibold shadow-md hover:bg-amber-600"
            >
              View Projects
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-lg border border-amber-500 text-amber-500 font-semibold hover:bg-amber-500 hover:text-white"
            >
              Get In Touch
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Featured Projects Section */}
      <motion.div
        className="relative z-10 mt-24 w-full max-w-6xl px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              className="relative group overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={350}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <Link
                  href={`/projects/${project.slug}`}
                  className="px-4 py-2 bg-amber-500 text-white rounded-md shadow-md"
                >
                  {project.title}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
