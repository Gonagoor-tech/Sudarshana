const Solutions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight">
            Solutions
          </h1>
          <p className="text-xl text-foreground/70 font-light max-w-4xl mx-auto leading-relaxed">
            Revolutionary technology solutions that merge ancient wisdom with cutting-edge innovation.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-secondary rounded-2xl p-10 shadow-lg border border-border/80">
              <h3 className="text-2xl font-medium mb-4 text-foreground">Enterprise AI Solutions</h3>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                Scalable AI implementations for enterprise-grade applications using our proprietary technology stack.
              </p>
              <ul className="space-y-3 text-foreground/70 font-light">
                <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>Custom AI model development</li>
                <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>Real-time processing capabilities</li>
                <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>Enterprise security compliance</li>
              </ul>
            </div>
            
            <div className="bg-secondary rounded-2xl p-10 shadow-lg border border-border/80">
              <h3 className="text-2xl font-medium mb-4 text-foreground">Audio Intelligence Platform</h3>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                Advanced sound analysis and processing solutions based on Sanskrit naada principles.
              </p>
              <ul className="space-y-3 text-foreground/70 font-light">
                <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>Quantum-level audio understanding</li>
                <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>Harmonic resonance mapping</li>
                <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>Predictive sound intelligence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;