import { Button } from "@/components/ui/button";
import { Search, FileText, BookOpen, Gavel } from "lucide-react";
import heroImage from "@/assets/legal-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-legal-navy leading-tight">
                AI-Powered
                <span className="block bg-gradient-to-r from-legal-gold to-legal-gold-light bg-clip-text text-transparent">
                  Legal Research
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empower your legal practice with advanced AI. Research case laws, draft documents, 
                and analyze precedents faster than ever before.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Search className="h-5 w-5" />
                Start Research
              </Button>
              <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                <FileText className="h-5 w-5" />
                Draft Document
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-legal-navy/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Search className="h-8 w-8 text-legal-navy" />
                </div>
                <p className="text-sm font-medium text-foreground">Case Research</p>
              </div>
              <div className="text-center">
                <div className="bg-legal-navy/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-legal-navy" />
                </div>
                <p className="text-sm font-medium text-foreground">Document Drafting</p>
              </div>
              <div className="text-center">
                <div className="bg-legal-navy/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-legal-navy" />
                </div>
                <p className="text-sm font-medium text-foreground">Case Briefs</p>
              </div>
              <div className="text-center">
                <div className="bg-legal-navy/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Gavel className="h-8 w-8 text-legal-navy" />
                </div>
                <p className="text-sm font-medium text-foreground">Mock Judge</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-legal">
              <img 
                src={heroImage} 
                alt="Legal AI Technology Interface" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-legal-navy/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};