"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/types";

export default function ProjectGallery({ project }: { project: Project }) {
  if (!project.images || project.images.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-3xl font-bold mb-10 text-gray-900 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Project Gallery
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((img, i) => (
            <motion.div
              key={i}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Image
                src={img}
                alt={`${project.title} image ${i + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
