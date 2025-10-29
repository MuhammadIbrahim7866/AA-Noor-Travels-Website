import { useState, useEffect } from "react";
import { Plane } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {/* <Plane className="w-6 h-6 text-primary" /> */}
              <img src="./logo/AA Noor Travels logo transparent favicon.png " width="50px"></img>
              <div>
                <h1 className="text-xl font-bold text-primary">
                  AA NOOR TRAVELS
                </h1>
                <p className="text-xs text-muted-foreground">
                  Your Trusted Travel Partner
                </p>
              </div>
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-smooth relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-smooth relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-smooth relative group"
              >
                Our Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground hover:text-primary transition-smooth relative group"
              >
                Client Feedbacks
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-smooth relative group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
