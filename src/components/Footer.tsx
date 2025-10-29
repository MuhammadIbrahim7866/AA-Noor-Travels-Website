import { Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        {/* Dotted airplane divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-white/30" />
          {/* <Plane className="w-6 h-6 mx-4" /> */}
          <img src="/logo.png" width="50px"></img>
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-white/30" />
        </div>

        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">AA NOOR TRAVELS</h3>
            <p className="text-sm text-white/80">Your Trusted Travel Partner</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="#"
              className="hover:text-primary-glow transition-smooth relative group"
            >
              Terms & Conditions
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </a>
            <span className="text-white/40">|</span>
            <a
              href="#"
              className="hover:text-primary-glow transition-smooth relative group"
            >
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </a>
            <span className="text-white/40">|</span>
            <a
              href="#"
              className="hover:text-primary-glow transition-smooth relative group"
            >
              Support
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          <div className="pt-6 border-t border-white/20">
            <p className="text-sm text-white/70">
              © 2025 AA Noor Travels. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
