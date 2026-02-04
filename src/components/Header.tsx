import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="relative z-50">
            <h1
              className={`font-heading text-2xl md:text-3xl transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen ? "text-foreground" : "text-dark-foreground"
              }`}
            >
              SR Clothing
            </h1>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#collections"
              className={`font-body text-sm tracking-luxury uppercase transition-colors duration-300 animated-underline ${
                isScrolled ? "text-foreground" : "text-dark-foreground"
              }`}
            >
              Collections
            </a>
            <a
              href="#about"
              className={`font-body text-sm tracking-luxury uppercase transition-colors duration-300 animated-underline ${
                isScrolled ? "text-foreground" : "text-dark-foreground"
              }`}
            >
              About
            </a>
            <a
              href="#visit"
              className={`font-body text-sm tracking-luxury uppercase transition-colors duration-300 animated-underline ${
                isScrolled ? "text-foreground" : "text-dark-foreground"
              }`}
            >
              Visit Us
            </a>
            <a
              href="https://wa.me/9779863335542"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 font-body text-sm tracking-luxury uppercase transition-colors duration-300 ${
                isScrolled
                  ? "text-gold hover:text-gold-dark"
                  : "text-gold hover:text-gold-light"
              }`}
            >
              <Phone size={14} />
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                size={24}
                className="text-foreground"
              />
            ) : (
              <Menu
                size={24}
                className={isScrolled ? "text-foreground" : "text-dark-foreground"}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background z-40 md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              <a
                href="#collections"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-3xl text-foreground"
              >
                Collections
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-3xl text-foreground"
              >
                About
              </a>
              <a
                href="#visit"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-3xl text-foreground"
              >
                Visit Us
              </a>
              <a
                href="https://wa.me/9779863335542"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 btn-luxury-gold inline-flex items-center gap-2"
              >
                <Phone size={16} />
                WhatsApp Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
