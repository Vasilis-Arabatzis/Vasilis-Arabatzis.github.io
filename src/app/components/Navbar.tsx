"use client";

import githubIcon from "@/assets/github.ico";
import linkedinIcon from "@/assets/linkedin.ico";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  function handleDownload(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-background/70 border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
       
       {/* Logo */}
        <div className="font-bold text-lg">
          MyPortfolio
        </div>

       {/* Links */}
       {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-sm font-medium transition px-3 py-1 rounded-full
                ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              {link.name}
            </Link>
          );
        })}

        {/* Icons */}
        <div className="flex items-center gap-2">

          {/* GitHub */}
          <a
            href="https://github.com/Vasilis-Arabatzis"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition"
          >
            <Image src={githubIcon} alt="GitHub" width={20} height={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vasileios-arampatzis-a76254279"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition"
          >
            <Image src={linkedinIcon} alt="LinkedIn" width={20} height={20} />
          </a>

          {/* Email */}
          <a
            href="mailto:arabatzis.vasileios@gmail.com?subject=Portfolio%20Contact"
            className="inline-flex"
          >
            <Mail className="w-8 h-8 hover:scale-110 transition duration-300 cursor-pointer" />
          </a>
          
          {/* LR Button */}
          <Button asChild>
            <a href="/lr.pdf" target="_blank" rel="noopener noreferrer">
              LR
            </a>
          </Button>

          {/* CV Button */}
          <Button asChild>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </Button>

        </div>
      </div>
    </nav>
  );
}
