import { Scale, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-legal-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-legal-gold" />
              <h3 className="text-2xl font-bold">LexiLaw</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Empowering legal professionals with AI-driven research and drafting tools 
              for more efficient and accurate legal work.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-legal-gold">Features</h4>
            <ul className="space-y-2">
              <li><a href="#research" className="text-white/80 hover:text-white transition-colors">Legal Research</a></li>
              <li><a href="#drafting" className="text-white/80 hover:text-white transition-colors">Document Drafting</a></li>
              <li><a href="#case-brief" className="text-white/80 hover:text-white transition-colors">Case Brief Generator</a></li>
              <li><a href="#mock-judge" className="text-white/80 hover:text-white transition-colors">AI Mock Judge</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-legal-gold">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Legal Guides</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-legal-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-legal-gold" />
                <span className="text-white/80">support@lexilaw.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-legal-gold" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-legal-gold" />
                <span className="text-white/80">Legal Tech District, Mumbai</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 LexiLaw. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};