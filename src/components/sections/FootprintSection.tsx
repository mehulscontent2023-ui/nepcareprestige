import mapBg from "@/assets/map-bg.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { GradientButton } from "@/components/ui/gradient-button";

const highlights = [
  { value: "200+", label: "People" },
  { value: "9", label: "Offices" },
  { value: "5", label: "Countries" },
];

const FootprintSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${mapBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Our Footprint
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-16">
            A Presence That Spans the Globe
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 200}>
              <div className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-heading gradient-text mb-2">
                  {item.value}
                </span>
                <span className="text-sm text-muted-foreground tracking-[0.25em] uppercase">
                  {item.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <GradientButton variant="outline">See Locations</GradientButton>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FootprintSection;
