import "./globals.css";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-background text-foreground">

        <Navbar />

        <main className="pt-20">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}