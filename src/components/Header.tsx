import { Scale, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white shadow-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-legal-navy" />
              <h1 className="text-2xl font-bold text-legal-navy">LexiLaw</h1>
            </div>
            <span className="text-sm text-muted-foreground hidden sm:block">
              AI Legal Research & Drafting Assistant
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#research" className="text-foreground hover:text-legal-navy transition-colors">
              Research
            </a>
            <a href="#drafting" className="text-foreground hover:text-legal-navy transition-colors">
              Drafting
            </a>
            <a href="#case-brief" className="text-foreground hover:text-legal-navy transition-colors">
              Case Brief
            </a>
            <a href="#mock-judge" className="text-foreground hover:text-legal-navy transition-colors">
              Mock Judge
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="professional" size="sm">
              <User className="h-4 w-4" />
              Login
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};