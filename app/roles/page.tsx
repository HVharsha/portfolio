"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesData from "@/data/services.json";
import { Service } from "@/types";

const services = servicesData as Service[];

const ServicesHero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section
      ref={ref}
      className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl lg:text-6xl font-bold font-playfair text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From initial concept to final construction, we provide comprehensive
          architectural services tailored to bring your vision to life.
        </motion.p>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="relative z-10 p-8 flex flex-col h-full flex-grow">
        <motion.div
          className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: 5 }}
        >
          <div className="w-8 h-8 bg-white rounded-md opacity-80" />
        </motion.div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

        <div className="space-y-3 mb-8">
          {service.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + featureIndex * 0.05 + 0.3,
              }}
            >
              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
          className="mt-auto"
        >
          <Button
            href="/contact"
            variant="outline"
            className="w-full group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600"
          >
            Get Started
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            />
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

const ServicesGrid = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description:
        "We begin with an in-depth consultation to understand your vision, requirements, and project goals.",
    },
    {
      step: "02",
      title: "Concept Development",
      description:
        "Our team creates initial concepts and design proposals that align with your vision and budget.",
    },
    {
      step: "03",
      title: "Design Development",
      description:
        "We refine the chosen concept, developing detailed plans, elevations, and technical specifications.",
    },
    {
      step: "04",
      title: "Construction Support",
      description:
        "We provide ongoing support during construction to ensure the design is implemented correctly.",
    },
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
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A systematic approach to deliver exceptional architectural solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white text-xl font-bold rounded-full mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.step}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-teal-600 to-teal-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl font-bold font-playfair text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Ready to Start Your Project?
        </motion.h2>

        <motion.p
          className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's discuss how we can bring your architectural vision to life with
          innovative design and meticulous attention to detail.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button href="/contact" variant="secondary" size="lg">
            Start Your Project
          </Button>
          <Button
            href="/projects"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-teal-600"
          >
            View Our Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default function ServicesPage() {
  return (
    <div>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
