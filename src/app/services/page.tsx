"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, PaintBucket, Ruler, HardHat, Home, Factory, Trophy, Users, Clock, CheckCircle, X, Menu } from 'lucide-react';

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to handle navigation


  return (
    <>
      {/* Header */}
      <header className="fixed w-full bg-white bg-opacity-100 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 relative w-[250px] h-[60px]">
              <Image 
                src="/images/chirammel_construction.png"
                alt="Chirammel Construction Logo"
                width={350}
                height={50}
                className="object-contain"
                priority
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-700 hover:text-yellow-500 font-xl transition duration-300">
                Home
              </Link>
              <Link href="/about" className="text-blue-700 hover:text-yellow-500 font-medium transition duration-300">
                About Us
              </Link>
              <Link href="/gallery" className="text-blue-700 hover:text-yellow-500 font-medium transition duration-300">
                Gallery
              </Link>
              <Link href="/services" className="text-blue-700 hover:text-yellow-500 font-medium transition duration-300">
                Services
              </Link>
              <Link href="/contact" className="text-blue-700 hover:text-yellow-500 font-medium transition duration-300">
                Contact
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-800 hover:text-yellow-500 focus:outline-none"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
{mobileMenuOpen && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-75">
    <div className="fixed top-0 right-0 w-full max-w-[16rem] h-full bg-white p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-8">
        <button
          type="button"
          className="text-gray-500 hover:text-yellow-500"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex flex-col space-y-6">
        <Link 
          href="/" 
          className="block py-2 text-blue-700 hover:text-yellow-500 font-medium text-lg"
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/about" 
          className="block py-2 text-blue-700 hover:text-yellow-500 font-medium text-lg"
          onClick={() => setMobileMenuOpen(false)}
        >
          About Us
        </Link>
        <Link 
          href="/gallery" 
          className="block py-2 text-blue-700 hover:text-yellow-500 font-medium text-lg"
          onClick={() => setMobileMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link 
          href="/services" 
          className="block py-2 text-blue-700 hover:text-yellow-500 font-medium text-lg"
          onClick={() => setMobileMenuOpen(false)}
        >
          Services
        </Link>
        <Link   
          href="/contact" 
          className="block py-2 text-blue-700 hover:text-yellow-500 font-medium text-lg"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </div>
  </div>
)}
      </header>

      <main className="pt-20 bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <Image 
              src="/images/home.jpg"  
              alt="Construction Excellence" 
              fill 
              className="object-cover"
              priority 
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Construction Services</h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Building excellence through innovation, precision, and dedication to craft the spaces of tomorrow.
            </p>
            <Link href="/contact" className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-md font-semibold hover:bg-yellow-400 transition duration-300">
              Get a Free Consultation
            </Link>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-black">Why Choose Chirammel Constructions?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Trophy className="w-8 h-8 text-yellow-500" />,
                  title: "25+ Years Experience",
                  description: "Decades of excellence in construction and project management"
                },
                {
                  icon: <Users className="w-8 h-8 text-yellow-500" />,
                  title: "Expert Team",
                  description: "Skilled professionals dedicated to quality craftsmanship"
                },
                {
                  icon: <Clock className="w-8 h-8 text-yellow-500" />,
                  title: "On-Time Delivery",
                  description: "Committed to meeting project deadlines with precision"
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
                  title: "Quality Assured",
                  description: "Highest standards of construction quality and safety"
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-block p-4 bg-gray-50 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Our Core Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Home className="w-12 h-12 text-yellow-500" />,
                  title: "Residential Construction",
                  description: "Custom homes, villas, and apartment complexes built to your specifications with premium quality materials and craftsmanship.",
                  features: ["Custom Home Design", "Interior Finishing", "Sustainable Building", "Modern Amenities"]
                },
                {
                  icon: <Building2 className="w-12 h-12 text-yellow-500" />,
                  title: "Commercial Construction",
                  description: "State-of-the-art commercial buildings, offices, and retail spaces designed for functionality and aesthetic appeal.",
                  features: ["Office Buildings", "Retail Spaces", "Hotels", "Restaurants"]
                },
                {
                  icon: <Factory className="w-12 h-12 text-yellow-500" />,
                  title: "Industrial Construction",
                  description: "Robust industrial facilities and warehouses built to meet your operational requirements and safety standards.",
                  features: ["Warehouses", "Factories", "Storage Facilities", "Industrial Plants"]
                },
                {
                  icon: <PaintBucket className="w-12 h-12 text-yellow-500" />,
                  title: "Renovation Services",
                  description: "Transform your existing space with our comprehensive renovation and remodeling services.",
                  features: ["Interior Renovation", "Exterior Renovation", "Space Optimization", "Modern Upgrades"]
                },
                {
                  icon: <Ruler className="w-12 h-12 text-yellow-500" />,
                  title: "Architecture & Design",
                  description: "Expert architectural design services to bring your vision to life with detailed planning and 3D visualization.",
                  features: ["3D Modeling", "Space Planning", "Sustainable Design", "Permit Processing"]
                },
                {
                  icon: <HardHat className="w-12 h-12 text-yellow-500" />,
                  title: "Project Management",
                  description: "Comprehensive project management services ensuring timely completion within budget.",
                  features: ["Timeline Management", "Budget Control", "Quality Assurance", "Resource Optimization"]
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Our Working Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "We discuss your vision, requirements, and project scope"
                },
                {
                  step: "02",
                  title: "Planning & Design",
                  description: "Detailed project planning and architectural design"
                },
                {
                  step: "03",
                  title: "Construction",
                  description: "Expert execution with quality materials and craftsmanship"
                },
                {
                  step: "04",
                  title: "Project Delivery",
                  description: "Final inspection and handover of your dream space"
                }
              ].map((process, index) => (
                <div key={index} className="relative p-6 group">
                  <div className="text-7xl font-bold text-yellow-500/20 absolute -top-4 left-0">
                    {process.step}
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-yellow-500 py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Start Your Construction Project?
            </h2>
            <p className="text-black/80 text-xl mb-8">
              Let&apos;s bring your vision to life with our expert construction services.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}