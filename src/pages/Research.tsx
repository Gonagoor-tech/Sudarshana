const Research = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight">
            Moving Intelligence to Machines
          </h1>
          <p className="text-xl text-foreground/70 font-light max-w-4xl mx-auto leading-relaxed">
            According to the Sri Rudram, a vedic hymn, intelligence has always been manifesting in different forms. 
            We at Sudarshana believe that the product just moves into a computing sphere.
          </p>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-24">
            {[ 
              {
                icon: "🎵",
                title: "Naada Jnana",
                subtitle: "Knowledge on Sound",
                desc: "Research on sound and its feature management using Python and C++ libraries. Understanding the fundamental principles of sound waves and their computational representation."
              },
              {
                icon: "🌈",
                title: "Prajwala Jnana",
                subtitle: "Research on Colors",
                desc: "Deep research on colors and color schemes for representation conversions. Exploring the relationship between color theory and machine learning applications."
              },
              {
                icon: "👁️",
                title: "Chitra Jnana",
                subtitle: "Understanding Visual World",
                desc: "Understanding the world as a set of moving images or pictures. Developing computational models that can interpret and process visual information like human perception."
              }
            ].map((area, i) => (
              <div key={i} className="bg-secondary rounded-2xl p-10 shadow-lg border border-border/80 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl">{area.icon}</div>
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-2">{area.title}</h3>
                <h4 className="text-md font-semibold text-yellow-400 mb-4">{area.subtitle}</h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Global Research Network */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-foreground mb-6">
              Global Research Network
            </h2>
            <p className="text-xl text-foreground/70 font-light max-w-4xl mx-auto">
              Building bridges between ancient wisdom and modern technology through strategic partnerships with world-class institutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-medium mb-8 text-center text-foreground/80">Universities</h3>
              <div className="space-y-6">
                {[ 
                  { name: "MIT CSAIL", location: "Cambridge, USA", field: "AI Research" },
                  { name: "Stanford University", location: "California, USA", field: "Machine Learning" },
                  { name: "IIT Bombay", location: "Mumbai, India", field: "Signal Processing" },
                  { name: "University of Oxford", location: "Oxford, UK", field: "Computational Linguistics" }
                ].map((inst, i) => (
                  <div key={i} className="bg-secondary rounded-lg p-6 border border-border/80">
                    <h4 className="font-semibold text-foreground">{inst.name}</h4>
                    <p className="text-sm text-foreground/60">{inst.location}</p>
                    <p className="text-sm text-yellow-400 mt-2 font-medium">{inst.field}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-8 text-center text-foreground/80">Technology Companies</h3>
              <div className="space-y-6">
                {[ 
                  { name: "NVIDIA", location: "Santa Clara, USA", field: "GPU Computing" },
                  { name: "Intel", location: "California, USA", field: "Semiconductor Design" },
                  { name: "Qualcomm", location: "San Diego, USA", field: "Mobile Processing" },
                  { name: "AMD", location: "California, USA", field: "Parallel Computing" }
                ].map((inst, i) => (
                  <div key={i} className="bg-secondary rounded-lg p-6 border border-border/80">
                    <h4 className="font-semibold text-foreground">{inst.name}</h4>
                    <p className="text-sm text-foreground/60">{inst.location}</p>
                    <p className="text-sm text-yellow-400 mt-2 font-medium">{inst.field}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-8 text-center text-foreground/80">Research Institutes</h3>
              <div className="space-y-6">
                {[ 
                  { name: "CERN", location: "Geneva, Switzerland", field: "Data Processing" },
                  { name: "Max Planck Institute", location: "Munich, Germany", field: "Audio Science" },
                  { name: "RIKEN", location: "Tokyo, Japan", field: "Computational Science" },
                  { name: "CSIR", location: "New Delhi, India", field: "Scientific Research" }
                ].map((inst, i) => (
                  <div key={i} className="bg-secondary rounded-lg p-6 border border-border/80">
                    <h4 className="font-semibold text-foreground">{inst.name}</h4>
                    <p className="text-sm text-foreground/60">{inst.location}</p>
                    <p className="text-sm text-yellow-400 mt-2 font-medium">{inst.field}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;