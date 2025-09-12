import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <h1 className="text-8xl font-light text-foreground/30 mb-4">404</h1>
        <h2 className="text-3xl font-medium text-foreground mb-6">Oops! Page not found</h2>
        <p className="text-lg text-foreground/70 font-light max-w-md mx-auto mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a 
          href="/"
          className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 mx-auto w-fit"
        >
          <span>Return to Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;