import { useEffect } from "react";
import Navbar from "@/components/navigation/navbar";
import Hero from "@/components/sections/hero";
import Solutions from "@/components/sections/solutions";
import Products from "@/components/sections/products";
import Advantages from "@/components/sections/advantages";
import FireSafety from "@/components/sections/fire-safety";
import Sustainability from "@/components/sections/sustainability";
import Applications from "@/components/sections/applications";
import CaseStudies from "@/components/sections/case-studies";
import Partnership from "@/components/sections/partnership";
import About from "@/components/sections/about";
import Footer from "@/components/navigation/footer";

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Section reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.section-reveal');
    sections.forEach((section) => observer.observe(section));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Solutions />
        <Products />
        <Advantages />
        <FireSafety />
        <Sustainability />
        <Applications />
        <CaseStudies />
        <Partnership />
        <About />
      </main>
      <Footer />
    </div>
  );
}
