const Vishwakarma = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
            Vishwakarma – The Future of Intelligent Processing
          </h1>
          <p className="text-xl text-foreground/70 font-light max-w-4xl mx-auto leading-relaxed">
            Vishwakarma is a revolutionary class of processors designed to embed semantic understanding into AI inference. By integrating structured linguistic priors from Sanskrit grammar and phonetics with high-performance vector, graph, and quantum processing cores, Vishwakarma provides unmatched efficiency and accuracy in AI workloads.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-foreground mb-6">
              Key Features
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[ 
              { feature: "Native support for Sanskrit-based SLM and LLM models" },
              { feature: "Specialized hardware for sparse attention and rule-driven inference" },
              { feature: "Low-power, high-throughput architecture" },
              { feature: "Seamless integration of quantum algorithms for future-ready computing" }
            ].map((item, i) => (
              <div key={i} className="text-center bg-secondary rounded-2xl p-8 shadow-lg border border-border/80">
                <p className="text-lg font-medium text-foreground">{item.feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[ 
              { stat: ">100000x", label: "High-Performance Computing", desc: "Audio processing compared to traditional architectures" },
              { stat: "Military-grade", label: "Enterprise Security", desc: "Encryption for sensitive research data" },
              { stat: "<1ns", label: "Real-time Processing", desc: "For critical audio analysis applications" },
              { stat: "Cloud-native", label: "Scalable Architecture", desc: "Distributed computing across global networks" }
            ].map((metric, i) => (
              <div key={i} className="text-center bg-secondary rounded-2xl p-8 shadow-lg border border-border/80">
                <div className="text-4xl font-bold text-yellow-400 mb-3">{metric.stat}</div>
                <div className="text-lg font-medium text-foreground mb-2">{metric.label}</div>
                <div className="text-foreground/70 font-light text-sm">{metric.desc}</div>
              </div>
            ))}
          </div>

          {/* Revolutionary Architecture */}
          <div className="bg-secondary rounded-2xl p-12 shadow-lg border border-border/80">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-light mb-6 text-foreground">
                  Revolutionary Architecture
                </h2>
                <p className="text-foreground/70 font-light leading-relaxed mb-8">
                  The Vishwakarma platform represents a paradigm shift in semiconductor design, specifically optimized for the complex computations required by naada-based machine learning algorithms.
                </p>
                <ul className="space-y-3 text-foreground/70 font-light">
                  <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>Custom tensor processing units for audio data</li>
                  <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>Integrated frequency domain accelerators</li>
                  <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">◆</span>Vedic mathematics-inspired algorithms</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="text-9xl font-bold text-foreground/20 mb-4">वि</div>
                <div className="text-xl font-medium text-foreground/80">Architecture</div>
                <div className="text-lg text-foreground/60 font-light">Precision Engineered</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vishwakarma;