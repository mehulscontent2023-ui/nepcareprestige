import ScrollReveal from "@/components/ScrollReveal";
import { GradientButton } from "@/components/ui/gradient-button";
import { Handshake, Search, Megaphone } from "lucide-react";

const pillars = [
  {
    icon: Handshake,
    title: "Structured Sales Representation",
    description:
      "Dedicated on-ground teams acting as your brand ambassadors, managing key accounts, trade relationships, and revenue targets across India.",
  },
  {
    icon: Search,
    title: "Market Research & Intelligence",
    description:
      "Deep analytics on consumer trends, competitive landscapes, and demand forecasting to inform strategic decisions and drive performance.",
  },
  {
    icon: Megaphone,
    title: "Trade Marketing & PR",
    description:
      "Integrated campaigns, trade events, media relations, and digital marketing tailored for India's travel ecosystem and media landscape.",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] uppercase text-accent text-center mb-4">
            Our Solution
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-center mb-6">
            Three Pillars of Market Success
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            A comprehensive, results-driven approach to establishing and growing your brand presence in India.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {pillars.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 200}>
              <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/30 transition-all duration-300 group h-full flex flex-col items-center text-center">
                <div className="gradient-ring w-16 h-16 flex items-center justify-center mb-6 group-hover:[box-shadow:var(--shadow-glow)] transition-shadow duration-300">
                  <div className="bg-card rounded-full w-full h-full flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading text-xl mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <GradientButton>Learn More</GradientButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolutionSection;
