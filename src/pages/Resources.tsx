const Resources = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight">
            Resources & Research
          </h1>
          <p className="text-xl text-foreground/70 font-light max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive research initiatives, technology solutions, and real-world applications that bridge ancient wisdom with modern innovation.
          </p>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-foreground mb-6">
              Technology Solutions
            </h2>
            <p className="text-xl text-foreground/70 font-light max-w-3xl mx-auto">
              Revolutionary technology solutions that merge ancient Sanskrit principles with cutting-edge AI and semiconductor innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="bg-secondary rounded-2xl p-10 shadow-lg border border-border/80">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-2xl font-medium text-foreground">Enterprise AI Solutions</h3>
              </div>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                Scalable AI implementations for enterprise-grade applications using our proprietary Vishwakarma semiconductor architecture.
              </p>
              <ul className="space-y-3 text-foreground/70 font-light">
                <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>Custom AI model development and deployment</li>
                <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>Real-time processing with sub-nanosecond latency</li>
                <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>Military-grade security and compliance</li>
              </ul>
            </div>

            <div className="bg-secondary rounded-2xl p-10 shadow-lg border border-border/80">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-3xl">🎵</span>
                </div>
                <h3 className="text-2xl font-medium text-foreground">Audio Intelligence Platform</h3>
              </div>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                Advanced sound analysis and processing solutions based on ancient Sanskrit naada principles and modern AI.
              </p>
              <ul className="space-y-3 text-foreground/70 font-light">
                <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>Quantum-level audio understanding and analysis</li>
                <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>Harmonic resonance mapping and prediction</li>
                <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>100,000x faster processing than traditional methods</li>
              </ul>
            </div>
          </div>

          {/* Real-World Applications */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-foreground mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-foreground/70 font-light max-w-4xl mx-auto">
              Discover how our revolutionary AI and semiconductor technologies are transforming industries and solving complex challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-secondary rounded-2xl p-10 shadow-lg border border-border/80">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-medium text-foreground">Audio Processing Breakthrough</h3>
              </div>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                A leading technology company achieved unprecedented performance improvements using our Vishwakarma platform for real-time audio analysis.
              </p>
              <div className="bg-yellow-400/10 rounded-lg p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">100,000x</div>
                <div className="text-md font-semibold text-yellow-300">Faster Processing</div>
              </div>
              <p className="text-yellow-400 font-medium mt-4">
                Result: 99.9% accuracy improvement with sub-nanosecond latency
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-10 shadow-lg border border-border/80">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-2xl font-medium text-foreground">Enterprise AI Implementation</h3>
              </div>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                Fortune 500 company successfully deployed our naada-based AI system for real-time decision making and automated process optimization.
              </p>
              <div className="bg-yellow-400/10 rounded-lg p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">85%</div>
                <div className="text-md font-semibold text-yellow-300">Efficiency Increase</div>
              </div>
              <p className="text-yellow-400 font-medium mt-4">
                Result: Reduced operational costs by 40% while improving accuracy
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;