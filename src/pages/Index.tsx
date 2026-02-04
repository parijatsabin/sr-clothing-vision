import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import WhySection from "@/components/sections/WhySection";
import Collections from "@/components/sections/Collections";
import Testimonials from "@/components/sections/Testimonials";
import VisitUs from "@/components/sections/VisitUs";
import BrandStatement from "@/components/sections/BrandStatement";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhySection />
        <section id="collections">
          <Collections />
        </section>
        <section id="about">
          <Testimonials />
        </section>
        <section id="visit">
          <VisitUs />
        </section>
        <BrandStatement />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
