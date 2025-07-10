const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
          Our Team
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
          Meet the visionaries behind Sudarshana ML, bridging ancient wisdom with cutting-edge technology through innovative leadership.
        </p>
      </section>

      {/* Team Members */}
      <section className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Prashanth Raghu */}
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/lovable-uploads/0ff2ccce-4e79-4491-b210-b4045d1bdef6.png" 
                  alt="Prashanth Raghu" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Prashanth Raghu</h3>
              <p className="text-primary font-semibold">Mukhya Nirvaahak, Founder, CEO</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              With 13+ years of experience, delivers enterprise-grade software solutions for startups. Prashanth is the chief ideator 
              of Sudarshana doing research for the last 18 years and has driven the product to the current stage through complete thought 
              process evaluations without any laboratories. With a strong foundation in mathematics and physics, Sudarshana was derived 
              completely from the mathematical and physical principles using one's mind as the evaluation agent using repeated co-relations.
            </p>
          </div>

          {/* Chirag S Rao */}
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/lovable-uploads/a8334f95-2824-489d-9fbf-eb6f32b996f6.png" 
                  alt="Chirag S Rao" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Chirag S Rao</h3>
              <p className="text-primary font-semibold">Mukhya Nirvaahak, CTO</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              With 5+ years of leadership experience, Chirag brings a strong blend of expertise and people skills to drive organization's 
              growth. Chirag has been instrumental in evaluation of each of these principles and then converting them into silicon through 
              extensive thought processes on VLSI and HDLs.
            </p>
          </div>

          {/* Dhanush DB */}
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/lovable-uploads/08bea42d-b5a9-47e8-ab21-3405dfeb0bcd.png" 
                  alt="Dhanush DB" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Dhanush DB</h3>
              <p className="text-primary font-semibold">Mukhya Nirvaahak, COO</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              With 4 years of developmental experience of working and developing space technologies as well, Oversees operations with 
              precision, ensuring seamless execution from research to product delivery. Drives organizational efficiency, uniting ancient 
              principles with modern semiconductor innovation.
            </p>
          </div>

          {/* Sowrav */}
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/lovable-uploads/70b63acd-9de5-4663-97cd-075971f8121d.png" 
                  alt="Sowrav" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Sowrav</h3>
              <p className="text-primary font-semibold">Nirvaahak, Head of Systems</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Sowrav designs and verifies integrated circuits at the transistor level for high-performance electronic systems. Sowrav 
              designs these systems and makes them suitable for silicon after thorough evaluation of all aspects from mathematics to silicon.
            </p>
          </div>

          {/* Anath M Athreya */}
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/lovable-uploads/aad2f271-cf22-47d4-80da-ff584f99586c.png" 
                  alt="Anath M Athreya" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Anath M Athreya</h3>
              <p className="text-primary font-semibold">Nirvaahak, Mathematics Expert</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Specializes in applying advanced mathematical frameworks to semiconductor and AI architectures. Bridges ancient Vedic 
              principles with modern computational models to drive innovation.
            </p>
          </div>

          {/* Rahulgouda Mariyappagoudar */}
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/lovable-uploads/b1ef14e1-4f7e-463d-b04b-b069d6566c20.png" 
                  alt="Rahulgouda Mariyappagoudar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Rahulgouda Mariyappagoudar</h3>
              <p className="text-primary font-semibold">Nirvaahak, AI in simulation</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Rahul develops the implementation of the mathematics for large scale purposes using tensorflow, before the models are moved 
              to individual ASIC.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;