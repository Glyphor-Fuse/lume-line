
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star } from 'lucide-react';

const works = [
  { id: 1, title: "Botanical III", category: "Flora", src: "/images/gallery-1.jpg" },
  { id: 2, title: "Celestial Map", category: "Geometric", src: "/images/gallery-2.jpg" },
  { id: 3, title: "Scripture", category: "Typography", src: "/images/gallery-3.jpg" },
  { id: 4, title: "Micro Portrait", category: "Realism", src: "/images/gallery-4.jpg" },
];

const LensItem = ({ work }: { work: typeof works[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="group relative aspect-[3/4] overflow-hidden cursor-none bg-secondary/10"
    >
      <img 
        src={work.src} 
        alt={work.title} 
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-[50%]"
      />
      
      {/* Overlay Info */}
      <div className="absolute bottom-0 left-0 w-full p-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <p className="text-xs uppercase tracking-widest text-white/70">{work.category}</p>
        <h3 className="font-serif text-2xl text-white">{work.title}</h3>
      </div>

      {/* The Lens */}
      {hovering && (
        <motion.div
          style={{
            left: mouseX,
            top: mouseY,
            x: "-50%",
            y: "-50%",
          }}
          className="absolute z-20 w-32 h-32 rounded-full border border-white/30 backdrop-blur-sm pointer-events-none overflow-hidden shadow-2xl"
        >
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${work.src})`,
              // This approximates the zoom relative to cursor position
              backgroundPosition: "center", 
              transform: "scale(2)", 
            }}
          />
        </motion.div>
      )}

      {/* Custom Cursor Follower hint */}
      {hovering && (
        <motion.div
          style={{
            left: mouseX,
            top: mouseY,
            x: 20,
            y: 20,
          }}
          className="absolute z-30 pointer-events-none bg-white/90 text-black px-2 py-1 text-[10px] uppercase tracking-widest"
        >
          Inspect
        </motion.div>
      )}
    </motion.div>
  );
};

export const PrecisionGallery = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end border-b border-border/40 pb-6">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl mb-2">Selected Works</h2>
          <p className="text-muted-foreground text-sm max-w-sm">
            A curation of recent skin narratives. Hover to inspect the needlework.
          </p>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-accent transition-colors mt-4 md:mt-0">
          Full Archive <Star className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {works.map((work) => (
          <LensItem key={work.id} work={work} />
        ))}
      </div>
      
      <div className="mt-12 flex justify-center md:hidden">
        <a href="#" className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-accent transition-colors">
          View Archive <Star className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
