import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khan",
    location: "Dubai, UAE",
    rating: 5,
    text: "Excellent service! AA Noor Travels made our family vacation stress-free. The visa processing was quick and the tour package was perfectly planned.",
    avatar: "AK",
  },
  {
    name: "Sara Ali",
    location: "Karachi, Pakistan",
    rating: 5,
    text: "Professional and trustworthy team. They handled everything from flights to hotel bookings. Highly recommend for international travel!",
    avatar: "SA",
  },
  {
    name: "Muhammad Hassan",
    location: "London, UK",
    rating: 5,
    text: "Best travel agency I've worked with. The customer support is outstanding and they always go the extra mile to ensure satisfaction.",
    avatar: "MH",
  },
  {
    name: "Fatima Bibi",
    location: "Lahore, Pakistan",
    rating: 5,
    text: "Made our Umrah journey so smooth and comfortable. Every detail was taken care of with precision. Truly grateful!",
    avatar: "FB",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Client <span className="text-primary">Feedbacks</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What our happy travelers say about us
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial card */}
          <div className="bg-gradient-to-br from-card to-secondary rounded-3xl p-12 shadow-lift border border-primary/10 relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lift">
                  {testimonials[currentIndex].avatar}
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-xl text-center text-foreground mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Name and location */}
              <div className="text-center">
                <h4 className="text-lg font-bold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary-glow transition-smooth shadow-soft flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary-glow transition-smooth shadow-soft flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
