
import { Hero } from "@/components/Hero";
import { PrecisionGallery } from "@/components/PrecisionGallery";
import { ProcessBooking } from "@/components/ProcessBooking";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background relative selection:bg-accent/20">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
        style={{ scaleX }}
      />
      
      <main className="flex flex-col">
        <Hero />
        <PrecisionGallery />
        <ProcessBooking />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
