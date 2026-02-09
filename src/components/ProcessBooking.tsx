
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const ProcessBooking = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Manifesto / Bio Snippet */}
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl">The Ritual</h2>
            <div className="prose prose-neutral text-muted-foreground">
              <p>
                Every session is a collaborative ceremony. From the initial concept sketch 
                to the final placement, we ensure the design breathes with your body's natural 
                movement.
              </p>
              <p>
                The studio is a private, by-appointment space designed for comfort and calm.
                We use single-use, sterile equipment and premium vegan inks.
              </p>
            </div>
            
            <div className="pt-8">
              <h3 className="font-serif text-2xl mb-6">Common Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-foreground/10">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline hover:text-accent">
                    How do I prepare for my appointment?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Get a good night's sleep, eat a solid meal beforehand, and stay hydrated. 
                    Avoid alcohol 24 hours prior. Wear comfortable clothing that allows easy access to the area.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-foreground/10">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline hover:text-accent">
                    What is the healing process?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Fine line tattoos typically heal within 2-3 weeks. We provide a specialized 
                    aftercare balm ("Lume Shield") and detailed instructions to ensure crisp retention.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-foreground/10">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline hover:text-accent">
                    Do you do custom designs?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes. While flash is available, 90% of my work is bespoke. We will discuss 
                    your narrative during the consultation phase.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="bg-background p-8 md:p-12 border border-border/50 shadow-sm relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
            <h3 className="font-serif text-3xl mb-2">Request Appointment</h3>
            <p className="text-sm text-muted-foreground mb-8">
              Books are currently OPEN for Fall 2024. Please allow 3-5 days for a response.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 transition-colors" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 transition-colors" placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Placement & Concept</label>
                <textarea className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 h-24 resize-none transition-colors" placeholder="Describe your idea, size (in inches), and placement..."></textarea>
              </div>

              <div className="pt-4">
                <Button className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 uppercase tracking-widest text-xs">
                  Submit Request
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessBooking;
