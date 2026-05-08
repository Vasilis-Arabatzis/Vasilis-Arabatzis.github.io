import Image from "next/image";
import {Mail} from "lucide-react";
import githubIcon from "../assets/github.ico";
import linkedinIcon from "../assets/linkedin.ico";


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hello, I'm Vasilis Arabatzis</h1>
        <p className="text-lg mb-6">A passionate software developer.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/Vasilis-Arabatzis" target="_blank" rel="noopener noreferrer">
            <Image src={githubIcon} alt="GitHub" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/vasileios-arampatzis-a76254279" target="_blank" rel="noopener noreferrer">
            <Image src={linkedinIcon} alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="mailto:arabatzis.vasileios@gmail.com?subject=Portfolio Contact" target="_blank" rel="noopener noreferrer">
            <Mail />
          </a>
        </div>
      </div>
    </section>
  );
}

