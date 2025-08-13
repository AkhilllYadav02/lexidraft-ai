import { Search, FileText, BookOpen, Gavel, Scale, Zap } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export const FeaturesSection = () => {
  const features = [
    {
      title: "AI Legal Research",
      description: "Instantly search through vast legal databases and get AI-powered summaries of relevant cases and statutes.",
      icon: Search,
      features: [
        "Natural language legal queries",
        "Precedent analysis and summaries",
        "Multi-jurisdiction case law search",
        "Relevance scoring and ranking"
      ],
      buttonText: "Start Research"
    },
    {
      title: "Document Drafting",
      description: "Generate professional legal documents with AI assistance, ensuring compliance and best practices.",
      icon: FileText,
      features: [
        "Contract and agreement templates",
        "Petition and motion drafting",
        "Legal notice generation",
        "Clause suggestions and risk analysis"
      ],
      buttonText: "Draft Document"
    },
    {
      title: "Case Brief Generator",
      description: "Upload case documents and get structured, comprehensive briefs with key facts and legal reasoning.",
      icon: BookOpen,
      features: [
        "PDF document analysis",
        "Fact extraction and organization",
        "Issue identification and framing",
        "Judgment summary and ratio"
      ],
      buttonText: "Generate Brief"
    },
    {
      title: "AI Mock Judge",
      description: "Present your case to an AI judge for outcome prediction and strategic insights for moot courts.",
      icon: Gavel,
      features: [
        "Case outcome prediction",
        "Argument strength analysis",
        "Counterargument identification",
        "Moot court preparation"
      ],
      buttonText: "Mock Trial"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Scale className="h-8 w-8 text-legal-gold" />
            <h2 className="text-4xl font-bold text-legal-navy">
              Comprehensive Legal AI Suite
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From research to drafting, our AI-powered tools cover every aspect of legal work, 
            helping you deliver better results faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="bg-legal-navy rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="h-8 w-8 text-legal-gold" />
            <h3 className="text-3xl font-bold">Ready to Transform Your Legal Practice?</h3>
          </div>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of law students and professionals who are already using AI to enhance their legal research and drafting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-legal-gold text-legal-navy hover:bg-legal-gold-light transition-all duration-300 font-semibold px-8 py-4 rounded-md text-lg">
              Get Started Free
            </button>
            <button className="bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 transition-all duration-300 font-semibold px-8 py-4 rounded-md text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};