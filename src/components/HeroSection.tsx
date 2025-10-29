import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0 gradient-sky" />
      
      {/* Hero image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Animated airplane with dotted path */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="planePath"
            d="M -100,300 Q 300,100 600,200 T 1200,150"
            fill="none"
          />
        </defs>
        <path
          d="M -100,300 Q 300,100 600,200 T 1200,150"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="10,10"
          fill="none"
          className="animate-draw-path"
          style={{ strokeDashoffset: 1000 }}
        />
      </svg>

      <div className="absolute top-1/3 left-0 animate-fly-plane">
        <Plane className="w-12 h-12 text-primary" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-slide-in-up">
          Explore the World with{" "}
          <span className="text-primary">AA Noor Travels</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
          Reliable & seamless travel solutions with comfort and trust.
        </p>
        <Button
          variant ="hero"
          size="xl"
          onClick={scrollToContact}
          className="animate-scale-in group"
        >
          BOOK YOUR TRIP
          <Plane className="w-5 h-5 transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
        </Button>
      </div>

      {/* Decorative clouds */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
