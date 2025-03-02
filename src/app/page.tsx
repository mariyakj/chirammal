"use client"
import { useState } from 'react'
import Image from 'next/image'
import { MessageCircle, X, Menu } from 'lucide-react'
import DownloadBrochureButton from '@/components/DownloadBrochureButton'
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
}

// WhatsApp Button Component
const WhatsAppButton = () => {
  const phoneNumber = "919895466438";
  const message = "Hello! Im interested in your construction services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-16 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
      </span>
    </a>
  );
};

const services: Service[] = [
  {
    title: 'Commercial Construction',
    description: 'State-of-the-art commercial buildings and office spaces built to your specifications, focusing on functionality and modern design.'
  },
  {
    title: 'Residential Projects',
    description: 'Custom homes and residential developments that combine comfort, style, and sustainable building practices.'
  },
  {
    title: 'Renovation',
    description: 'Expert renovation services to transform and modernize your existing spaces while maintaining their character.'
  },
  {
    title: 'Interior Design',
    description: 'Professional interior design services to create beautiful, functional spaces that reflect your vision.'
  },
  {
    title: 'Project Management',
    description: 'Comprehensive project management ensuring your construction project is completed on time and within budget.'
  },
  {
    title: 'Sustainable Building',
    description: 'Green building solutions that minimize environmental impact while maximizing energy efficiency.'
  }
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-white bg-opacity-100 shadow-md z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 relative w-[250px] h-[60px]">
              <Image 
                src="/images/chirammel_construction.png"
                alt="Chirammel Construction Logo"
                width={350}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/about"
                className="text-blue-700 hover:text-yellow-500 text-base font-medium transition duration-300"
              >
                About Us
              </Link>
              <Link 
                href="/gallery"
                className="text-blue-700 hover:text-yellow-500 text-base font-medium transition duration-300"
              >
                Gallery
              </Link>
              <Link 
                href="/services"
                className="text-blue-700 hover:text-yellow-500 text-base font-medium transition duration-300"
              >
                Services
              </Link>
              <Link 
                href="/contact"
                className="text-blue-700 hover:text-yellow-500 text-base font-medium transition duration-300"
              >
                Contact Us
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
                <Link href="/" className="block py-2 text-blue-700 hover:text-yellow-500 font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/about" className="block py-2 text-blue-700 hover:text-yellow-500 font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </Link>
                <Link href="/gallery" className="block py-2 text-blue-700 hover:text-yellow-500 font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Gallery
                </Link>
                <Link href="/services" className="block py-2 text-blue-700 hover:text-yellow-500 font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </Link>
                <Link href="/contact" className="block py-2 text-blue-700 hover:text-yellow-500 font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

    {/* Hero Section */}
<section className="relative h-screen w-full pt-16 sm:pt-20">
  <div className="absolute inset-0">
    {/* Parent container for the image */}
    <div className="relative w-full h-full">
      <Image 
        src="/images/home.jpg" 
        alt="Construction site" 
        fill
        className="object-cover"
        quality={100}
        priority
      />
    </div>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  {/* Content */}
  <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8 w-full">
    <div className="text-white w-full max-w-lg mx-auto sm:mx-0 sm:max-w-xl">
      <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center sm:text-left">
        Building Tomorrow&apos;s World Today
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-8 text-center sm:text-left">
        Excellence in Construction Since 1990
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
        <Link
          href="/contact"
          className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition duration-300 text-center h-[46px] flex items-center justify-center w-auto max-w-[200px] mx-auto sm:w-auto sm:max-w-none sm:mx-0"
        >
          Get Started
        </Link>
        <div className="w-auto max-w-[300px] mx-auto sm:w-auto sm:max-w-none sm:mx-0">
          <DownloadBrochureButton />
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Happy Customers - Modified for better responsiveness */}
      <div className="absolute right-9 transform -translate-y-1/2 bg-yellow-500 text-white px-8 py-6 md:px-8 md:py-6 sm:px-6 sm:py-4 rounded-lg shadow-lg text-center w-[300px] md:w-[300px] sm:w-[220px] max-w-full">
        <h3 className="text-2xl md:text-2xl sm:text-xl font-bold">Happy Customers</h3>
        <h3 className="text-lg md:text-lg sm:text-base">300+</h3>
      </div>

       {/* Services Section */}
       <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg border-2 border-yellow-400 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500 group-hover:w-3 transition-all duration-300"></div>
                <div className="pl-2">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-foreground/70">Highly skilled professionals with years of industry experience</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-foreground/70">Commitment to excellence in every project we undertake</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-foreground/70">Meeting deadlines without compromising on quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-8">Ready to Start Your Project?</h2>
          <p className="text-black/80 text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s turn your vision into reality. Contact us today for a free consultation.
          </p>
          <div className="space-x-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919895466438?text=Hello!%20I&apos;m%20interested%20in%20your%20construction%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-600 transition duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
            <DownloadBrochureButton />
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}