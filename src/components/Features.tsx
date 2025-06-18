
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Target, Shield, BarChart3, Cpu } from "lucide-react";

const Features = () => {
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
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
            Core Capabilities
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powerful Features
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Built for Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the next generation of AI technology with features designed 
            to revolutionize how you work, analyze, and grow your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group hover:transform hover:scale-105 p-8"
              style={{ animationDelay: feature.delay }}
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect line */}
                <div className={`h-1 bg-gradient-to-r ${feature.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to experience these features?</p>
          <div className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 cursor-pointer group">
            <span className="text-lg font-medium">Explore All Capabilities</span>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white text-sm">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
