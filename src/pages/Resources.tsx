
const Resources = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
          Resources
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
          Explore our revolutionary technology solutions, research initiatives, and real-world applications.
        </p>
      </section>

      {/* Solutions Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Revolutionary technology solutions that merge ancient wisdom with cutting-edge innovation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Enterprise AI Solutions</h3>
            <p className="text-muted-foreground mb-4">
              Scalable AI implementations for enterprise-grade applications using our proprietary technology stack.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Custom AI model development</li>
              <li>• Real-time processing capabilities</li>
              <li>• Enterprise security compliance</li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Audio Intelligence Platform</h3>
            <p className="text-muted-foreground mb-4">
              Advanced sound analysis and processing solutions based on Sanskrit naada principles.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Quantum-level audio understanding</li>
              <li>• Harmonic resonance mapping</li>
              <li>• Predictive sound intelligence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vishwakarma Platform Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Vishwakarma Platform</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Named after the divine architect, our semiconductor platform is engineered for the future of sound-based artificial intelligence
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-card rounded-lg p-8 shadow-lg border">
            <div className="text-4xl font-bold text-primary mb-2">&gt;100000x</div>
            <div className="text-lg font-semibold text-card-foreground mb-2">High-Performance Computing</div>
            <div className="text-muted-foreground">Audio processing compared to traditional architectures</div>
          </div>

          <div className="text-center bg-card rounded-lg p-8 shadow-lg border">
            <div className="text-4xl font-bold text-primary mb-2">Military-grade</div>
            <div className="text-lg font-semibold text-card-foreground mb-2">Enterprise Security</div>
            <div className="text-muted-foreground">Encryption for sensitive research data</div>
          </div>

          <div className="text-center bg-card rounded-lg p-8 shadow-lg border">
            <div className="text-4xl font-bold text-primary mb-2">&lt;1ns</div>
            <div className="text-lg font-semibold text-card-foreground mb-2">Real-time Processing</div>
            <div className="text-muted-foreground">For critical audio analysis applications</div>
          </div>

          <div className="text-center bg-card rounded-lg p-8 shadow-lg border">
            <div className="text-4xl font-bold text-primary mb-2">Cloud-native</div>
            <div className="text-lg font-semibold text-card-foreground mb-2">Scalable Architecture</div>
            <div className="text-muted-foreground">Distributed computing across global networks</div>
          </div>
        </div>

        {/* Revolutionary Architecture */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Revolutionary Architecture
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The Vishwakarma platform represents a paradigm shift in semiconductor design, specifically optimized for the complex computations required by naada-based machine learning algorithms.
              </p>
              <ul className="space-y-4 text-muted-foreground">
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
              <div className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">वि</div>
              <div className="text-xl font-semibold text-foreground mb-2">Architecture</div>
              <div className="text-lg text-muted-foreground">Precision Engineered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Moving Intelligence to Machines</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            According to the Sri Rudram, a vedic hymn, intelligence has always been manifesting in different forms. 
            We at Sudarshana believe that the product just moves into a computing sphere.
          </p>
        </div>

        {/* Research Areas */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Naada Jnana */}
          <div className="bg-card rounded-lg p-8 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary">🎵</div>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Naada Jnana</h3>
              <h4 className="text-lg font-semibold text-primary mb-4">Knowledge on Sound</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Research on sound and its feature management using Python and C++ libraries. Understanding the fundamental 
              principles of sound waves and their computational representation.
            </p>
          </div>

          {/* Prajwala Jnana */}
          <div className="bg-card rounded-lg p-8 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary">🌈</div>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Prajwala Jnana</h3>
              <h4 className="text-lg font-semibold text-primary mb-4">Research on Colors</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Deep research on colors and color schemes for representation conversions. Exploring the relationship 
              between color theory and machine learning applications.
            </p>
          </div>

          {/* Chitra Jnana */}
          <div className="bg-card rounded-lg p-8 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary">👁️</div>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Chitra Jnana</h3>
              <h4 className="text-lg font-semibold text-primary mb-4">Understanding Visual World</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Understanding the world as a set of moving images or pictures. Developing computational models that can 
              interpret and process visual information like human perception.
            </p>
          </div>
        </div>

        {/* Global Research Network */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Global Research Network
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Building bridges between ancient wisdom and modern technology through strategic partnerships with world-class institutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Universities */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-primary text-center">Universities</h4>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h5 className="font-bold text-card-foreground">MIT CSAIL</h5>
                <p className="text-sm text-muted-foreground">Cambridge, USA</p>
                <p className="text-sm text-primary mt-2">AI Research</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h5 className="font-bold text-card-foreground">Stanford University</h5>
                <p className="text-sm text-muted-foreground">California, USA</p>
                <p className="text-sm text-primary mt-2">Machine Learning</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h5 className="font-bold text-card-foreground">IIT Bombay</h5>
                <p className="text-sm text-muted-foreground">Mumbai, India</p>
                <p className="text-sm text-primary mt-2">Signal Processing</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h5 className="font-bold text-card-foreground">University of Oxford</h5>
                <p className="text-sm text-muted-foreground">Oxford, UK</p>
                <p className="text-sm text-primary mt-2">Computational Linguistics</p>
              </div>
            </div>
          </div>

          {/* Technology Companies */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-primary text-center">Technology Companies</h4>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h5 className="font-bold text-card-foreground">NVIDIA</h5>
                <p className="text-sm text-muted-foreground">Santa Clara, USA</p>
                <p className="text-sm text-primary mt-2">GPU Computing</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h5 className="font-bold text-card-foreground">Intel</h5>
                <p className="text-sm text-muted-foreground">California, USA</p>
                <p className="text-sm text-primary mt-2">Semiconductor Design</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h5 className="font-bold text-card-foreground">Qualcomm</h5>
                <p className="text-sm text-muted-foreground">San Diego, USA</p>
                <p className="text-sm text-primary mt-2">Mobile Processing</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h5 className="font-bold text-card-foreground">AMD</h5>
                <p className="text-sm text-muted-foreground">California, USA</p>
                <p className="text-sm text-primary mt-2">Parallel Computing</p>
              </div>
            </div>
          </div>

          {/* Research Institutes */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-primary text-center">Research Institutes</h4>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h5 className="font-bold text-card-foreground">CERN</h5>
                <p className="text-sm text-muted-foreground">Geneva, Switzerland</p>
                <p className="text-sm text-primary mt-2">Data Processing</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h5 className="font-bold text-card-foreground">Max Planck Institute</h5>
                <p className="text-sm text-muted-foreground">Munich, Germany</p>
                <p className="text-sm text-primary mt-2">Audio Science</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h5 className="font-bold text-card-foreground">RIKEN</h5>
                <p className="text-sm text-muted-foreground">Tokyo, Japan</p>
                <p className="text-sm text-primary mt-2">Computational Science</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h5 className="font-bold text-card-foreground">CSIR</h5>
                <p className="text-sm text-muted-foreground">New Delhi, India</p>
                <p className="text-sm text-primary mt-2">Scientific Research</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Real-world applications of our revolutionary AI and semiconductor technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Audio Processing Breakthrough</h3>
            <p className="text-muted-foreground mb-4">
              A leading tech company achieved 100,000x faster audio processing using our Vishwakarma platform.
            </p>
            <div className="text-primary font-semibold">Results: 99.9% accuracy improvement</div>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Enterprise AI Implementation</h3>
            <p className="text-muted-foreground mb-4">
              Fortune 500 company deployed our naada-based AI for real-time decision making.
            </p>
            <div className="text-primary font-semibold">Results: 85% efficiency increase</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
