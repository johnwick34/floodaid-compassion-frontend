
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Welcome from "@/components/Welcome";
import LoginPanel from "@/components/LoginPanel";
import { CloudSunRain } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to allow for animations to play
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <CloudSunRain size={48} className="text-floodblue-500 animate-pulse" />
        <p className="mt-4 text-lg">Loading FloodAid...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-72 h-72 rounded-full bg-floodblue-100 filter blur-3xl opacity-30 -top-10 -right-20" />
            <div className="absolute w-96 h-96 rounded-full bg-floodblue-200 filter blur-3xl opacity-20 -bottom-20 -left-20" />
          </div>
          
          <div className="container px-4 mx-auto relative">
            <Welcome />
          </div>
        </section>

        {/* Login Panel Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Join the Relief Effort
            </h2>
            <div className="flex justify-center">
              <LoginPanel />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              How FloodAid Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Connect",
                  description: "Connect victims with nearby volunteers, NGOs, and resources during flood emergencies."
                },
                {
                  title: "Coordinate",
                  description: "Efficiently coordinate relief efforts and distribute resources where they're needed most."
                },
                {
                  title: "Support",
                  description: "Provide ongoing support through fundraising initiatives and volunteer programs."
                }
              ].map((feature, index) => (
                <div 
                  key={feature.title}
                  className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-floodblue-100 dark:bg-floodblue-900/30 flex items-center justify-center text-floodblue-500 mb-4">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
