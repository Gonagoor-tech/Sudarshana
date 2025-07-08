const Solutions = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
          Solutions
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
          Revolutionary technology solutions that merge ancient wisdom with cutting-edge innovation.
        </p>
      </section>

      <section className="max-w-7xl mx-auto">
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
    </div>
  );
};

export default Solutions;