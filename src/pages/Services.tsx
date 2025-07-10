const Services = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
          Our Services
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
          Comprehensive AI and semiconductor solutions bridging ancient wisdom with modern technology.
        </p>
      </section>

      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-card-foreground">AI Platform Development</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Custom AI platforms built on our revolutionary Vishwakarma semiconductor architecture.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-card-foreground">Sound Analysis Solutions</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Advanced audio processing using ancient Sanskrit naada principles and modern AI.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-card-foreground">Semiconductor Design</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Next-generation chip architecture optimized for AI and machine learning workloads.
            </p>
          </div>
        </div>

        {/* Vishwakarma Platform Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">Vishwakarma Platform</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
            Named after the divine architect, our semiconductor platform is engineered for the future of sound-based artificial intelligence
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          <div className="text-center bg-card rounded-lg p-6 md:p-8 shadow-lg border">
            <div className="text-2xl md:text-4xl font-bold text-primary mb-2">&gt;100000x</div>
            <div className="text-base md:text-lg font-semibold text-card-foreground mb-2">High-Performance Computing</div>
            <div className="text-sm md:text-base text-muted-foreground">Audio processing compared to traditional architectures</div>
          </div>

          <div className="text-center bg-card rounded-lg p-6 md:p-8 shadow-lg border">
            <div className="text-2xl md:text-4xl font-bold text-primary mb-2">Military-grade</div>
            <div className="text-base md:text-lg font-semibold text-card-foreground mb-2">Enterprise Security</div>
            <div className="text-sm md:text-base text-muted-foreground">Encryption for sensitive research data</div>
          </div>

          <div className="text-center bg-card rounded-lg p-6 md:p-8 shadow-lg border">
            <div className="text-2xl md:text-4xl font-bold text-primary mb-2">&lt;1ns</div>
            <div className="text-base md:text-lg font-semibold text-card-foreground mb-2">Real-time Processing</div>
            <div className="text-sm md:text-base text-muted-foreground">For critical audio analysis applications</div>
          </div>

          <div className="text-center bg-card rounded-lg p-6 md:p-8 shadow-lg border">
            <div className="text-2xl md:text-4xl font-bold text-primary mb-2">Cloud-native</div>
            <div className="text-base md:text-lg font-semibold text-card-foreground mb-2">Scalable Architecture</div>
            <div className="text-sm md:text-base text-muted-foreground">Distributed computing across global networks</div>
          </div>
        </div>

        {/* Revolutionary Architecture */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 md:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Revolutionary Architecture
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                The Vishwakarma platform represents a paradigm shift in semiconductor design, specifically optimized for the complex computations required by naada-based machine learning algorithms.
              </p>
              <ul className="space-y-4 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Custom tensor processing units for audio data
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Integrated frequency domain accelerators
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Vedic mathematics-inspired algorithms
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary/20 mb-4">वि</div>
              <div className="text-lg md:text-xl font-semibold text-foreground mb-2">Architecture</div>
              <div className="text-base md:text-lg text-muted-foreground">Precision Engineered</div>
            </div>
          </div>
        </div>

        {/* Research Areas */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">Moving Intelligence to Machines</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            According to the Sri Rudram, a vedic hymn, intelligence has always been manifesting in different forms. 
            We at Sudarshana believe that the product just moves into a computing sphere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Naada Jnana */}
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-xl md:text-2xl font-bold text-primary">🎵</div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-2">Naada Jnana</h3>
              <h4 className="text-base md:text-lg font-semibold text-primary mb-4">Knowledge on Sound</h4>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Research on sound and its feature management using Python and C++ libraries. Understanding the fundamental 
              principles of sound waves and their computational representation.
            </p>
          </div>

          {/* Prajwala Jnana */}
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-xl md:text-2xl font-bold text-primary">🌈</div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-2">Prajwala Jnana</h3>
              <h4 className="text-base md:text-lg font-semibold text-primary mb-4">Research on Colors</h4>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Deep research on colors and color schemes for representation conversions. Exploring the relationship 
              between color theory and machine learning applications.
            </p>
          </div>

          {/* Chitra Jnana */}
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <div className="text-center mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-xl md:text-2xl font-bold text-primary">👁️</div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-2">Chitra Jnana</h3>
              <h4 className="text-base md:text-lg font-semibold text-primary mb-4">Understanding Visual World</h4>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Understanding the world as a set of moving images or pictures. Developing computational models that can 
              interpret and process visual information like human perception.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;