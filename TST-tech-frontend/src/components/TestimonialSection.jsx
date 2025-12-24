import React, { useState, useEffect } from "react";
import { Star, Quote, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "TST Technologies deployed biometric attendance across 15 manufacturing units seamlessly. Their hardware-agnostic approach saved us both time and capital expenditure.",
      author: "Rajesh Kumar",
      company: "HR Director, Spark Minda",
    },
    {
      text: "The facial recognition solution with anti-spoofing has significantly strengthened our campus security. The implementation was smooth and extremely professional.",
      author: "Dr. Priya Sharma",
      company: "Principal, DPS Ghaziabad",
    },
    {
      text: "RFID-based access control was integrated flawlessly with our existing infrastructure. Reporting and audit trails are extremely detailed.",
      author: "Amit Verma",
      company: "Facilities Manager, Samsung India",
    },
    {
      text: "Their biometric access control helped us manage 3,000+ employees across multiple shifts with near-zero downtime.",
      author: "Sandeep Malhotra",
      company: "Operations Head, JBM Group",
    },
    {
      text: "TST's team understands enterprise requirements deeply. Support responsiveness and solution stability are top-notch.",
      author: "Neha Arora",
      company: "Admin Lead, Fortis Healthcare",
    },
    {
      text: "From consultation to deployment, the experience was smooth. Their solutions scale well for large industrial environments.",
      author: "Vikas Chauhan",
      company: "IT Manager, Rico Auto",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // auto slide (moves by 2)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 2 >= testimonials.length ? 0 : prev + 2
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 2 >= testimonials.length ? 0 : prev + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 2 < 0 ? testimonials.length - 2 : prev - 2
    );
  };

  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "700ms" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-700/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1400ms" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with Glassmorphism */}
        <div className="relative text-center mb-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 overflow-hidden">
          {/* Subtle animated orbs in header */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1000ms" }} />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 rounded-full mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-semibold">
                Client Success Stories
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Trusted by Industry Leaders
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Organizations across manufacturing, education, healthcare, and
              enterprise rely on our security solutions.
            </p>
          </div>
        </div>

        {/* Slider Container with Glassmorphism */}
        <div className="relative">
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 overflow-hidden">
            {/* Animated Background inside cards container */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-slate-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "700ms" }} />
              <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1400ms" }} />
              
              {/* Floating particles */}
              <div className="absolute top-20 left-20 w-3 h-3 bg-emerald-400/40 rounded-full animate-bounce" style={{ animationDuration: "3s" }} />
              <div className="absolute top-40 right-40 w-2 h-2 bg-emerald-300/40 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "500ms" }} />
              <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-emerald-400/40 rounded-full animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }} />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center hover:bg-white/20 transition-colors z-10 text-white"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center hover:bg-white/20 transition-colors z-10 text-white"
            >
              <ChevronRight />
            </button>

            {/* Slides */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${(currentIndex / 2) * 100}%)`,
                }}
              >
                {testimonials.map((test, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-1/2 flex-shrink-0 px-4"
                  >
                    <div className="relative h-full group">
                      {/* Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity" />

                      {/* Card with Glassmorphism */}
                      <div className="relative h-full bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl hover:border-emerald-500/30 transition-colors">
                        {/* Quote Icon */}
                        <div className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <Quote className="text-white" size={24} />
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className="text-emerald-400"
                              fill="currentColor"
                            />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-gray-300 mb-8 leading-relaxed italic">
                          "{test.text}"
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold shadow-lg">
                            {test.author.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-white">
                              {test.author}
                            </div>
                            <div className="text-sm text-gray-400">
                              {test.company}
                            </div>
                          </div>
                        </div>

                        {/* Bottom Accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 rounded-b-2xl" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}