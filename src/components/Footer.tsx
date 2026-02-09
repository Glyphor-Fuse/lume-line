
import { Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12 border-t border-white/5">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="font-serif text-5xl md:text-7xl leading-none">Lume & Line</h2>
            <p className="text-white/40 max-w-xs text-sm">
              Fine line tattooing studio based in San Francisco. 
              Creating permanent artifacts for the mindful collector.
            </p>
          </div>
          
          <div className="flex gap-8">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-white/40">Studio</h4>
              <p className="text-sm font-light">
                1240 Mission St.<br/>
                San Francisco, CA<br/>
                By Appointment Only
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-white/40">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-accent transition-colors"><Mail className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest text-white/20">
          <p>© 2024 Lume & Line. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
