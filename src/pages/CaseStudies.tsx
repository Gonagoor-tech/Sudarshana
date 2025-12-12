const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight">
            Case Studies
          </h1>
          <p className="text-xl text-foreground/70 font-light max-w-4xl mx-auto leading-relaxed">
            Real-world applications of our revolutionary AI and semiconductor technologies.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-secondary rounded-2xl p-10 shadow-lg border border-border/80 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-medium mb-4 text-foreground">Audio Processing Breakthrough</h3>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                A leading tech company achieved 100,000x faster audio processing using our Vishwakarma platform.
              </p>
              <div className="bg-yellow-400/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">99.9%</div>
                <div className="text-sm font-medium text-yellow-300">Accuracy Improvement</div>
              </div>
            </div>
            
            <div className="bg-secondary rounded-2xl p-10 shadow-lg border border-border/80 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-medium mb-4 text-foreground">Enterprise AI Implementation</h3>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                Fortune 500 company deployed our naada-based AI for real-time decision making.
              </p>
              <div className="bg-yellow-400/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">85%</div>
                <div className="text-sm font-medium text-yellow-300">Efficiency Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;