import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  buttonText: string;
  className?: string;
}

export const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  features, 
  buttonText,
  className = ""
}: FeatureCardProps) => {
  return (
    <Card className={`p-8 h-full flex flex-col hover:shadow-legal transition-all duration-300 border-2 hover:border-legal-navy/20 ${className}`}>
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-legal-navy/10 rounded-xl p-3">
          <Icon className="h-8 w-8 text-legal-navy" />
        </div>
        <h3 className="text-2xl font-bold text-legal-navy">{title}</h3>
      </div>
      
      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
        {description}
      </p>
      
      <div className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-legal-gold rounded-full mt-2 flex-shrink-0" />
            <span className="text-foreground">{feature}</span>
          </div>
        ))}
      </div>
      
      <Button variant="professional" className="w-full">
        {buttonText}
      </Button>
    </Card>
  );
};