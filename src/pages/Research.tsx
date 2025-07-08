const Research = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
          Moving Intelligence to Machines
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          According to the Sri Rudram, a vedic hymn, intelligence has always been manifesting in different forms. 
          We at Sudarshana believe that the product just moves into a computing sphere.
        </p>
      </section>

      {/* Research Areas */}
      <section className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Naada Jnana */}
          <div className="bg-card rounded-lg p-8 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary">🎵</div>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Naada Jnana</h3>
              <h4 className="text-lg font-semibold text-primary mb-4">Knowledge on Sound</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Research on sound and its feature management using Python and C++ libraries. Understanding the fundamental 
              principles of sound waves and their computational representation.
            </p>
          </div>

          {/* Prajwala Jnana */}
          <div className="bg-card rounded-lg p-8 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary">🌈</div>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Prajwala Jnana</h3>
              <h4 className="text-lg font-semibold text-primary mb-4">Research on Colors</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Deep research on colors and color schemes for representation conversions. Exploring the relationship 
              between color theory and machine learning applications.
            </p>
          </div>

          {/* Chitra Jnana */}
          <div className="bg-card rounded-lg p-8 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary">👁️</div>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Chitra Jnana</h3>
              <h4 className="text-lg font-semibold text-primary mb-4">Understanding Visual World</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Understanding the world as a set of moving images or pictures. Developing computational models that can 
              interpret and process visual information like human perception.
            </p>
          </div>
        </div>
      </section>

      {/* Global Research Network */}
      <section className="max-w-7xl mx-auto mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Global Research Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Building bridges between ancient wisdom and modern technology through strategic partnerships with world-class institutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Universities */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary text-center">Universities</h3>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h4 className="font-bold text-card-foreground">MIT CSAIL</h4>
                <p className="text-sm text-muted-foreground">Cambridge, USA</p>
                <p className="text-sm text-primary mt-2">AI Research</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h4 className="font-bold text-card-foreground">Stanford University</h4>
                <p className="text-sm text-muted-foreground">California, USA</p>
                <p className="text-sm text-primary mt-2">Machine Learning</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h4 className="font-bold text-card-foreground">IIT Bombay</h4>
                <p className="text-sm text-muted-foreground">Mumbai, India</p>
                <p className="text-sm text-primary mt-2">Signal Processing</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h4 className="font-bold text-card-foreground">University of Oxford</h4>
                <p className="text-sm text-muted-foreground">Oxford, UK</p>
                <p className="text-sm text-primary mt-2">Computational Linguistics</p>
              </div>
            </div>
          </div>

          {/* Technology Companies */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary text-center">Technology Companies</h3>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h4 className="font-bold text-card-foreground">NVIDIA</h4>
                <p className="text-sm text-muted-foreground">Santa Clara, USA</p>
                <p className="text-sm text-primary mt-2">GPU Computing</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h4 className="font-bold text-card-foreground">Intel</h4>
                <p className="text-sm text-muted-foreground">California, USA</p>
                <p className="text-sm text-primary mt-2">Semiconductor Design</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h4 className="font-bold text-card-foreground">Qualcomm</h4>
                <p className="text-sm text-muted-foreground">San Diego, USA</p>
                <p className="text-sm text-primary mt-2">Mobile Processing</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h4 className="font-bold text-card-foreground">AMD</h4>
                <p className="text-sm text-muted-foreground">California, USA</p>
                <p className="text-sm text-primary mt-2">Parallel Computing</p>
              </div>
            </div>
          </div>

          {/* Research Institutes */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary text-center">Research Institutes</h3>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h4 className="font-bold text-card-foreground">CERN</h4>
                <p className="text-sm text-muted-foreground">Geneva, Switzerland</p>
                <p className="text-sm text-primary mt-2">Data Processing</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h4 className="font-bold text-card-foreground">Max Planck Institute</h4>
                <p className="text-sm text-muted-foreground">Munich, Germany</p>
                <p className="text-sm text-primary mt-2">Audio Science</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h4 className="font-bold text-card-foreground">RIKEN</h4>
                <p className="text-sm text-muted-foreground">Tokyo, Japan</p>
                <p className="text-sm text-primary mt-2">Computational Science</p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h4 className="font-bold text-card-foreground">CSIR</h4>
                <p className="text-sm text-muted-foreground">New Delhi, India</p>
                <p className="text-sm text-primary mt-2">Scientific Research</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;