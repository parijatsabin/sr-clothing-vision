import { motion } from "framer-motion";
import { MapPin, Phone, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-light border-t border-border py-16 md:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-2">
            SR Clothing
          </h3>
          <p className="text-gold text-xs tracking-ultra uppercase mb-8">
            Luxury · Fit · Confidence
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-8 text-muted-foreground">
            <a
              href="https://maps.app.goo.gl/XVX49xqUQ2A4ocUj9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors duration-300 animated-underline"
            >
              <MapPin size={16} className="text-gold" />
              <span className="font-body text-sm">Chandol, Kathmandu</span>
            </a>

            <a
              href="https://wa.me/9779863335542"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors duration-300 animated-underline"
            >
              <Phone size={16} className="text-gold" />
              <span className="font-body text-sm">WhatsApp</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors duration-300 animated-underline"
            >
              <Instagram size={16} className="text-gold" />
              <span className="font-body text-sm">Follow Us</span>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-[1px] bg-border mb-8" />

          {/* Copyright */}
          <p className="font-body text-xs text-muted-foreground tracking-wide">
            © {currentYear} SR Clothing. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
