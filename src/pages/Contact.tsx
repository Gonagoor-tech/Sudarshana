
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@sudarshana.ai",
      description: "Get in touch for any inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 AI Boulevard, Tech City, TC 12345",
      description: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 8AM-6PM PST",
      description: "We're here to help"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 mb-6">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's Build the Future
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with AI? We're here to help you every step 
              of the way. Reach out to discuss your project and discover what's possible.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group text-center p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-3 md:p-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                        {info.title}
                      </h3>
                      <p className="text-purple-400 font-medium mb-1">{info.content}</p>
                      <p className="text-sm text-gray-300">{info.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Start Your AI Journey
                  </span>
                </h2>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    placeholder="john@company.com"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <Input 
                    placeholder="Your Company Name"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    placeholder="Tell us about your AI project requirements..."
                    rows={6}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
