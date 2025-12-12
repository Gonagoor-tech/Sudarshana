import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const productData = {
  silicon: {
    hero: {
      title: "Vishwakarma",
      subtitle: "The Future of Intelligent Processing",
      desc: "Revolutionary processor class embedding semantic understanding into AI inference, combining Sanskrit linguistic priors with high-performance vector, graph, and quantum processing cores for unmatched efficiency and accuracy."
    },
    features: [
      "Native support for Sanskrit-based SLM and LLM models",
      "Specialized hardware for sparse attention and rule-driven inference",
      "Low-power, high-throughput architecture",
      "Seamless integration of quantum algorithm for future-ready computing"
    ],
    stats: [
      { stat: "100,000×", label: "High-Performance Computing", desc: "Audio processing compared to traditional architectures" },
      { stat: "Military-grade", label: "Enterprise Security", desc: "Encryption for sensitive research data" },
      { stat: "<1ns", label: "Real-time Processing", desc: "For critical AI applications" },
      { stat: "Cloud-native", label: "Scalable Architecture", desc: "Distributed computing across global networks" }
    ],
    solutions: [
      {
        icon: "🧠",
        title: "Enterprise AI Solutions",
        desc: "Scalable AI implementations for enterprise-grade applications using Vishwakarma semiconductor architecture.",
        bullets: [
          "Custom AI model development and deployment",
          "Real-time processing with sub-nanosecond latency",
          "Military-grade security and compliance"
        ]
      },
      {
        icon: "🎵",
        title: "Audio Intelligence Platform",
        desc: "Advanced sound analysis and processing solutions based on ancient Sanskrit naada principles and modern AI.",
        bullets: [
          "Quantum-level audio understanding",
          "Harmonic resonance mapping and prediction",
          "100,000x faster processing than traditional methods"
        ]
      }
    ],
    applications: [
      {
        icon: "⚡",
        title: "Audio Processing Breakthrough",
        stats: { value: "100,000×", label: "Faster Processing" },
        result: "99.9% accuracy improvement with sub-nanosecond latency",
        desc: "A leading tech company achieved unprecedented performance improvements using Vishwakarma for real-time audio analysis."
      },
      {
        icon: "📈",
        title: "Enterprise AI Implementation",
        stats: { value: "85%", label: "Efficiency Increase" },
        result: "Reduced operational costs by 40% while improving accuracy",
        desc: "Fortune 500 company deployed naada-based AI for automated decision-making and process optimization."
      }
    ]
  },
  saas: {
    hero: {
      title: "SaaS Platform",
      subtitle: "Innovative Architecture Meets Semantic Intelligence",
      desc: "Combining linguistic knowledge, quantum principles, and hardware acceleration to deliver smarter, more efficient AI SaaS solutions."
    },
    features: [
      "Semantic-driven vector and graph processing units",
      "Zero-hallucination models powered by Sanskrit grammar",
      "Efficient rule-based SLM integrated at the chip level",
      "Quantum-enhanced processing for robust computations",
      "Reduced data and energy consumption",
      "Scalable solutions for edge devices and datacenters"
    ],
    stats: [
      { stat: "99%", label: "Accuracy", desc: "Zero-hallucination AI outputs" },
      { stat: "50%", label: "Energy Savings", desc: "Compared to traditional systems" },
      { stat: "<2ms", label: "Latency", desc: "Real-time semantic inference" },
      { stat: "Cloud-ready", label: "Deployment", desc: "Edge and cloud scalable" }
    ],
    solutions: [
      {
        icon: "💻",
        title: "SaaS AI Platform",
        desc: "Cloud-native solutions with real-time processing.",
        bullets: [
          "Zero-hallucination LLMs",
          "Semantic-driven inference",
          "Flexible cloud deployment"
        ]
      },
      {
        icon: "⚙️",
        title: "Automation & Analytics",
        desc: "Optimized pipelines for enterprise-scale AI workflows.",
        bullets: [
          "Smart data preprocessing",
          "Advanced model orchestration",
          "Seamless scaling across devices"
        ]
      }
    ],
    applications: [
      {
        icon: "🚀",
        title: "Next-Gen SaaS AI",
        stats: { value: "10×", label: "Faster Insights" },
        result: "Real-time analytics with semantic grounding",
        desc: "Enterprises gain actionable insights instantly using semantic-aware AI pipelines."
      },
      {
        icon: "📊",
        title: "Enterprise Automation",
        stats: { value: "60%", label: "Productivity Increase" },
        result: "Streamlined operations and automated decision-making",
        desc: "Organizations leverage SaaS AI for smarter, faster operations."
      }
    ]
  },
  "language-model": {
    hero: {
      title: "Language Models",
      subtitle: "Precision Meets Semantics",
      desc: "Sanskrit-inspired semantic grounding enables zero-hallucination, context-rich AI systems seamlessly integrated with our silicon."
    },
    features: [
      "Context-Aware NLP",
      "Hybrid SLM + LLM",
      "Optimized for Vishwakarma"
    ],
    stats: [
      { stat: "99.9%", label: "Accuracy", desc: "Semantic-aware outputs" },
      { stat: "Low-latency", label: "Inference", desc: "Hardware accelerated" },
      { stat: "Flexible", label: "Deployment", desc: "Edge and cloud ready" },
      { stat: "Scalable", label: "Models", desc: "Small to large-scale LLMs" }
    ],
    solutions: [
      {
        icon: "📝",
        title: "NLP Solutions",
        desc: "Context-rich NLP for multiple languages and domains.",
        bullets: ["Zero-hallucination models", "Hybrid symbolic-deep learning", "Optimized for speed and accuracy"]
      }
    ],
    applications: [
      {
        icon: "🔍",
        title: "Semantic AI Search",
        stats: { value: "99%", label: "Precision" },
        result: "Contextually accurate search results",
        desc: "Integrating language models into enterprise search applications for semantic accuracy."
      }
    ]
  },
  pcba: {
    hero: {
      title: "PCBA",
      subtitle: "Precision Hardware for AI",
      desc: "High-performance Printed Circuit Board Assemblies optimized for Vishwakarma processors, memory, and accelerators in real-world deployments."
    },
    features: [
      "AI-Optimized Boards",
      "Scalable Integration",
      "Reliability & Efficiency"
    ],
    stats: [
      { stat: "High", label: "Throughput", desc: "Optimized AI workloads" },
      { stat: "Robust", label: "Design", desc: "Edge and datacenter ready" },
      { stat: "Military-grade", label: "Reliability", desc: "Durable and efficient" },
      { stat: "Low", label: "Power", desc: "Efficient consumption" }
    ],
    solutions: [
      {
        icon: "🔧",
        title: "PCBA Engineering",
        desc: "Design and assembly for maximum AI performance.",
        bullets: ["Optimized hardware layout", "Seamless processor integration", "High thermal efficiency"]
      }
    ],
    applications: [
      {
        icon: "⚙️",
        title: "Edge AI Deployment",
        stats: { value: "99%", label: "Uptime" },
        result: "Reliable AI operations in edge environments",
        desc: "PCBA enables high-performance AI applications in real-world deployments."
      }
    ]
  }
};

const Products = () => {
  const [activeTab, setActiveTab] = useState("silicon");
  const content = productData[activeTab];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Container with better max-width and padding */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="pt-16 pb-8">
          <div className="text-center mb-12">
            <h1 className="text-2xl font-semibold text-foreground/60 mb-2 tracking-wide uppercase">
              Our Products
            </h1>
            <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
              Cutting-edge technology solutions powered by semantic intelligence
            </p>
          </div>

          {/* Improved Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="inline-flex h-12 items-center justify-center rounded-2xl bg-secondary/50 p-1 text-foreground/70 backdrop-blur-sm border border-border/50 mx-auto grid grid-cols-4 w-full max-w-2xl gap-1">
              <TabsTrigger 
                value="silicon" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Silicon
              </TabsTrigger>
              <TabsTrigger 
                value="saas"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                SaaS
              </TabsTrigger>
              <TabsTrigger 
                value="language-model"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Language Model
              </TabsTrigger>
              <TabsTrigger 
                value="pcba"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                PCBA
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Hero Section - Improved Typography */}
        <section className="text-center mb-20 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1] tracking-tight">
              {content.hero.title}
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 text-foreground/80 leading-relaxed">
              {content.hero.subtitle}
            </h3>
            <p className="text-lg sm:text-xl text-foreground/60 max-w-4xl mx-auto leading-relaxed font-light">
              {content.hero.desc}
            </p>
          </div>
        </section>

        {/* Stats Section - Redesigned */}
        <section className="mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5"
              >
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-3 group-hover:scale-105 transition-transform duration-300">
                    {stat.stat}
                  </div>
                  <div className="text-lg font-semibold mb-2 text-foreground">
                    {stat.label}
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section - Modern Grid */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Key Features</h3>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Advanced capabilities that set our technology apart
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-secondary/60 backdrop-blur-sm rounded-2xl p-6 border border-border/40 hover:border-border/80 transition-all duration-300 hover:shadow-md hover:shadow-foreground/5 hover:-translate-y-1"
              >
                <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions Section - Enhanced Cards */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Solutions</h3>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Comprehensive solutions tailored for your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.solutions.map((solution, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-secondary/90 to-secondary/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-border transition-all duration-500 hover:shadow-xl hover:shadow-foreground/10"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors duration-300">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {solution.title}
                    </h4>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {solution.desc}
                    </p>
                  </div>
                </div>
                
                {solution.bullets && (
                  <ul className="space-y-3">
                    {solution.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start space-x-3 text-foreground/70">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Applications Section - Case Studies */}
        <section className="mb-24 pb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Real-World Applications</h3>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Success stories from organizations using our technology
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.applications.map((app, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-secondary/90 to-secondary/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-border transition-all duration-500 hover:shadow-xl hover:shadow-foreground/10"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors duration-300">
                    {app.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {app.title}
                    </h4>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {app.desc}
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {app.stats.value}
                      </div>
                      <div className="text-sm font-medium text-primary/80">
                        {app.stats.label}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-primary">
                        {app.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Products;
