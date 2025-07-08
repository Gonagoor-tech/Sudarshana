const Vishwakarma = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Vishwakarma Platform
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
          Named after the divine architect, our semiconductor platform is engineered for the future of sound-based artificial intelligence
        </p>
      </section>

      {/* Performance Metrics */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </section>

      {/* Revolutionary Architecture */}
      <section className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Revolutionary Architecture
              </h2>
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
    </div>
  );
};

export default Vishwakarma;