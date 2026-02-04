import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import collectionFormal from "@/assets/collection-formal.jpg";
import collectionCasual from "@/assets/collection-casual.jpg";
import collectionFestive from "@/assets/collection-festive.jpg";
import collectionSeasonal from "@/assets/collection-seasonal.jpg";

const collections = [
  {
    title: "Formal Wear",
    subtitle: "Command the Room",
    image: collectionFormal,
  },
  {
    title: "Casual Essentials",
    subtitle: "Effortless Style",
    image: collectionCasual,
  },
  {
    title: "Festive & Occasion",
    subtitle: "Make an Entrance",
    image: collectionFestive,
  },
  {
    title: "Seasonal Picks",
    subtitle: "Current Favorites",
    image: collectionSeasonal,
  },
];

const Collections = () => {
  return (
    <section className="section-dark py-24 md:py-32">
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
            Explore
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-foreground mb-6">
            Our Collections
          </h2>
          <p className="font-body text-dark-foreground/70 text-lg max-w-xl mx-auto">
            Curated pieces that elevate your everyday look.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="collection-card aspect-[3/4] group"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="collection-card-overlay">
                <div>
                  <p className="text-gold text-xs tracking-luxury uppercase mb-2">
                    {collection.subtitle}
                  </p>
                  <h3 className="font-heading text-xl md:text-2xl text-dark-foreground">
                    {collection.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="https://maps.google.com/?q=Chandol+04+Kathmandu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-dark-foreground text-sm tracking-luxury uppercase font-body hover:text-gold transition-colors duration-300 group"
          >
            Explore In Store
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;
