import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      } else if (location !== "/") {
        // If not on home page, navigate to home first (handled by wouter Link default behavior if we don't preventDefault)
        // But since we prevented default, we need to handle it.
        // For simplicity in this one-page site, we'll assume we are mostly on home.
        // If we were on another page, we'd need to navigate then scroll.
        window.location.href = href;
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col font-body">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="relative h-40 w-64 overflow-visible">
                <img
                  src="/images/logo.jpg"
                  alt="Diro Agro Logo"
                  className="h-full w-full object-contain scale-125 origin-left"
                />
              </div>
              <span className={cn(
                "font-display text-xl font-bold tracking-tight transition-colors",
                isScrolled ? "text-primary" : "text-primary" // Always primary for visibility or adjust based on hero bg
              )}>
                DIRO AGRO
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                aria-label={`Go to ${link.name} section`}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/20">
              Get Fresh Eggs
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                aria-label={`Go to ${link.name} section`}
                className="text-base font-medium text-foreground/80 hover:text-primary py-2 border-b border-border/50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full mt-2">
              Get Fresh Eggs
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-full bg-white p-0.5 overflow-hidden">
                  <img src="/images/logo.jpg" alt="Diro Agro" className="h-full w-full object-cover rounded-full" />
                </div>
                <span className="font-display text-xl font-bold">DIRO AGRO</span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                Building a sustainable future in poultry & agriculture. Fresh eggs and poultry products from Bathlol to every district in Sierra Leone.
              </p>
              <div className="flex gap-4">
                <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-secondary hover:text-secondary-foreground transition-all">
                  <Facebook size={16} />
                </a>
                <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-secondary hover:text-secondary-foreground transition-all">
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li><a href="/#about" className="hover:text-secondary transition-colors">About Us</a></li>
                <li><a href="/#products" className="hover:text-secondary transition-colors">Our Products</a></li>
                <li><a href="/#services" className="hover:text-secondary transition-colors">Our Services</a></li>
                <li><a href="/#careers" className="hover:text-secondary transition-colors">Careers</a></li>
                <li><a href="/#contact" className="hover:text-secondary transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-secondary" />
                  <span>Bathlol Village, Feredugu Section,<br />Port Loko District, Sierra Leone</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-secondary" />
                  <span>+232-80242745 / +232-73446610</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-secondary" />
                  <span>info@diroagro.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-6">Newsletter</h4>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Subscribe to get updates on fresh produce and farm news.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Button size="icon" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shrink-0">
                  <Mail size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Diro Company (SL) Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
