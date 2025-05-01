
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface WelcomeProps {
  className?: string;
}

const Welcome = ({ className }: WelcomeProps) => {
  return (
    <div className={cn("text-center space-y-6 max-w-2xl mx-auto", className)}>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
        Bringing <span className="text-floodblue-500">Hope</span> and <span className="text-floodblue-500">Support</span> During Floods
      </h1>
      
      <p className="text-muted-foreground text-lg md:text-xl animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
        FloodAid connects communities, volunteers, and organizations to coordinate relief efforts and provide assistance when it's needed most.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 pt-2 animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
        <Button size="lg" className="gap-2 group">
          Get Help Now
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Button>
        <Button size="lg" variant="outline">
          Learn How It Works
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
