
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Briefcase, Lightbulb, Cog, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "AI Consulting",
      description: "Strategic guidance to integrate AI solutions into your business workflow and maximize ROI.",
      features: ["Strategic Planning", "ROI Analysis", "Implementation Roadmap", "Risk Assessment"],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      icon: Lightbulb,
      title: "Custom AI Development",
      description: "Tailored AI solutions built specifically for your unique business challenges and requirements.",
      features: ["Custom Models", "API Integration", "Cloud Deployment", "24/7 Support"],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      icon: Cog,
      title: "AI Automation",
      description: "Streamline your operations with intelligent automation that learns and adapts to your processes.",
      features: ["Process Automation", "Workflow Optimization", "Smart Triggers", "Performance Analytics"],
      color: "from-green-500 to-emerald-500",
      popular: false
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Comprehensive training programs to help your team leverage AI tools effectively and confidently.",
      features: ["Hands-on Workshops", "Certification Programs", "Ongoing Support", "Best Practices"],
      color: "from-orange-500 to-red-500",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From strategic consulting to custom development, we offer end-to-end AI services 
            that transform businesses and drive innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`relative bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group p-8 ${
                service.popular ? 'ring-2 ring-purple-500/30' : ''
              }`}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                  Most Popular
                </Badge>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-purple-300">What's Included:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white border-0 group-hover:scale-105 transition-transform duration-300`}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-slate-800/30 to-purple-900/30 rounded-3xl p-12 backdrop-blur-lg border border-purple-500/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Process</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your AI implementation is successful and delivers measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and challenges" },
              { step: "02", title: "Strategy", desc: "Designing the optimal AI approach" },
              { step: "03", title: "Development", desc: "Building and testing your solution" },
              { step: "04", title: "Deployment", desc: "Launching and optimizing performance" }
            ].map((phase, index) => (
              <div key={phase.step} className="relative text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto group-hover:scale-110 transition-transform duration-300">
                    {phase.step}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{phase.title}</h4>
                <p className="text-gray-300 text-sm">{phase.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
