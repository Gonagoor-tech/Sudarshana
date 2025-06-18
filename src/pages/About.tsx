
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: Award, value: "50+", label: "AI Models Deployed" },
    { icon: Globe, value: "25+", label: "Countries Reached" },
    { icon: Target, value: "99.9%", label: "Accuracy Rate" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      expertise: "Machine Learning, Neural Networks",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering",
      expertise: "Software Architecture, Cloud Computing",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Priya Patel",
      role: "Data Science Lead",
      expertise: "Statistical Analysis, Predictive Modeling",
      image: "/placeholder.svg"
    },
    {
      name: "James Wilson",
      role: "Product Strategy Director",
      expertise: "Business Intelligence, Market Analysis",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30 mb-6">
              About Sudarshana AI
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Pioneering the Future
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                of Artificial Intelligence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              Founded with a vision to democratize AI technology, Sudarshana AI has been at the 
              forefront of artificial intelligence innovation, helping businesses transform their 
              operations and unlock unprecedented growth opportunities.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <Card key={stat.label} className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 text-center p-6 md:p-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-3 md:p-4">
                      <stat.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We believe that artificial intelligence should be accessible, ethical, and 
                  transformative. Our mission is to bridge the gap between cutting-edge AI 
                  research and practical business applications, ensuring that organizations 
                  of all sizes can harness the power of AI to solve their most complex challenges.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Through innovative solutions, expert guidance, and unwavering commitment to 
                  excellence, we're not just building AI systems – we're shaping the future 
                  of how businesses operate and thrive in an AI-driven world.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-64 md:h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-lg border border-purple-500/30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                      AI
                    </div>
                    <p className="text-gray-300">Transforming Tomorrow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Meet Our Team
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our diverse team of AI experts, engineers, and visionaries work together 
                to push the boundaries of what's possible with artificial intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {team.map((member, index) => (
                <Card key={member.name} className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group text-center p-6">
                  <div className="space-y-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                      <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                        <Users className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-purple-400 font-medium">{member.role}</p>
                      <p className="text-sm text-gray-300 mt-2">{member.expertise}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
