
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Database, Bot, ChartBar, ArrowRight, Star, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const services = [
    {
      icon: Cpu,
      title: "AI Model Development",
      description: "Custom AI models tailored to your specific business needs and requirements.",
      features: ["Custom Neural Networks", "Model Training", "Performance Optimization", "Deployment Support"],
      price: "Starting at $10,000"
    },
    {
      icon: Bot,
      title: "Intelligent Automation",
      description: "Automate complex workflows with AI-powered decision making and processing.",
      features: ["Process Automation", "Decision Trees", "Workflow Optimization", "Integration Support"],
      price: "Starting at $5,000"
    },
    {
      icon: Database,
      title: "Data Analytics Platform",
      description: "Advanced analytics platform for deep insights and predictive modeling.",
      features: ["Real-time Analytics", "Predictive Models", "Data Visualization", "Custom Dashboards"],
      price: "Starting at $15,000"
    },
    {
      icon: ChartBar,
      title: "Business Intelligence",
      description: "Transform your data into actionable business insights with AI-driven analysis.",
      features: ["Market Analysis", "Trend Prediction", "Performance Metrics", "Strategy Recommendations"],
      price: "Starting at $8,000"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white">
      <Navigation />
      
      <div className="pt-20">
        {/* New Creative Header Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
                      <Star className="w-4 h-4 mr-2" />
                      Premium Services
                    </Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                      Transform
                    </span>
                    <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                      Your Business
                    </span>
                    <span className="block text-white/80 text-4xl md:text-5xl mt-2">
                      with AI Excellence
                    </span>
                  </h1>
                </div>

                <div className="space-y-6">
                  <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                    Unlock the full potential of artificial intelligence with our comprehensive suite of services. 
                    From custom model development to intelligent automation, we deliver solutions that drive real results.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm font-medium">Fast Implementation</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2">
                      <Star className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-medium">Expert Team</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2">
                      <ArrowRight className="w-5 h-5 text-green-400" />
                      <span className="text-sm font-medium">Proven Results</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-lg px-8 py-4 group">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 text-lg px-8 py-4 bg-transparent">
                    View Portfolio
                  </Button>
                </div>
              </div>

              {/* Right side - Visual elements */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Top left card */}
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">AI Models</h3>
                        <p className="text-sm text-gray-300">Custom built</p>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>

                  {/* Top right card */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30 transform -rotate-3 hover:rotate-0 transition-transform duration-500 mt-8">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Analytics</h3>
                        <p className="text-sm text-gray-300">Real-time insights</p>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom left card */}
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Automation</h3>
                        <p className="text-sm text-gray-300">Smart workflows</p>
                      </div>
                      <div className="text-2xl font-bold text-green-400">98%</div>
                    </div>
                  </div>

                  {/* Bottom right card */}
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30 transform -rotate-2 hover:rotate-0 transition-transform duration-500 -mt-4">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <ChartBar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Intelligence</h3>
                        <p className="text-sm text-gray-300">Business insights</p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className={`w-1 h-8 bg-gradient-to-t from-orange-400 to-red-400 rounded-full`} style={{height: `${(i + 1) * 8}px`}}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg rotate-45 animate-bounce opacity-70"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse opacity-70"></div>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
                { number: "50+", label: "AI Specialists" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Perfect Solution</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive range of AI services designed to meet your specific business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title}
                  className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group p-6 md:p-8"
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-3 md:p-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-purple-400 font-semibold">{service.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold">Key Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                      Get Started
                    </Button>
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

export default ServicesPage;
