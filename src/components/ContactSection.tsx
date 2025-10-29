// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { Plane } from "lucide-react";
// import { toast } from "sonner";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { db } from "../firebase"; // ✅ Make sure firebase.js is inside src folder
import { collection, addDoc } from "firebase/firestore";
import { Plane } from "lucide-react";
import { toast } from "sonner";


const countries = [
  "United Arab Emirates",
  "Saudi Arabia",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Malaysia",
  "Singapore",
  "Turkey",
  "Thailand",
  "Ecuador",
  "China",
  "Vietnam",
  "Indonesia",
  "Singapore",
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    country: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.address || !formData.phone || !formData.country) {
      toast.error("Please fill in all fields");
      return;
    }try {
      await addDoc(collection(db, "form_submissions"), {
        name: formData.name,
        address: formData.address,
        phone: formData.phone,
        country: formData.country,
        message: formData.message || "",
        timestamp: new Date(),
      });
    
      toast.success("✈️ Form submitted successfully! AA Noor Travels will contact you soon!", {
        style: { background: "#4ade80", color: "#fff" },
      });
    
      setFormData({
        name: "",
        address: "",
        phone: "",
        country: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form: ", err);
      toast.error("❌ Something went wrong. Please try again!");
    }
    


    setIsSubmitting(true);

    // Simulate submission with animation
    setTimeout(() => {
      // Clear form
      setFormData({
        name: "",
        address: "",
        phone: "",
        country: "",
      });

      setIsSubmitted(true);
      setIsSubmitting(false);

      // Show success toast
      const messages = [
        "Request Submitted Successfully ✅",
        "Form Submitted! ✈️ We will reach out soon.",
        "Great! Your travel request is now in process.",
      ];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      toast.success(randomMessage);

      // Reset button text after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Book Your <span className="text-primary">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and our travel experts will contact you soon
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lift border border-primary/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="h-12 rounded-xl border-border focus:border-primary transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-foreground font-medium">
                  Address
                </Label>
                <Input
                  id="address"
                  placeholder="Your complete address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="h-12 rounded-xl border-border focus:border-primary transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  placeholder="+92-XXX-XXXXXXX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="h-12 rounded-xl border-border focus:border-primary transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-foreground font-medium">
                  Destination Country
                </Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) =>
                    setFormData({ ...formData, country: value })
                  }
                >
                  <SelectTrigger className="h-12 rounded-xl border-border focus:border-primary transition-smooth">
                    <SelectValue placeholder="Select destination country" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                variant="booking"
                size="lg"
                className="w-full h-14 rounded-xl text-base"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting && (
                  <Plane className="w-5 h-5 animate-fly-plane absolute" />
                )}
                {isSubmitted ? (
                  <span className="animate-fade-in flex items-center gap-2">
                    AA Noor Travels will contact you soon ✈️
                  </span>
                ) : (
                  <span>BOOK NOW</span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
