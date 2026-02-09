
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background text-foreground flex flex-col md:flex-row">
      {/* Text Content - Left/Top */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-24 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Est. 2024 — San Francisco
          </span>
          <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] tracking-tight">
            Lume <span className="text-accent italic">&</span> Line
          </h1>
          <p className="max-w-md text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
            A sanctuary for fine-line artistry. Where permanent ink meets ephemeral grace. 
            Designing deliberate, delicate pieces for the modern collector.
          </p>
          <div className="pt-8">
             <button className="group relative px-6 py-3 text-sm tracking-widest uppercase border border-foreground/20 hover:border-foreground transition-colors duration-500">
               <span className="relative z-10">View Portfolio</span>
               <div className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-0 group-hover:bg-foreground/5"></div>
             </button>
          </div>
        </motion.div>
      </div>

      {/* Image Content - Right/Bottom */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-secondary/20">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img 
            src="/images/hero-tattoo.jpg" 
            alt="Fine line floral tattoo detail" 
            className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-l opacity-50"></div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 md:left-24 transform -translate-x-1/2 md:translate-x-0 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase opacity-50">Scroll</span>
        <ArrowDown className="w-4 h-4 opacity-50 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
