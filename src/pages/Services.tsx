const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight">
            Our Services
          </h1>
          <p className="text-xl text-foreground/70 font-light max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI and semiconductor solutions bridging ancient wisdom with modern technology.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
            {[ 
              {
                title: "AI Platform Development",
                desc: "Custom AI platforms built on our revolutionary Vishwakarma semiconductor architecture."
              },
              {
                title: "Sound Analysis Solutions",
                desc: "Advanced audio processing using ancient Sanskrit naada principles and modern AI."
              },
              {
                title: "Semiconductor Design",
                desc: "Next-generation chip architecture optimized for AI and machine learning workloads."
              }
            ].map((service, i) => (
              <div key={i} className="bg-secondary rounded-2xl p-10 shadow-lg border border-border/80 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-medium mb-4 text-foreground">{service.title}</h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
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
                <h3 className="text-4xl font-light mb-6 text-foreground">
                  Revolutionary Architecture
                </h3>
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

      {/* Our Technology Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-foreground mb-6">
              Innovative Architecture Meets Semantic Intelligence
            </h2>
            <p className="text-xl text-foreground/70 font-light max-w-4xl mx-auto">
              Our technology combines linguistic knowledge, quantum principles, and hardware acceleration to build smarter, more efficient AI processors. Leveraging decades of research in computational linguistics, quantum computing, and semiconductor design, our solutions solve key challenges in modern AI:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { feature: "Semantic-driven vector and graph processing units" },
              { feature: "Zero-hallucination models powered by Sanskrit grammar" },
              { feature: "Efficient Rule-based SLM integrated at the chip level" },
              { feature: "Quantum-enhanced processing for robust computations" },
              { feature: "Drastically reduced data and energy consumption" },
              { feature: "Scalable solutions adaptable to edge devices and datacenters" }
            ].map((item, i) => (
              <div key={i} className="bg-secondary rounded-2xl p-8 shadow-lg border border-border/80">
                <p className="text-lg font-medium text-foreground">{item.feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;