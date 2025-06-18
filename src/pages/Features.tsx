
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Target, Shield, BarChart3, Cpu } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FeaturesPage = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced Neural Networks",
      description: "Deep learning algorithms that adapt and evolve with your data patterns for maximum accuracy.",
      color: "from-purple-500 to-pink-500",
      delay: "0ms"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast AI computations that deliver insights and responses in milliseconds.",
      color: "from-blue-500 to-cyan-500",
      delay: "100ms"
    },
    {
      icon: Target,
      title: "Precision Analytics",
      description: "Highly accurate predictive models that help you make data-driven decisions with confidence.",
      color: "from-green-500 to-emerald-500",
      delay: "200ms"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to protect your sensitive data and operations.",
      color: "from-red-500 to-pink-500",
      delay: "300ms"
    },
    {
      icon: BarChart3,
      title: "Smart Insights",
      description: "Automated report generation and trend analysis that reveals hidden opportunities.",
      color: "from-yellow-500 to-orange-500",
      delay: "400ms"
    },
    {
      icon: Cpu,
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture that grows with your business needs and handles any workload.",
      color: "from-indigo-500 to-purple-500",
      delay: "500ms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-6">
              Core Capabilities
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Powerful Features
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Built for Excellence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of AI technology with features designed 
              to revolutionize how you work, analyze, and grow your business.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group hover:transform hover:scale-105 p-6 md:p-8"
                  style={{ animationDelay: feature.delay }}
                >
                  <div className="space-y-4 md:space-y-6">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-3 md:p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className={`h-1 bg-gradient-to-r ${feature.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
