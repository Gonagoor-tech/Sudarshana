const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop" 
            alt="Advanced technology background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <p className="text-lg text-muted-foreground mb-4 animate-fade-in">
              Leading the major revolutions of the current era
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-foreground leading-tight animate-fade-in tracking-tight">
              REVOLUTIONARY
              <br />
              <span className="text-primary">SOUND-BASED AI</span>
              <br />
              PLATFORM
            </h1>
            
            <div className="animate-fade-in">
              <a 
                href="/about" 
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-md"
              >
                ABOUT US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Provide solutions for
                <br />
                the realizable growth
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                A tale of a fateful trip that started from this tropic port aboard this tiny ship 
                today still wanted by the government they survive as soldiers of fortune to 
                ever wondered the east side to a deluxe apartment.
              </p>
            </div>
            
            <div className="text-center lg:text-right">
              {/* Optional Illustration/Graphic */}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight">
            DEFINING THE FUTURE OF TECHNOLOGY
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
            Progressive Innovation Foundation
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Where visionary thinking meets breakthrough execution - the most advanced technology platform of our era
          </p>
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[ 
            {
              title: "Next-Gen Innovation",
              description:
                "Pioneering the most advanced AI technologies of our time, setting new industry standards and pushing the boundaries of what's possible.",
              bullets: [
                { icon: "🌀", label: "Industry-first algorithms" },
                { icon: "🌀", label: "Breakthrough performance metrics" },
                { icon: "🌀", label: "Revolutionary architecture design" },
              ],
            },
            {
              title: "Naada Principles",
              description:
                "Ancient Sanskrit sound science revolutionized with cutting-edge AI, creating unprecedented audio analysis capabilities never seen before.",
              bullets: [
                { icon: "🌀", label: "Harmonic resonance mapping" },
                { icon: "🌀", label: "Quantum frequency recognition" },
                { icon: "🌀", label: "Sacred geometry algorithms" },
              ],
            },
            {
              title: "Vishwakarma Platform",
              description:
                "The world's most sophisticated semiconductor architecture designed specifically for next-generation sound-based machine learning at unprecedented scale.",
              bullets: [
                { icon: "🌀", label: "Ultra-specialized neural processing" },
                { icon: "🌀", label: "Real-time synthesis at light speed" },
                { icon: "🌀", label: "Zero-latency signal processing" },
              ],
            },
            {
              title: "Progressive AI",
              description:
                "Machine learning models that represent the pinnacle of current AI evolution, understanding sound at levels previously thought impossible.",
              bullets: [
                { icon: "🌀", label: "Quantum-level audio understanding" },
                { icon: "🌀", label: "Predictive sound intelligence" },
                { icon: "🌀", label: "Self-evolving algorithms" },
              ],
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-card border border-border shadow-xl p-6 transition-transform hover:-translate-y-2 duration-300 hover:shadow-2xl"
            >
              <h4 className="text-xl font-semibold text-card-foreground mb-4 tracking-wide">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                {item.bullets.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-lg">{point.icon}</span>
                    <span>{point.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Unprecedented Performance</h2>
            <p className="text-xl text-muted-foreground">
              Setting new industry benchmarks with revolutionary computational capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              { stat: "100K+", label: "Times Faster", desc: "Processing speed compared to traditional systems" },
              { stat: "<1ns", label: "Latency", desc: "Real-time processing for critical applications" },
              { stat: "99.9%", label: "Accuracy", desc: "Precision in audio analysis and recognition" },
              { stat: "24/7", label: "Availability", desc: "Continuous operation with zero downtime" },
            ].map((metric, i) => (
              <div key={i} className="text-center bg-card rounded-xl p-8 shadow-lg border hover:scale-105 transition-transform">
                <div className="text-5xl font-bold text-primary mb-2 animate-fade-in">{metric.stat}</div>
                <div className="text-lg font-semibold text-card-foreground mb-2">{metric.label}</div>
                <div className="text-muted-foreground text-sm">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;