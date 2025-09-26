"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

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
          Ready to transform your space? We'd love to hear about your project and 
          explore how we can bring your architectural vision to life.
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
      info: "hello@architect.com",
      link: "mailto:hello@architect.com",
      description: "Drop us a line anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+91 98765 43210",
      link: "tel:+919876543210", 
      description: "Mon-Fri, 9AM-6PM IST"
    },
    {
      icon: MapPin,
      title: "Office",
      info: "Mumbai, India",
      link: "https://maps.google.com",
      description: "Visit our studio"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com",
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

const LocationSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">
            Visit Our Studio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Mumbai, our studio is where creativity meets functionality.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Map placeholder */}
          <div className="h-96 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
            <div className="text-center text-teal-700">
              <MapPin size={48} className="mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">Mumbai, India</p>
            </div>
          </div>

          {/* Studio info */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                <p className="text-gray-600">
                  123 Design Street<br />
                  Bandra West<br />
                  Mumbai, Maharashtra 400050
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: By appointment
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
                <p className="text-gray-600">
                  Complimentary parking available<br />
                  Accessible entrance<br />
                  Public transport nearby
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <LocationSection />
    </div>
  );
}