import heroBg from "@/assets/hero-bg.jpg";
import { GradientButton } from "@/components/ui/gradient-button";
import { Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "XYZ+", label: "Travel Agents" },
  { icon: Globe, value: "XYZ", label: "Countries" },
  { icon: Award, value: "XYZ+", label: "Years Experience" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative z-10 max-w-5xl mx-auto text-center section-padding">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6 animate-fade-up">
          NepCare Hospitality Management
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading leading-tight mb-8 animate-fade-up-delay-1 max-w-3xl mx-auto">
          Connecting Global Hospitality to India's Strongest Travel Agent Ecosystem
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up-delay-2">
          Your strategic partner for market representation, distribution, and growth in India's dynamic travel landscape.
        </p>

        <div className="animate-fade-up-delay-2">
          <GradientButton size="lg">Partner With Us</GradientButton>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 animate-fade-up-delay-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <stat.icon className="w-6 h-6 text-primary mb-2" />
              <span className="text-3xl md:text-4xl font-heading gradient-text">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground tracking-widest uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
