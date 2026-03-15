import ScrollReveal from "@/components/ScrollReveal";
import { GradientButton } from "@/components/ui/gradient-button";
import { TrendingUp, Briefcase, Calendar, Target } from "lucide-react";

const metrics = [
  { icon: Briefcase, value: "XYZ+", label: "Client Projects" },
  { icon: TrendingUp, value: "XY%", label: "Annual Growth" },
  { icon: Calendar, value: "XYZ+", label: "Years of Experience" },
  { icon: Target, value: "XY%", label: "Client Retention" },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-card relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] uppercase text-accent text-center mb-4">
            Trust & Credibility
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-center mb-16">
            Results That Speak
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 150}>
              <div className="bg-background rounded-lg border border-border p-8 text-center hover:border-primary/30 transition-all duration-300 group">
                <item.icon className="w-8 h-8 text-accent mx-auto mb-4 group-hover:text-primary transition-colors duration-300" />
                <span className="block text-4xl md:text-5xl font-heading gradient-text mb-2">
                  {item.value}
                </span>
                <span className="text-sm text-muted-foreground tracking-widest uppercase">
                  {item.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <GradientButton variant="outline">View Metrics</GradientButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustSection;
