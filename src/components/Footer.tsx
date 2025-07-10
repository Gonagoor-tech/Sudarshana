
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary/95 to-accent overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="#ffffff" fillOpacity="0.03"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)"/>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img src="/logo.png" alt="Sudarshana Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-3xl font-bold text-primary-foreground">Sudarshana</h3>
                <p className="text-primary-foreground/70 text-sm font-medium tracking-wide">Innovation Platform</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-md">
              Revolutionary Sound-Based AI Platform defining tomorrow's technology landscape 
              through the perfect fusion of ancient wisdom and cutting-edge innovation.
            </p>
            <div className="flex items-center space-x-6">
              <div className="luxury-card bg-primary-foreground/10 p-4 rounded-xl border border-primary-foreground/20">
                <p className="text-primary-foreground/90 text-sm font-medium">Next-Gen Technology</p>
              </div>
              <div className="luxury-card bg-primary-foreground/10 p-4 rounded-xl border border-primary-foreground/20">
                <p className="text-primary-foreground/90 text-sm font-medium">24/7 Innovation</p>
              </div>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-xl font-bold text-primary-foreground mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/60 mr-3 group-hover:bg-primary-foreground transition-colors"></span>
                  Vishwakarma Platform
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/60 mr-3 group-hover:bg-primary-foreground transition-colors"></span>
                  Research & Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/60 mr-3 group-hover:bg-primary-foreground transition-colors"></span>
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/60 mr-3 group-hover:bg-primary-foreground transition-colors"></span>
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-xl font-bold text-primary-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/60 mr-3 group-hover:bg-primary-foreground transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/60 mr-3 group-hover:bg-primary-foreground transition-colors"></span>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/60 mr-3 group-hover:bg-primary-foreground transition-colors"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/60 mr-3 group-hover:bg-primary-foreground transition-colors"></span>
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="luxury-card bg-primary-foreground/5 p-8 rounded-2xl border border-primary-foreground/20 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-lg font-semibold text-primary-foreground mb-3">Email</h5>
              <p className="text-primary-foreground/80">contact@sudarshana.ai</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-primary-foreground mb-3">Phone</h5>
              <p className="text-primary-foreground/80">+1 (555) 123-4567</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-primary-foreground mb-3">Location</h5>
              <p className="text-primary-foreground/80">Silicon Valley, California</p>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/70 text-sm mb-4 md:mb-0">
            © 2024 Sudarshana. All rights reserved. Pioneering the future of AI technology.
          </p>
          <div className="flex items-center space-x-6 text-primary-foreground/70 text-sm">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            <Link to="/security" className="hover:text-primary-foreground transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
