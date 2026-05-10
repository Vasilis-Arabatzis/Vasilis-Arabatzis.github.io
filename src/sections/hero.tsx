"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {Mail} from "lucide-react";
import githubIcon from "../assets/github.ico";
import linkedinIcon from "../assets/linkedin.ico";
import Link from "next/link";


export default function Hero() {
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

        {/* RIGHT - CONTENT */}
        <div className="text-center md:text-left">
          {/* SMALL TEXT */}
          <p className="text-primary text-lg mb-2">
            Hello, I&apos;
          </p>

          {/* NAME */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Vasileios Arabatzis
          </h1>

          {/* ROLE */}
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Junior Software Developer
          </h2>

          {/* DESCRIPTION */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
            Computer Engineering student with strong interest in backend development and modern software technologies.
            Experience with Java, PHP, React and Next.js. Familiar with Git workflows and teamwork environments.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Contact Me
            </Link>

            <a
              href="/cv.pdf"
              target="_blank"
              className="px-6 py-3 rounded-lg border hover:bg-muted transition"
            >
              Download CV
            </a>

            <a
              href="/lr.pdf"
              target="_blank"
              className="px-6 py-3 rounded-lg border hover:bg-muted transition"
            >
              Download LR
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-6 justify-center md:justify-start items-center">
            <a
              href="https://github.com/Vasilis-Arabatzis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={githubIcon}
                alt="GitHub"
                width={30}
                height={30}
                className="hover:scale-110 transition duration-300"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/vasileios-arampatzis-a76254279"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedinIcon}
                alt="LinkedIn"
                width={30}
                height={30}
                className="hover:scale-110 transition duration-300"
              />
            </a>

            <a href="mailto:arabatzis.vasileios@gmail.com?subject=Portfolio Contact">
              <Mail className="w-8 h-8 hover:scale-110 transition duration-300" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
