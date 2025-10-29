import { Globe, FileCheck, Plane, Hotel, Briefcase, Users } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Visa Processing",
    description: "Fast and reliable visa assistance for all major destinations worldwide.",
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Best flight deals and convenient booking for domestic and international travel.",
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Premium accommodations and budget-friendly stays across the globe.",
  },
  {
    icon: Globe,
    title: "Tour Packages",
    description: "Customized tour packages for family vacations, honeymoons, and group tours.",
  },
  {
    icon: Briefcase,
    title: "Business Travel",
    description: "Corporate travel solutions with priority service and flexible arrangements.",
  },
  {
    icon: Users,
    title: "Group Tours",
    description: "Organized group travel experiences with expert guides and full support.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive travel solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-lift hover:-translate-y-2 transition-smooth cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-smooth">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
