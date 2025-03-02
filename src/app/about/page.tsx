"use client";
import Image from 'next/image';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import { useState } from 'react';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <header className="fixed w-full bg-white bg-opacity-100 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
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
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-700 hover:text-yellow-500 font-xl transition duration-300">
                Home
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
      
      {/* Hero Section */}
      <section className="relative h-[70vh] mb-45">
        <div className="absolute inset-0">
          <Image 
            src="/images/ed4.jpg" 
            alt="Construction team" 
            fill 
            className="object-cover"
            priority 
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
              Building Excellence Since 1990
            </h1>
            <p className="text-xl text-white animate-fade-in-delay">
              Three decades of transforming visions into reality
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
<section className="max-w-7xl mx-auto px-4 py-16">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Founded in 1990, Chirammel Construction has grown from a small family business into one of the region&apos;s most trusted construction companies. Our journey has been built on the foundations of integrity, quality, and innovation.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        What sets us apart is our unwavering commitment to excellence and our ability to adapt to changing industry demands while maintaining our core values of quality craftsmanship and customer satisfaction.
      </p>
    </div>
    {/* Responsive Image Container */}
    <div className="relative h-[200px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
      <Image 
        src="/images/modern_home_design (2).jpg" 
        alt="Company history" 
        fill 
        className="object-cover"
      />
    </div>
  </div>
</section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every project, no matter the size or scope.",
                icon: (
                  <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              {
                title: "Integrity",
                description: "We believe in honest communication and transparent business practices.",
                icon: (
                  <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and methods to deliver superior results.",
                icon: (
                  <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-500 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Start Your Project?</h2>
          <p className="text-black/80 text-xl mb-8">
            Let&apos;s work together to bring your construction vision to life.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}