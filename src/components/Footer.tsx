import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sudarshana</h3>
            <p className="text-primary-foreground/80">
              Revolutionary Sound-Based AI Platform Defining Tomorrow
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/vishwakarma" className="text-primary-foreground/80 hover:text-primary-foreground">Vishwakarma Platform</Link></li>
              <li><Link to="/research" className="text-primary-foreground/80 hover:text-primary-foreground">Research</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground">Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground">About</Link></li>
              <li><Link to="/case-studies" className="text-primary-foreground/80 hover:text-primary-foreground">Case Studies</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-primary-foreground/80 mb-2">contact@sudarshana.ai</p>
            <p className="text-primary-foreground/80">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Sudarshana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;