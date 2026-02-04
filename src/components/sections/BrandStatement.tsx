import { motion } from "framer-motion";

const BrandStatement = () => {
  return (
    <section className="section-dark py-24 md:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Gold accent line */}
          <div className="gold-line mx-auto mb-12" />

          {/* Statement */}
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-dark-foreground leading-relaxed mb-6">
            SR Clothing is not about trends.
          </p>
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-dark-foreground leading-relaxed">
            It's about{" "}
            <span className="text-gold italic">confidence</span>,{" "}
            <span className="text-gold italic">fit</span>, and{" "}
            <span className="text-gold italic">presence</span>.
          </p>
          <p className="font-heading text-xl md:text-2xl lg:text-3xl text-dark-foreground/70 mt-8 italic">
            When you dress right, everything changes.
          </p>

          {/* Gold accent line */}
          <div className="gold-line mx-auto mt-12" />
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStatement;
