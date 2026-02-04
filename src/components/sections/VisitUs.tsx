import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Car, Package, Store } from "lucide-react";

const services = [
  { icon: Store, label: "In-store shopping" },
  { icon: Car, label: "Kerbside pickup" },
  { icon: Package, label: "Delivery available" },
];

const VisitUs = () => {
  return (
    <section className="section-light py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm tracking-ultra uppercase font-body block mb-4">
              Location
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
              Find Us
            </h2>

            {/* Address & Hours */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin size={22} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-foreground text-lg">
                    Chandol 04, Kathmandu
                  </p>
                  <p className="font-body text-muted-foreground">
                    Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={22} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-foreground text-lg">
                    Open Daily
                  </p>
                  <p className="font-body text-muted-foreground">
                    10 AM – 8:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mb-10">
              <p className="font-body text-sm tracking-luxury uppercase text-muted-foreground mb-4">
                Services
              </p>
              <div className="flex flex-wrap gap-4">
                {services.map((service) => (
                  <div
                    key={service.label}
                    className="flex items-center gap-2 text-foreground"
                  >
                    <service.icon size={16} className="text-gold" />
                    <span className="font-body text-sm">{service.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.app.goo.gl/XVX49xqUQ2A4ocUj9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-primary inline-flex items-center justify-center gap-2"
              >
                <MapPin size={16} />
                Get Directions
              </a>
              <a
                href="https://wa.me/9779863335542"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-outline inline-flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-[4/3] bg-muted overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7547!2d85.3271!3d27.7350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19003c76f3e7%3A0x1c8f0c6f8f8f8f8f!2sSR%20Clothing!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SR Clothing Location"
              />
            </div>
            {/* Overlay accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
