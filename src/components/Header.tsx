
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
    <header className="bg-[#0f0f1a]/95 text-white backdrop-blur-md border-b border-white/10 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo + Brand Name */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-3">
            <img src="/logo.png" alt="Sudarshana Logo" className="h-9 w-auto" />
            <span className="text-2xl font-bold text-white tracking-wide">Sudarshana</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={scrollToTop}
                className={`text-sm font-medium hover:text-yellow-400 transition-colors duration-300 ${
                  location.pathname === item.path ? "text-yellow-400" : "text-white/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-white hover:text-yellow-400 p-2">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Open menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0f0f1a] border-white/10">
                <nav className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={handleNavClick}
                      className={`text-lg font-medium hover:text-yellow-400 transition-colors duration-300 ${
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
