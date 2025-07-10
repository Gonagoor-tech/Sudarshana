// File: Index.jsx
import { CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop"
            alt="Advanced technology background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <p className="text-lg text-muted-foreground mb-4 animate-fade-in">
              Leading the major revolutions of the current era
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-foreground leading-tight animate-fade-in tracking-tight">
              REVOLUTIONARY
              <br />
              <span className="text-primary">SOUND-BASED AI</span>
              <br />
              PLATFORM
            </h1>

            <div className="animate-fade-in">
              <a
                href="/about"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-md"
              >
                ABOUT US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built to Scale. Designed to Serve. Inspired by Shastra.
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
<<<<<<< HEAD
                Our AI platforms don’t just grow — they evolve in rhythm with the cosmos and the code.
=======
                A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to ever wondered the east side to a deluxe apartment.
>>>>>>> 506d4e349855cee5ec6920ef3e834dbc1266f60a
              </p>
            </div>

            <div className="text-center lg:text-right">
              {/* Optional Illustration/Graphic */}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight">
            DEFINING THE FUTURE OF TECHNOLOGY
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
            Progressive Innovation Foundation
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Where visionary thinking meets breakthrough execution - the most advanced technology platform of our era
          </p>
        </div>

        {/* Innovation Grid with Redesigned Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Next-Gen Innovation",
              description:
                "Pioneering the most advanced AI technologies of our time, setting new industry standards and pushing the boundaries of what's possible.",
              bullets: [
<<<<<<< HEAD
                { icon: "🌀", label: "Industry-first algorithms" },
                { icon: "🌀", label: "Breakthrough performance metrics" },
                { icon: "🌀", label: "Revolutionary architecture design" },
=======
                { label: "Industry-first algorithms" },
                { label: "Breakthrough performance metrics" },
                { label: "Revolutionary architecture design" },
>>>>>>> 506d4e349855cee5ec6920ef3e834dbc1266f60a
              ],
            },
            {
              title: "Naada Principles",
              description:
                "Ancient Sanskrit sound science revolutionized with cutting-edge AI, creating unprecedented audio analysis capabilities never seen before.",
              bullets: [
<<<<<<< HEAD
                { icon: "🌀", label: "Harmonic resonance mapping" },
                { icon: "🌀", label: "Quantum frequency recognition" },
                { icon: "🌀", label: "Sacred geometry algorithms" },
=======
                { label: "Harmonic resonance mapping" },
                { label: "Quantum frequency recognition" },
                { label: "Sacred geometry algorithms" },
>>>>>>> 506d4e349855cee5ec6920ef3e834dbc1266f60a
              ],
            },
            {
              title: "Vishwakarma Platform",
              description:
                "The world's most sophisticated semiconductor architecture designed specifically for next-generation sound-based machine learning at unprecedented scale.",
              bullets: [
<<<<<<< HEAD
                { icon: "🌀", label: "Ultra-specialized neural processing" },
                { icon: "🌀", label: "Real-time synthesis at light speed" },
                { icon: "🌀", label: "Zero-latency signal processing" },
=======
                { label: "Ultra-specialized neural processing" },
                { label: "Real-time synthesis at light speed" },
                { label: "Zero-latency signal processing" },
>>>>>>> 506d4e349855cee5ec6920ef3e834dbc1266f60a
              ],
            },
            {
              title: "Progressive AI",
              description:
                "Machine learning models that represent the pinnacle of current AI evolution, understanding sound at levels previously thought impossible.",
              bullets: [
<<<<<<< HEAD
                { icon: "🌀", label: "Quantum-level audio understanding" },
                { icon: "🌀", label: "Predictive sound intelligence" },
                { icon: "🌀", label: "Self-evolving algorithms" },
=======
                { label: "Quantum-level audio understanding" },
                { label: "Predictive sound intelligence" },
                { label: "Self-evolving algorithms" },
>>>>>>> 506d4e349855cee5ec6920ef3e834dbc1266f60a
              ],
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white/5 backdrop-blur-lg border border-border shadow-2xl p-8 transition-transform hover:-translate-y-2 hover:shadow-primary/30 hover:ring-1 hover:ring-primary/40"
            >
              <h4 className="text-2xl font-bold text-primary mb-4 tracking-tight leading-snug">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-medium">
                {item.description}
              </p>
              <ul className="space-y-3">
                {item.bullets.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span className="leading-snug font-medium">{point.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Unprecedented Performance</h2>
            <p className="text-xl text-muted-foreground">
              Setting new industry benchmarks with revolutionary computational capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "100K+", label: "Times Faster", desc: "Processing speed compared to traditional systems" },
              { stat: "<1ns", label: "Latency", desc: "Real-time processing for critical applications" },
              { stat: "99.9%", label: "Accuracy", desc: "Precision in audio analysis and recognition" },
              { stat: "24/7", label: "Availability", desc: "Continuous operation with zero downtime" },
            ].map((metric, i) => (
              <div key={i} className="text-center bg-card rounded-xl p-8 shadow-lg border hover:scale-105 transition-transform">
                <div className="text-5xl font-bold text-primary mb-2 animate-fade-in">{metric.stat}</div>
                <div className="text-lg font-semibold text-card-foreground mb-2">{metric.label}</div>
                <div className="text-muted-foreground text-sm">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
