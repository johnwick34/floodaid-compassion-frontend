
import { Heart, CloudSunRain } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ className, size = "md", showText = true }: LogoProps) => {
  const sizes = {
    sm: { icon: 18, text: "text-lg" },
    md: { icon: 24, text: "text-xl" },
    lg: { icon: 36, text: "text-3xl" }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <CloudSunRain 
          size={sizes[size].icon} 
          className="text-floodblue-500 animate-pulse-gentle" 
        />
        <Heart 
          size={sizes[size].icon / 2.5} 
          className="absolute bottom-0 right-0 text-floodblue-300 fill-floodblue-300" 
        />
      </div>
      {showText && (
        <span className={cn("font-bold tracking-tight", sizes[size].text)}>
          <span className="text-floodblue-500">Flood</span>
          <span className="text-floodblue-700">Aid</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
