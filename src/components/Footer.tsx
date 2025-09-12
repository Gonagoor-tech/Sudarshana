import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a14] text-white/80 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Brand and Socials */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold text-white mb-4">Sudarshana</h3>
            <p className="text-white/60 mb-6">
              Revolutionary Sound-Based AI Platform Defining Tomorrow
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors"><Github /></a>
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors"><Linkedin /></a>
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors"><Twitter /></a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-3">
                <li><Link to="/vishwakarma" className="hover:text-yellow-400 transition-colors">Vishwakarma</Link></li>
                <li><Link to="/research" className="hover:text-yellow-400 transition-colors">Research</Link></li>
                <li><Link to="/services" className="hover:text-yellow-400 transition-colors">Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
                <li><Link to="/case-studies" className="hover:text-yellow-400 transition-colors">Case Studies</Link></li>
                <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} Sudarshana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
