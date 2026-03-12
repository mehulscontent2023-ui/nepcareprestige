import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "default" | "lg";
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-body font-semibold tracking-wider uppercase transition-all duration-300 rounded-md",
          size === "default" && "px-8 py-3 text-sm",
          size === "lg" && "px-10 py-4 text-base",
          variant === "primary" &&
            "text-primary-foreground [background-image:var(--gradient-brand)] hover:[background-image:var(--gradient-brand-hover)] hover:[box-shadow:var(--shadow-glow)] active:scale-[0.98]",
          variant === "outline" &&
            "text-foreground border border-primary/40 bg-transparent hover:border-primary hover:text-primary hover:[box-shadow:var(--shadow-glow)]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GradientButton.displayName = "GradientButton";
export { GradientButton };
