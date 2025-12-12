const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight">
            Our Team
          </h1>
          <p className="text-xl text-foreground/70 font-light max-w-4xl mx-auto leading-relaxed">
            Meet the visionaries behind Sudarshana ML, bridging ancient wisdom with cutting-edge technology through innovative leadership.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
            {[ 
              {
                img: "/lovable-uploads/0ff2ccce-4e79-4491-b210-b4045d1bdef6.png",
                name: "Prashanth Raghu",
                title: "Mukhya Nirvaahak, Founder, CEO",
                desc: "With 13+ years of experience, delivers enterprise-grade software solutions for startups. Prashanth is the chief ideator of Sudarshana doing research for the last 18 years and has driven the product to the current stage through complete thought process evaluations without any laboratories. With a strong foundation in mathematics and physics, Sudarshana was derived completely from the mathematical and physical principles using one's mind as the evaluation agent using repeated co-relations."
              },
              {
                img: "/lovable-uploads/a8334f95-2824-489d-9fbf-eb6f32b996f6.png",
                name: "Chirag S Rao",
                title: "Mukhya Nirvaahak, CTO",
                desc: "With 5+ years of leadership experience, Chirag brings a strong blend of expertise and people skills to drive organization's growth. Chirag has been instrumental in evaluation of each of these principles and then converting them into silicon through extensive thought processes on VLSI and HDLs."
              },
              {
                img: "/lovable-uploads/08bea42d-b5a9-47e8-ab21-3405dfeb0bcd.png",
                name: "Dhanush DB",
                title: "Mukhya Nirvaahak, COO",
                desc: "With 4 years of developmental experience of working and developing space technologies as well, Oversees operations with precision, ensuring seamless execution from research to product delivery. Drives organizational efficiency, uniting ancient principles with modern semiconductor innovation."
              },
              {
                img: "/lovable-uploads/70b63acd-9de5-4663-97cd-075971f8121d.png",
                name: "Sowrav",
                title: "Nirvaahak, VLSI Engineer",
                desc: "Designs and verifies RTL code for digital circuits, converting design specifications into synthesizable logic, running simulations and debugging issues, and optimizing the design to ensure efficient silicon implementation."
              },
              {
                img: "/lovable-uploads/shrisha.jpg",
                name: "Shrisha joshi",
                title: "Nirvaahak, sanskrit linguistic and AI/ML intern",
                desc: "Specializes in applying advanced sanskrit frameworks to semiconductor and AI architectures. Bridges ancient Vedic principles with modern computational models to drive innovation."
              },
              {
                img: "/lovable-uploads/b1ef14e1-4f7e-463d-b04b-b069d6566c20.png",
                name: "Rahulgouda Mariyappagoudar",
                title: "Nirvaahak, AI in simulation",
                desc: "Rahul develops the implementation of the mathematics for large scale purposes using tensorflow, before the models are moved to individual ASIC."
              },
              {
                img: "/lovable-uploads/omer.png",
                name: "Omer",
                title: "Nirvaahak, RTL Engineer",
                desc: "Develops and validates RTL code for digital circuits, translating specifications into synthesizable logic, performing simulation and debug, and optimizing for silicon success."
              }
            ].map((member, i) => (
              <div key={i} className="bg-secondary rounded-2xl p-8 shadow-lg border border-border/80 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 border-4 border-background shadow-md">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">{member.name}</h3>
                  <p className="text-yellow-400 font-medium text-sm">{member.title}</p>
                </div>
                <p className="text-foreground/70 font-light leading-relaxed text-sm">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;