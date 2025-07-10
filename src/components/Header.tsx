
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = () => {
    scrollToTop();
    setIsOpen(false);
  };

  return (
    <header className="glass-effect sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Premium Logo + Brand */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-4 group">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Sudarshana Logo" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gradient tracking-wide">Sudarshana</span>
              <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">Innovation Platform</span>
            </div>
          </Link>

          {/* Premium Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={scrollToTop}
                className={`relative px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-xl group ${
                  location.pathname === item.path 
                    ? "text-primary bg-primary/10 shadow-lg" 
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  location.pathname === item.path 
                    ? "bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20" 
                    : "bg-transparent group-hover:bg-gradient-to-r group-hover:from-primary/5 group-hover:to-accent/5"
                }`}></div>
              </Link>
            ))}
          </nav>

          {/* Enhanced Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="relative p-3 text-foreground hover:text-primary transition-colors duration-300 rounded-xl hover:bg-primary/5">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Open navigation menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="glass-effect border-border/50 w-80">
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-3 py-6 border-b border-border/50">
                    <img src="/logo.png" alt="Sudarshana" className="h-8 w-auto" />
                    <span className="text-xl font-bold text-gradient">Sudarshana</span>
                  </div>
                  
                  <nav className="flex flex-col space-y-2 mt-8 flex-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={handleNavClick}
                        className={`flex items-center px-4 py-4 text-base font-medium rounded-xl transition-all duration-300 ${
                          location.pathname === item.path 
                            ? "text-primary bg-primary/10 border border-primary/20 shadow-lg" 
                            : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        <span>{item.name}</span>
                        {location.pathname === item.path && (
                          <div className="ml-auto w-2 h-2 rounded-full bg-primary"></div>
                        )}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-6 border-t border-border/50">
                    <p className="text-xs text-muted-foreground text-center">
                      Revolutionary Sound-Based AI Platform
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
