
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Play, ChevronDown, Brain, Waves } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Interactive background gradient following mouse */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.1), transparent 40%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8 animate-fade-in">
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30">
            <Waves className="w-4 h-4 mr-2" />
            Naada-Based ML Platform
          </Badge>

          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Sudarshana
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Naada ML
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-2xl font-semibold text-purple-300">
                A product from Gonagoor Technologies
              </p>
              <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                Moving Intelligence to Machines
              </p>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                According to the Sri Rudram, a vedic hymn, intelligence has always been manifesting in different forms. 
                We at Sudarshana believe that the product just moves into a computing sphere.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-lg px-8 py-4 group"
            >
              Explore Models
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 text-lg px-8 py-4 group bg-transparent"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Learn More
            </Button>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Brain className="w-6 h-6 mr-2 text-purple-400" />
              Framework Integration
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Models which fit into existing scalable frameworks. The developed models are available as layers on 
              TensorFlow making them work seamlessly with existing machine learning architectures.
            </p>
          </div>
        </div>

        {/* Right Column - Visual Element */}
        <div className="relative">
          <div className="relative w-full max-w-lg mx-auto">
            {/* Main floating card */}
            <div className="relative z-10 bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <Waves className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-300 font-semibold">Naada Processing</span>
                  </div>
                  <div className="h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-1/2"></div>
                  <div className="h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full w-5/6"></div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-4">
                  <div className="text-sm text-gray-400 mb-2">Sanskrit → Python → TensorFlow</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-purple-300 text-sm">Knowledge amalgamation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl rotate-12 animate-pulse opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl -rotate-12 animate-pulse opacity-80"></div>
            <div className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg rotate-45 animate-pulse opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;
