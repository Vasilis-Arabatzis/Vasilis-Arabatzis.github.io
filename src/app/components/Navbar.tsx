"use client";

import Image from "next/image";
import {Mail } from "lucide-react";
import githubIcon from "@/assets/github.ico";
import linkedinIcon from "@/assets/linkedin.ico";
import { Button } from "@/components/ui/button"; 


export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-md bg-background/70 border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <div className="font-bold text-lg">
          MyPortfolio
        </div>

        {/* Links */}
        <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#skills" className="hover:text-foreground">Skills</a>
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <a href="https://github.com/Vasilis-Arabatzis" target="_blank">
             <Image src={githubIcon} alt="GitHub" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/vasileios-arampatzis-a76254279" target="_blank">
            <Image src={linkedinIcon} alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="mailto:arabatzis.vasileios@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-5 h-5" />
          </a>

          <Button className="ml-2">CV</Button>
        </div>

      </div>
    </header>  
  );
}