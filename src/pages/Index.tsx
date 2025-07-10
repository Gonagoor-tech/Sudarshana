
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop" 
            alt="Advanced technology background"
            className="w-full h-full object-cover parallax-scroll"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl floating-animation opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl floating-animation opacity-20" style={{animationDelay: '-3s'}}></div>

        {/* Premium Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block px-6 py-2 text-sm font-medium tracking-widest uppercase bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary backdrop-blur-sm">
                Leading Innovation Since 2024
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[0.9] animate-fade-in">
              <span className="block text-foreground">REVOLUTIONARY</span>
              <span className="block text-gradient mt-2">SOUND-BASED AI</span>
              <span className="block text-foreground mt-2">PLATFORM</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed animate-fade-in font-light">
              Pioneering the convergence of ancient Sanskrit sound science with 
              cutting-edge artificial intelligence to define tomorrow's technology landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in">
              <a 
                href="/about" 
                className="premium-button px-10 py-5 text-primary-foreground text-lg font-semibold rounded-xl"
              >
                Discover Our Vision
              </a>
              <a 
                href="/services" 
                className="px-10 py-5 text-lg font-semibold rounded-xl border-2 border-primary/20 text-primary hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Technology Showcase */}
      <section className="py-32 px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-block px-6 py-2 text-sm font-medium tracking-widest uppercase bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary">
                Core Technologies
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-gradient">
              Defining the Future
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Where ancient wisdom meets revolutionary innovation—the most advanced 
              technology platform of our era.
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              {
                title: "Next-Gen Innovation",
                description: "Pioneering AI technologies that set new industry standards and push the boundaries of possibility.",
                features: ["Industry-first algorithms", "Breakthrough performance", "Revolutionary architecture"],
                gradient: "from-blue-500/10 to-purple-500/10"
              },
              {
                title: "Naada Principles",
                description: "Ancient Sanskrit sound science revolutionized with cutting-edge AI for unprecedented audio analysis.",
                features: ["Harmonic resonance mapping", "Quantum frequency recognition", "Sacred geometry algorithms"],
                gradient: "from-emerald-500/10 to-teal-500/10"
              },
              {
                title: "Vishwakarma Platform",
                description: "The world's most sophisticated semiconductor architecture for next-generation sound-based machine learning.",
                features: ["Ultra-specialized processing", "Real-time synthesis", "Zero-latency signals"],
                gradient: "from-orange-500/10 to-red-500/10"
              },
              {
                title: "Progressive AI",
                description: "Machine learning models representing the pinnacle of AI evolution, understanding sound at impossible levels.",
                features: ["Quantum-level understanding", "Predictive intelligence", "Self-evolving algorithms"],
                gradient: "from-violet-500/10 to-pink-500/10"
              },
            ].map((item, idx) => (
              <div key={idx} className="luxury-card group hover-scale p-8 transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all duration-500">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-3">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Performance Metrics */}
      <section className="py-32 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-gradient">Unprecedented Performance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Setting new industry benchmarks with revolutionary computational capabilities 
              that redefine what's possible in AI-powered audio processing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              { stat: "100K+", label: "Times Faster", desc: "Processing speed vs traditional systems", color: "from-blue-500 to-cyan-500" },
              { stat: "<1ns", label: "Latency", desc: "Real-time processing capabilities", color: "from-emerald-500 to-green-500" },
              { stat: "99.9%", label: "Accuracy", desc: "Precision in audio analysis", color: "from-orange-500 to-yellow-500" },
              { stat: "24/7", label: "Availability", desc: "Continuous operation uptime", color: "from-purple-500 to-pink-500" },
            ].map((metric, i) => (
              <div key={i} className="luxury-card group text-center p-10 hover-scale">
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${metric.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                    {metric.stat}
                  </div>
                </div>
                <div className="text-xl font-semibold text-foreground mb-3">{metric.label}</div>
                <div className="text-muted-foreground text-sm leading-relaxed">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
        <div className="absolute inset-0 opacity-30">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <pattern id="cta-dot-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="#ffffff" fillOpacity="0.05"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-dot-pattern)"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary-foreground leading-tight">
                Ready to Transform
                <br />
                <span className="text-gradient-gold">Your Future?</span>
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Join the revolution in sound-based AI technology. Experience unprecedented 
                performance, unmatched accuracy, and limitless possibilities with our 
                cutting-edge platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Start Your Journey
                </a>
                <a 
                  href="/about" 
                  className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/10 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="luxury-card p-8 bg-primary-foreground/10 backdrop-blur-lg border-primary-foreground/20">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">Get Started Today</h3>
                <ul className="space-y-3 text-primary-foreground/90">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
                    Free consultation with our experts
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
                    Custom solution architecture
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
                    24/7 premium support included
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
