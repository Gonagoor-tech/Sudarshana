
const Resources = () => {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-16 md:mb-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-foreground">
          Resources & Research
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Explore our comprehensive research initiatives, technology solutions, and real-world applications that bridge ancient wisdom with modern innovation.
        </p>
      </section>

      {/* Solutions Overview */}
      <section className="max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
            Technology Solutions
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary technology solutions that merge ancient Sanskrit principles with cutting-edge AI and semiconductor innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8 shadow-lg border border-primary/10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-primary">🧠</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-card-foreground">Enterprise AI Solutions</h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
              Scalable AI implementations for enterprise-grade applications using our proprietary Vishwakarma semiconductor architecture.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                Custom AI model development and deployment
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                Real-time processing with sub-nanosecond latency
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                Military-grade security and compliance
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 md:p-8 shadow-lg border border-accent/10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-accent">🎵</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-card-foreground">Audio Intelligence Platform</h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
              Advanced sound analysis and processing solutions based on ancient Sanskrit naada principles and modern AI.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li className="flex items-start">
                <span className="text-accent mr-2 mt-1">•</span>
                Quantum-level audio understanding and analysis
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 mt-1">•</span>
                Harmonic resonance mapping and prediction
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2 mt-1">•</span>
                100,000x faster processing than traditional methods
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
            Research Initiatives
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            According to the Sri Rudram, intelligence manifests in different forms. We believe it's now moving into the computational sphere through these three core research areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">🎵</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-2">Naada Jnana</h3>
              <h4 className="text-base md:text-lg font-semibold text-primary mb-4">Knowledge on Sound</h4>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center">
              Research on sound and its feature management using Python and C++ libraries. Understanding the fundamental principles of sound waves and their computational representation.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">🌈</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-2">Prajwala Jnana</h3>
              <h4 className="text-base md:text-lg font-semibold text-accent mb-4">Research on Colors</h4>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center">
              Deep research on colors and color schemes for representation conversions. Exploring the relationship between color theory and machine learning applications.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">👁️</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-2">Chitra Jnana</h3>
              <h4 className="text-base md:text-lg font-semibold text-primary mb-4">Understanding Visual World</h4>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center">
              Understanding the world as a set of moving images or pictures. Developing computational models that can interpret and process visual information like human perception.
            </p>
          </div>
        </div>
      </section>

      {/* Global Research Network */}
      <section className="max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
            Global Research Network
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Building bridges between ancient wisdom and modern technology through strategic partnerships with world-class institutions across the globe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Universities */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">Universities</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: "MIT CSAIL", location: "Cambridge, USA", focus: "AI Research" },
                { name: "Stanford University", location: "California, USA", focus: "Machine Learning" },
                { name: "IIT Bombay", location: "Mumbai, India", focus: "Signal Processing" },
                { name: "University of Oxford", location: "Oxford, UK", focus: "Computational Linguistics" }
              ].map((university, index) => (
                <div key={index} className="bg-card rounded-lg p-4 md:p-6 border hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-card-foreground text-sm md:text-base">{university.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{university.location}</p>
                  <p className="text-xs md:text-sm text-primary mt-2 font-medium">{university.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Companies */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-accent mb-6">Technology Companies</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: "NVIDIA", location: "Santa Clara, USA", focus: "GPU Computing" },
                { name: "Intel", location: "California, USA", focus: "Semiconductor Design" },
                { name: "Qualcomm", location: "San Diego, USA", focus: "Mobile Processing" },
                { name: "AMD", location: "California, USA", focus: "Parallel Computing" }
              ].map((company, index) => (
                <div key={index} className="bg-card rounded-lg p-4 md:p-6 border hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-card-foreground text-sm md:text-base">{company.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{company.location}</p>
                  <p className="text-xs md:text-sm text-accent mt-2 font-medium">{company.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Institutes */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">Research Institutes</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: "CERN", location: "Geneva, Switzerland", focus: "Data Processing" },
                { name: "Max Planck Institute", location: "Munich, Germany", focus: "Audio Science" },
                { name: "RIKEN", location: "Tokyo, Japan", focus: "Computational Science" },
                { name: "CSIR", location: "New Delhi, India", focus: "Scientific Research" }
              ].map((institute, index) => (
                <div key={index} className="bg-card rounded-lg p-4 md:p-6 border hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-card-foreground text-sm md:text-base">{institute.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{institute.location}</p>
                  <p className="text-xs md:text-sm text-primary mt-2 font-medium">{institute.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
            Real-World Applications
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover how our revolutionary AI and semiconductor technologies are transforming industries and solving complex challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-6 md:p-8 shadow-lg border border-primary/10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-primary">⚡</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-card-foreground">Audio Processing Breakthrough</h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
              A leading technology company achieved unprecedented performance improvements using our Vishwakarma platform for real-time audio analysis and processing.
            </p>
            <div className="bg-primary/5 rounded-lg p-4 mb-4">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100,000x</div>
              <div className="text-sm md:text-base font-semibold text-foreground">Faster Processing</div>
            </div>
            <div className="text-sm md:text-base text-primary font-semibold">
              Results: 99.9% accuracy improvement with sub-nanosecond latency
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-accent/5 to-transparent rounded-2xl p-6 md:p-8 shadow-lg border border-accent/10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-accent">🏢</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-card-foreground">Enterprise AI Implementation</h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
              Fortune 500 company successfully deployed our naada-based AI system for real-time decision making and automated process optimization.
            </p>
            <div className="bg-accent/5 rounded-lg p-4 mb-4">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">85%</div>
              <div className="text-sm md:text-base font-semibold text-foreground">Efficiency Increase</div>
            </div>
            <div className="text-sm md:text-base text-accent font-semibold">
              Results: Reduced operational costs by 40% while improving accuracy
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
