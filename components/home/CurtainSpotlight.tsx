"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CurtainSpotlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const collections = [
    {
      title: "Premium Drapes",
      description: "Custom floor-to-ceiling drapes tailored to your window size and style preferences.",
      image: "/images/curtain-1.jpg", // Replace with your image
      link: "/products/curtains",
    },
    {
      title: "Roman Blinds",
      description: "Modern and space-saving window solutions available in a wide variety of fabrics.",
      image: "/images/curtain-2.jpg", // Replace with your image
      link: "/products/blinds",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Simple Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Curtain & Window Works
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            Custom-made window treatments designed to enhance your home's interior.
          </p>
        </div>

        {/* Clean 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-[#fcfcfc] border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-[#C0001A] font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all"
                >
                  Explore Collection
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action bar */}
        <div className="mt-12 p-8 bg-gray-50 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
          <div>
            <h4 className="font-bold text-lg text-gray-900">Need a custom measurement?</h4>
            <p className="text-gray-500">Our experts can visit your site for precise curtain fittings.</p>
          </div>
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-3 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-[#C0001A] transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CurtainSpotlight;