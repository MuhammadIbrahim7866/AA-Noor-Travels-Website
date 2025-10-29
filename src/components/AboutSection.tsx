import { useEffect, useState } from "react";
import worldMap from "@/assets/world-map.jpg";
import travelCollage from "@/assets/travel-collage.jpg";

const AboutSection = () => {
  const [counters, setCounters] = useState({
    years: 0,
    travelers: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const yearTarget = 7;
    const travelersTarget = 2500;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCounters({
        years: Math.floor((yearTarget * step) / steps),
        travelers: Math.floor((travelersTarget * step) / steps),
      });

      if (step >= steps) clearInterval(interval);
    }, duration / steps);
  };

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* World map background */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${worldMap})` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                About <span className="text-primary">AA Noor Travels</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 7 years of excellence in the travel industry, AA Noor
                Travels has been your trusted partner in creating memorable
                journeys. We specialize in providing comprehensive visa
                assistance, travel planning, and worldwide tour packages.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Our commitment is to make your travel dreams a reality with
                personalized service, expert guidance, and unwavering support at
                every step of your journey.
              </p>
            </div>

            {/* Animated counters */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-secondary rounded-2xl shadow-soft animate-counter">
                <div className="text-5xl font-bold text-primary mb-2">
                  {counters.years}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years of Experience
                </div>
              </div>
              <div className="text-center p-6 bg-secondary rounded-2xl shadow-soft animate-counter" style={{ animationDelay: "0.2s" }}>
                <div className="text-5xl font-bold text-primary mb-2">
                  {counters.travelers}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Travelers
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-lg">
              <p className="text-foreground font-medium">
                Worldwide Visa & Travel Support
              </p>
              <p className="text-muted-foreground mt-2">
                From visa processing to complete tour packages, we handle every
                detail of your international travel needs.
              </p>
            </div>
          </div>

          {/* Right side - Image collage */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lift hover:scale-105 transition-smooth">
              <img
                src={travelCollage}
                alt="Travel destinations"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
