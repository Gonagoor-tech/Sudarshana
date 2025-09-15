// File: Index.tsx
import { CheckCircle, ArrowRight, Play, Zap, Brain, Cpu, Waves } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="/sudarshana_heroSection.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.65 contrast(1.1)' }}
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
                <span className="text-white/90 text-sm font-medium">Leading the major revolutions of the current era</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6 tracking-tight leading-none">
                REVOLUTIONARY
                <br />
                <span className="font-extralight italic">SOUND-BASED</span>
                <br />
                <span className="font-bold">AI PLATFORM</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-12 font-light leading-relaxed">
                Revolutionary platform combining quantum computing with ancient sound principles to create the future of audio intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="/about"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all duration-300"
              >
                <span>ABOUT US</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300">
                <Play className="w-4 h-4" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-8 leading-tight">
                Built to Scale.
                <br />
                <span className="font-extralight italic">Designed</span> to Serve.
                <br />
                <span className="font-medium">Inspired</span> by Shastra.
              </h2>
              <p className="text-lg sm:text-xl text-foreground/80 font-light leading-relaxed">
                Our AI platforms don't just grow — they evolve in rhythm with the cosmos and the code.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block w-48 h-48 bg-foreground/5 rounded-full flex items-center justify-center">
                <div className="text-6xl">🧠</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-foreground mb-8 leading-tight">
              DEFINING THE FUTURE OF
              <br />
              <span className="font-bold">TECHNOLOGY</span>
            </h2>
            <h3 className="text-2xl sm:text-3xl font-light text-foreground/70 mb-6 italic">
              Progressive Innovation Foundation
            </h3>
            <p className="text-lg sm:text-xl text-foreground/70 font-light max-w-4xl mx-auto leading-relaxed">
              Where visionary thinking meets breakthrough execution - the most advanced technology platform of our era
            </p>
          </div>

          {/* Modern Card Grid with Dark Background */}
          <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: <Zap className="w-7 h-7" />,
                title: "Next-Gen Innovation",
                description: "Pioneering the most advanced AI technologies of our time, setting new industry standards and pushing the boundaries of what's possible.",
                features: [
                  { title: "Industry-First Algorithms", description: "Leading the pack with proprietary algorithms." },
                  { title: "Performance Metrics", description: "Exceeding all known performance benchmarks." },
                  { title: "Revolutionary Architecture", description: "A new paradigm in system design." }
                ],
                image: "/nextGen.jpg"
              },
              {
                icon: <Waves className="w-7 h-7" />,
                title: "Naada Principles",
                description: "Ancient Sanskrit sound science revolutionized with cutting-edge AI, creating unprecedented audio analysis capabilities never seen before.",
                features: [
                  { title: "Harmonic Resonance", description: "Mapping the very essence of sound." },
                  { title: "Quantum Frequency", description: "Unlocking new dimensions of audio data." },
                  { title: "Sacred Geometry", description: "Algorithms inspired by ancient wisdom." }
                ],
                image: "/Nadda.jpg"
              },
              {
                icon: <Cpu className="w-7 h-7" />,
                title: "Vishwakarma Platform",
                description: "The world's most sophisticated semiconductor architecture designed specifically for next-generation sound-based machine learning at unprecedented scale.",
                features: [
                  { title: "Neural Processing", description: "Specialized for ultra-fast machine learning." },
                  { title: "Real-Time Synthesis", description: "Generating audio at the speed of light." },
                  { title: "Zero-Latency Signal", description: "Instantaneous audio signal processing." }
                ],
                image: "/viswakarma.jpg"
              },
              {
                icon: <Brain className="w-7 h-7" />,
                title: "Progressive AI",
                description: "Machine learning models that represent the pinnacle of current AI evolution, understanding sound at levels previously thought impossible.",
                features: [
                  { title: "Quantum-Level Audio", description: "Deep understanding of audio nuances." },
                  { title: "Predictive Intelligence", description: "Anticipating sound patterns with AI." },
                  { title: "Self-Evolving Algorithms", description: "AI that learns and improves on its own." }
                ],
                image: "/progressiveAI.jpg"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-800/50 hover:bg-slate-800/80 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/50 flex flex-col lg:flex-row items-center gap-12"
              >
                <div className="w-full lg:w-1/2">
                  <img src={item.image} alt={item.title} className="rounded-2xl w-full h-auto object-cover shadow-lg" />
                </div>
                <div className="w-full lg:w-1/2 relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-5 mb-5">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700 group-hover:bg-slate-600 rounded-2xl shadow-sm transition-all duration-300">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {item.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 font-light leading-relaxed mb-8 text-lg">
                    {item.description}
                  </p>

                  {/* Feature List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {item.features.map((feature, i) => (
                      <div key={i} className="bg-slate-700/50 p-5 rounded-xl">
                        <h5 className="font-semibold text-white text-md mb-2">{feature.title}</h5>
                        <p className="text-slate-400 font-light text-sm">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-light text-foreground mb-8 leading-tight">
              Unprecedented
              <br />
              <span className="font-medium">Performance</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 font-light max-w-3xl mx-auto leading-relaxed">
              Setting new industry benchmarks with revolutionary computational capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { 
                stat: "100K+", 
                label: "Times Faster", 
                desc: "Processing speed compared to traditional systems" 
              },
              { 
                stat: "<1ns", 
                label: "Latency", 
                desc: "Real-time processing for critical applications" 
              },
              { 
                stat: "99.9%", 
                label: "Accuracy", 
                desc: "Precision in audio analysis and recognition" 
              },
              { 
                stat: "24/7", 
                label: "Availability", 
                desc: "Continuous operation with zero downtime" 
              }
            ].map((metric, i) => (
              <div key={i} className="text-center group">
                <div className="text-5xl sm:text-6xl font-light text-foreground mb-4 group-hover:text-foreground/80 transition-colors">
                  {metric.stat}
                </div>
                <div className="text-lg font-medium text-foreground mb-2">
                  {metric.label}
                </div>
                <div className="text-foreground/70 text-sm font-light leading-relaxed">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-8 leading-tight">
            Ready to
            <br />
            <span className="font-medium">Transform</span>
            <br />
            <span className="font-extralight italic">Audio Intelligence?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Join the revolution in sound-based AI and experience the future of audio technology today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:border-white/50 transition-colors">
              <span>Contact Sales</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;