
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@sudarshana.ai",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Office",
      value: "San Francisco, CA",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can help you achieve your goals. 
            Our team is ready to provide personalized recommendations for your unique needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Send us a message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Company</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                    placeholder="Your company name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500 min-h-[120px]"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 py-6 text-lg group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Info & Additional Content */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center space-x-4 group">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response Card */}
            <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg border-purple-500/20 p-6">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Quick Response Guarantee</h4>
                <p className="text-gray-300">
                  We understand that time is valuable. Our team commits to responding to all 
                  inquiries within 24 hours during business days.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-300 text-sm font-medium">Currently online</span>
                </div>
              </div>
            </Card>

            {/* FAQ Quick Links */}
            <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 p-6">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Frequently Asked</h4>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg bg-slate-900/50 hover:bg-slate-700/50 transition-colors text-gray-300 hover:text-white">
                    How long does AI implementation take?
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-slate-900/50 hover:bg-slate-700/50 transition-colors text-gray-300 hover:text-white">
                    What's included in your support package?
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-slate-900/50 hover:bg-slate-700/50 transition-colors text-gray-300 hover:text-white">
                    Do you offer custom AI model development?
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
