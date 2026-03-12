import ScrollReveal from "@/components/ScrollReveal";
import { GradientButton } from "@/components/ui/gradient-button";
import { Network, Scale, ShieldAlert, BarChart3 } from "lucide-react";

const challenges = [
  {
    icon: Network,
    title: "Understanding Distribution",
    description: "Navigating India's fragmented and multi-layered travel agent network across diverse geographies.",
  },
  {
    icon: Scale,
    title: "Complex Regulations",
    description: "Managing compliance with evolving local policies, taxation frameworks, and licensing requirements.",
  },
  {
    icon: ShieldAlert,
    title: "Brand Positioning",
    description: "Establishing a differentiated brand identity in one of the world's most competitive hospitality markets.",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Accessing real-time, actionable data on consumer behaviour, pricing dynamics, and demand patterns.",
  },
];

const ChallengeSection = () => {
  return (
    <section className="section-padding bg-card relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] uppercase text-accent text-center mb-4">
            The Challenge
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-center mb-6">
            Why International Hotels Struggle in India
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            Entering the Indian market presents unique complexities that require local expertise and deep industry connections.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {challenges.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 150}>
              <div className="flex flex-col items-center text-center group">
                <div className="gradient-ring w-20 h-20 flex items-center justify-center mb-6 transition-shadow duration-300 group-hover:[box-shadow:var(--shadow-glow)]">
                  <div className="bg-background rounded-full w-full h-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <GradientButton variant="outline">View Our Solution</GradientButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ChallengeSection;
