
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Palette, Camera, Cog } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      icon: Waves,
      title: "Naada Jnana",
      subtitle: "Knowledge on Sound",
      description: "Research on sound and its feature management using Python and C++ libraries. Understanding the fundamental principles of sound waves and their computational representation.",
      color: "from-blue-500 to-cyan-500",
      status: "Active Research"
    },
    {
      icon: Palette,
      title: "Prajwala Jnana",
      subtitle: "Research on Colors",
      description: "Deep research on colors and color schemes for representation conversions. Exploring the relationship between color theory and machine learning applications.",
      color: "from-purple-500 to-pink-500",
      status: "Active Research"
    },
    {
      icon: Camera,
      title: "Chitra Jnana",
      subtitle: "Understanding Visual World",
      description: "Understanding the world as a set of moving images or pictures. Developing computational models that can interpret and process visual information like human perception.",
      color: "from-green-500 to-emerald-500",
      status: "Active Research"
    }
  ];

  return (
    <section id="research" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
            Research & Development
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Research
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Underway
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring ancient wisdom through modern computational methods. Our research integrates 
            knowledge forms from across the globe with the basis from concepts of Sanathana Dharma.
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <Card 
              key={area.title}
              className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group hover:transform hover:scale-105 p-8"
            >
              <div className="space-y-6">
                {/* Status Badge */}
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                  {area.status}
                </Badge>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${area.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-300">
                    {area.subtitle}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Hover effect line */}
                <div className={`h-1 bg-gradient-to-r ${area.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Model Development Section */}
        <div className="bg-gradient-to-r from-slate-800/30 to-orange-900/30 rounded-3xl p-12 backdrop-blur-lg border border-orange-500/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
              <Cog className="w-8 h-8 mr-3 text-orange-400" />
              Model Development
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Integration of layers and models within existing frameworks, creating seamless compatibility 
              with modern machine learning ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/30 rounded-2xl p-6 border border-slate-700/30">
              <h4 className="text-xl font-semibold text-white mb-4">Framework Integration</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  TensorFlow Layer Implementation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Scalable Architecture Design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Cross-Platform Compatibility
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/30 rounded-2xl p-6 border border-slate-700/30">
              <h4 className="text-xl font-semibold text-white mb-4">Knowledge Systems</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Sanskrit to Python Translation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Chandas Pattern Recognition
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Modern System Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
