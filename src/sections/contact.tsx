"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function Contact() {
  return (
 <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto"
      >
        {/* LEFT - IMAGE */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 flex-shrink-0">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            fill
            className="rounded-full object-cover border-4 border-primary shadow-2xl hover:scale-105 transition duration-300"
            priority
          />
        </div>

        
      </motion.div>
    </section>
  );
}
