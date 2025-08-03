import { useEffect } from "react";
import Navbar from "@/components/navigation/navbar";
import Products from "@/components/sections/products";
import Applications from "@/components/sections/applications";
import Partnership from "@/components/sections/partnership";
import Footer from "@/components/navigation/footer";

export default function ProductosPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
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
        <Products />
        <Applications />
        <Partnership />
      </main>
      <Footer />
    </div>
  );
}