// Update this page (the content is just a fallback if you fail to update the page)

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
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-tight animate-fade-in">
              REVOLUTIONARY
              <br />
              <span className="text-primary">SOUND-BASED AI</span>
              <br />
              PLATFORM
            </h1>
            
            <div className="animate-fade-in">
              <a 
                href="/about" 
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover-scale transition-all duration-300 hover:shadow-lg"
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
              <a 
                href="/contact" 
                className="inline-block bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover-scale transition-all duration-300 hover:shadow-lg"
              >
                FREE QUOTES
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Next-Gen Innovation */}
          <div className="bg-card rounded-lg p-6 shadow-lg border hover-scale">
            <h4 className="text-xl font-bold mb-4 text-card-foreground">Next-Gen Innovation</h4>
            <p className="text-muted-foreground mb-4">
              Pioneering the most advanced AI technologies of our time, setting new industry standards and pushing the boundaries of what's possible.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Industry-first algorithms</li>
              <li>• Breakthrough performance metrics</li>
              <li>• Revolutionary architecture design</li>
            </ul>
          </div>

          {/* Naada Principles */}
          <div className="bg-card rounded-lg p-6 shadow-lg border hover-scale">
            <h4 className="text-xl font-bold mb-4 text-card-foreground">Naada Principles</h4>
            <p className="text-muted-foreground mb-4">
              Ancient Sanskrit sound science revolutionized with cutting-edge AI, creating unprecedented audio analysis capabilities never seen before.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Harmonic resonance mapping</li>
              <li>• Quantum frequency recognition</li>
              <li>• Sacred geometry algorithms</li>
            </ul>
          </div>

          {/* Vishwakarma Platform */}
          <div className="bg-card rounded-lg p-6 shadow-lg border hover-scale">
            <h4 className="text-xl font-bold mb-4 text-card-foreground">Vishwakarma Platform</h4>
            <p className="text-muted-foreground mb-4">
              The world's most sophisticated semiconductor architecture designed specifically for next-generation sound-based machine learning at unprecedented scale.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Ultra-specialized neural processing</li>
              <li>• Real-time synthesis at light speed</li>
              <li>• Zero-latency signal processing</li>
            </ul>
          </div>

          {/* Progressive AI */}
          <div className="bg-card rounded-lg p-6 shadow-lg border hover-scale">
            <h4 className="text-xl font-bold mb-4 text-card-foreground">Progressive AI</h4>
            <p className="text-muted-foreground mb-4">
              Machine learning models that represent the pinnacle of current AI evolution, understanding sound at levels previously thought impossible.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Quantum-level audio understanding</li>
              <li>• Predictive sound intelligence</li>
              <li>• Self-evolving algorithms</li>
            </ul>
          </div>
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
            <div className="text-center bg-card rounded-lg p-8 shadow-lg border hover-scale">
              <div className="text-5xl font-bold text-primary mb-2 animate-fade-in">100K+</div>
              <div className="text-lg font-semibold text-card-foreground mb-2">Times Faster</div>
              <div className="text-muted-foreground">Processing speed compared to traditional systems</div>
            </div>
            
            <div className="text-center bg-card rounded-lg p-8 shadow-lg border hover-scale">
              <div className="text-5xl font-bold text-primary mb-2 animate-fade-in">&lt;1ns</div>
              <div className="text-lg font-semibold text-card-foreground mb-2">Latency</div>
              <div className="text-muted-foreground">Real-time processing for critical applications</div>
            </div>
            
            <div className="text-center bg-card rounded-lg p-8 shadow-lg border hover-scale">
              <div className="text-5xl font-bold text-primary mb-2 animate-fade-in">99.9%</div>
              <div className="text-lg font-semibold text-card-foreground mb-2">Accuracy</div>
              <div className="text-muted-foreground">Precision in audio analysis and recognition</div>
            </div>
            
            <div className="text-center bg-card rounded-lg p-8 shadow-lg border hover-scale">
              <div className="text-5xl font-bold text-primary mb-2 animate-fade-in">24/7</div>
              <div className="text-lg font-semibold text-card-foreground mb-2">Availability</div>
              <div className="text-muted-foreground">Continuous operation with zero downtime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
