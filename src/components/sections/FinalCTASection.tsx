import ScrollReveal from "@/components/ScrollReveal";
import { GradientButton } from "@/components/ui/gradient-button";

const FinalCTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 [background-image:var(--gradient-brand)] opacity-10" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-6">
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading mb-8 leading-tight">
            Ready to Build Your India Market Presence?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Schedule a strategy call with our team and discover how NepCare can accelerate your growth in one of the world's fastest-growing travel markets.
          </p>
          <GradientButton size="lg">Schedule Strategy Call</GradientButton>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
