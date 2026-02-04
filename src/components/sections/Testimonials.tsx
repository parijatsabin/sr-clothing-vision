import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Love shopping here! Always find the perfect outfit for any occasion.",
    author: "Saw Ben Ghimire",
    rating: 5,
  },
  {
    quote: "Premium quality and great service.",
    author: "Suyog Adhikari",
    rating: 5,
  },
];

const Testimonials = () => {
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
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
            Customer Love
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="testimonial-quote text-foreground mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Gold Line */}
              <div className="gold-line mx-auto mb-6" />

              {/* Author */}
              <p className="font-body text-muted-foreground tracking-luxury uppercase text-sm">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
