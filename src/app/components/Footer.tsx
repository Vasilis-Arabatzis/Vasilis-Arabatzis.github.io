import Image from "next/image";
import {Mail } from "lucide-react";
import githubIcon from "@/assets/github.ico";
import linkedinIcon from "@/assets/linkedin.ico";


export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex gap-4">
           <a href="https://github.com/Vasilis-Arabatzis" target="_blank">
            <Image src={githubIcon} alt="GitHub" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/vasileios-arampatzis-a76254279" target="_blank">
            <Image src={linkedinIcon} alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="mailto:arabatzis.vasileios@gmail.com?subject=Portfolio Contact" target="_blank" rel="noopener noreferrer">
            <Mail className="w-5 h-5 hover:scale-110 transition" />
          </a>
        </div>

      </div>
    </footer>
  );
}