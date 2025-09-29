"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin, Instagram, Linkedin, } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const ContactHero = () => {
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
          Let's Create Together
        </motion.h1>
        
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to transform your space? I'd love to hear about your project and 
          explore how i can bring your architectural vision to life.
        </motion.p>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      info: "pavanmahadeva98@gmail.com",
      link: "mailto:pavanmahadeva98@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+44 7465620624",
      link: "tel:+447465620624", 
      description: "Mon-Fri, 9AM-6PM IST"
    },
    {
    icon: (props: any) => <FaWhatsapp {...props} />,
    title: "WhatsApp",
    info: "7465620624",
    link: "https://wa.me/447465620624", 
    description: "Chat with me on WhatsApp"
  }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/pavan_gowda_98?igsh=bjU5bWt1cWw2cnZv",
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: Linkedin, 
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <motion.h2
              className="text-3xl font-bold font-playfair text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.h2>

            <div className="space-y-8 mb-12">
              {contactDetails.map((detail, index) => (
                <motion.a
                  key={detail.title}
                  href={detail.link}
                  className="group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  data-cursor-hover
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <detail.icon size={20} />
                  </motion.div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{detail.title}</h3>
                    <p className="text-teal-600 font-medium mb-1">{detail.info}</p>
                    <p className="text-sm text-gray-600">{detail.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`p-3 bg-gray-100 text-gray-600 rounded-full transition-colors duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor-hover
                  >
                    <social.icon size={20} />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Start Your Project
              </h3>
              <p className="text-gray-600 mb-8">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
              
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactInfo />
    </div>
  );
}