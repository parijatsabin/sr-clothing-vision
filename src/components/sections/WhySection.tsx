import { motion } from "framer-motion";
import { Sparkles, Calendar, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Perfect Fit",
    description: "Tailored-ready outfits that look custom-made.",
  },
  {
    icon: Calendar,
    title: "Every Occasion",
    description: "Office, casual, festive — you'll always find \"the one.\"",
  },
  {
    icon: Shield,
    title: "Trusted Quality",
    description: "Hand-picked fabrics, premium finishing, honest pricing.",
  },
];

const WhySection = () => {
  return (
    <section className="section-light py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-gold text-sm tracking-ultra uppercase font-body block mb-4">
            The SR Difference
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
            Why Customers Love<br />
            <span className="italic">SR Clothing</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="luxury-card text-center group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-8 border border-border group-hover:border-gold transition-colors duration-300">
                <feature.icon
                  size={28}
                  className="text-gold"
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
