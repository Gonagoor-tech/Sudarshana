import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
 
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = () => {
    scrollToTop();
    setIsOpen(false);
  };

  return (
    <header className="bg-[#0a0a14] text-white border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo + Brand Name */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-3">
            <img src="/logo.png" alt="Sudarshana Logo" className="h-10 w-auto" />
            <span className="text-3xl font-bold text-white tracking-wider">Sudarshana</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={scrollToTop}
                className={`relative text-sm font-medium text-white/80 transition-colors duration-300 group ${
                  location.pathname === item.path ? "text-white" : ""
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${
                    location.pathname === item.path ? "scale-x-100" : ""
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-white hover:text-yellow-400 p-2">
                  <Menu className="w-7 h-7" />
                  <span className="sr-only">Open menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0a0a14] border-l border-white/10">
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">
                        <X className="w-7 h-7" />
                    </button>
                </div>
                <nav className="flex flex-col items-center space-y-8 mt-10">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={handleNavClick}
                      className={`text-xl font-medium hover:text-yellow-400 transition-colors duration-300 ${
                        location.pathname === item.path ? "text-yellow-400" : "text-white/80"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;