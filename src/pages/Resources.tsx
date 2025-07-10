
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

      {/* Research Section */}
      <section className="max-w-7xl mx-auto mb-32">

        {/* Global Research Network */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Global Research Network
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
            Building bridges between ancient wisdom and modern technology through strategic partnerships with world-class institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Universities */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-primary text-center">Universities</h4>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-card rounded-lg p-4 md:p-6 border">
                <h5 className="text-sm md:text-base font-bold text-card-foreground">MIT CSAIL</h5>
                <p className="text-xs md:text-sm text-muted-foreground">Cambridge, USA</p>
                <p className="text-xs md:text-sm text-primary mt-2">AI Research</p>
              </div>
              <div className="bg-card rounded-lg p-4 md:p-6 border">
                <h5 className="text-sm md:text-base font-bold text-card-foreground">Stanford University</h5>
                <p className="text-xs md:text-sm text-muted-foreground">California, USA</p>
                <p className="text-xs md:text-sm text-primary mt-2">Machine Learning</p>
              </div>
              <div className="bg-card rounded-lg p-4 md:p-6 border">
                <h5 className="text-sm md:text-base font-bold text-card-foreground">IIT Bombay</h5>
                <p className="text-xs md:text-sm text-muted-foreground">Mumbai, India</p>
                <p className="text-xs md:text-sm text-primary mt-2">Signal Processing</p>
              </div>
              <div className="bg-card rounded-lg p-4 md:p-6 border">
                <h5 className="text-sm md:text-base font-bold text-card-foreground">University of Oxford</h5>
                <p className="text-xs md:text-sm text-muted-foreground">Oxford, UK</p>
                <p className="text-xs md:text-sm text-primary mt-2">Computational Linguistics</p>
              </div>
            </div>
          </div>

          {/* Technology Companies */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-primary text-center">Technology Companies</h4>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-card rounded-lg p-4 md:p-6 border">
                <h5 className="text-sm md:text-base font-bold text-card-foreground">NVIDIA</h5>
                <p className="text-xs md:text-sm text-muted-foreground">Santa Clara, USA</p>
                <p className="text-xs md:text-sm text-primary mt-2">GPU Computing</p>
              </div>
              <div className="bg-card rounded-lg p-4 md:p-6 border">
                <h5 className="text-sm md:text-base font-bold text-card-foreground">Intel</h5>
                <p className="text-xs md:text-sm text-muted-foreground">California, USA</p>
                <p className="text-xs md:text-sm text-primary mt-2">Semiconductor Design</p>
              </div>
              <div className="bg-card rounded-lg p-4 md:p-6 border">
                <h5 className="text-sm md:text-base font-bold text-card-foreground">Qualcomm</h5>
                <p className="text-xs md:text-sm text-muted-foreground">San Diego, USA</p>
                <p className="text-xs md:text-sm text-primary mt-2">Mobile Processing</p>
              </div>
              <div className="bg-card rounded-lg p-4 md:p-6 border">
                <h5 className="text-sm md:text-base font-bold text-card-foreground">AMD</h5>
                <p className="text-xs md:text-sm text-muted-foreground">California, USA</p>
                <p className="text-xs md:text-sm text-primary mt-2">Parallel Computing</p>
              </div>
            </div>
          </div>

          {/* Research Institutes */}
          <div>
            <h4 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-primary text-center">Research Institutes</h4>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-card rounded-lg p-4 md:p-6 border">
                <h5 className="text-sm md:text-base font-bold text-card-foreground">CERN</h5>
                <p className="text-xs md:text-sm text-muted-foreground">Geneva, Switzerland</p>
                <p className="text-xs md:text-sm text-primary mt-2">Data Processing</p>
              </div>
              <div className="bg-card rounded-lg p-4 md:p-6 border">
                <h5 className="text-sm md:text-base font-bold text-card-foreground">Max Planck Institute</h5>
                <p className="text-xs md:text-sm text-muted-foreground">Munich, Germany</p>
                <p className="text-xs md:text-sm text-primary mt-2">Audio Science</p>
              </div>
              <div className="bg-card rounded-lg p-4 md:p-6 border">
                <h5 className="text-sm md:text-base font-bold text-card-foreground">RIKEN</h5>
                <p className="text-xs md:text-sm text-muted-foreground">Tokyo, Japan</p>
                <p className="text-xs md:text-sm text-primary mt-2">Computational Science</p>
              </div>
              <div className="bg-card rounded-lg p-4 md:p-6 border">
                <h5 className="text-sm md:text-base font-bold text-card-foreground">CSIR</h5>
                <p className="text-xs md:text-sm text-muted-foreground">New Delhi, India</p>
                <p className="text-xs md:text-sm text-primary mt-2">Scientific Research</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">Case Studies</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
            Real-world applications of our revolutionary AI and semiconductor technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-card-foreground">Audio Processing Breakthrough</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              A leading tech company achieved 100,000x faster audio processing using our Vishwakarma platform.
            </p>
            <div className="text-sm md:text-base text-primary font-semibold">Results: 99.9% accuracy improvement</div>
          </div>
          
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-card-foreground">Enterprise AI Implementation</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Fortune 500 company deployed our naada-based AI for real-time decision making.
            </p>
            <div className="text-sm md:text-base text-primary font-semibold">Results: 85% efficiency increase</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
