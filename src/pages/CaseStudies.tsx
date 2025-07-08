const CaseStudies = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
          Case Studies
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
          Real-world applications of our revolutionary AI and semiconductor technologies.
        </p>
      </section>

      <section className="max-w-7xl mx-auto">
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

export default CaseStudies;