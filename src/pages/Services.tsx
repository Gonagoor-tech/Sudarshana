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

      <section className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">AI Platform Development</h3>
            <p className="text-muted-foreground">
              Custom AI platforms built on our revolutionary Vishwakarma semiconductor architecture.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Sound Analysis Solutions</h3>
            <p className="text-muted-foreground">
              Advanced audio processing using ancient Sanskrit naada principles and modern AI.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Semiconductor Design</h3>
            <p className="text-muted-foreground">
              Next-generation chip architecture optimized for AI and machine learning workloads.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;