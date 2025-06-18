
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Expert Team Members", value: "50+" },
    { icon: Award, label: "AI Projects Completed", value: "200+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: TrendingUp, label: "Client Success Rate", value: "98%" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      specialization: "Deep Learning & Neural Networks"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      specialization: "AI Infrastructure & Scalability"
    },
    {
      name: "Dr. Aisha Patel",
      role: "Research Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      specialization: "Machine Learning Research"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
            About Sudarshana AI
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Pioneering the Future
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              of Artificial Intelligence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded by visionaries and powered by innovation, we're on a mission to democratize 
            AI technology and make it accessible to businesses of all sizes.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Journey</h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Since our inception in 2019, Sudarshana AI has been at the forefront of artificial 
                intelligence innovation. What started as a small team of passionate researchers has 
                grown into a global leader in AI solutions.
              </p>
              <p>
                We believe that AI should augment human intelligence, not replace it. Our solutions 
                are designed to empower teams, enhance creativity, and unlock new possibilities for 
                businesses across industries.
              </p>
              <p>
                Today, we're proud to serve clients ranging from innovative startups to Fortune 500 
                companies, helping them harness the transformative power of artificial intelligence.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border-purple-500/20 p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-white">2019</div>
                  <div className="text-purple-300 text-sm">Founded</div>
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-lg border-blue-500/20 p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-white">50M+</div>
                  <div className="text-blue-300 text-sm">Data Points</div>
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-lg border-green-500/20 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300 -mt-4">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-green-300 text-sm">Support</div>
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-red-900/50 to-pink-900/50 backdrop-blur-lg border-red-500/20 p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-white">ISO</div>
                  <div className="text-red-300 text-sm">Certified</div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 p-8 text-center group hover:scale-105"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto p-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-full h-full text-white" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Meet Our Leadership</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our team combines decades of experience in AI research, engineering, and business strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card 
              key={member.name}
              className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 p-8 text-center group hover:scale-105"
            >
              <div className="space-y-4">
                <div className="relative w-24 h-24 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-purple-500/30 group-hover:border-purple-500/60 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">{member.name}</h4>
                  <p className="text-purple-300 font-medium">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.specialization}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
