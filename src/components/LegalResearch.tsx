import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Search, Loader2, BookOpen, FileText } from "lucide-react";
import { GeminiService } from "@/services/geminiService";
import { toast } from "sonner";

interface LegalResearchProps {
  geminiService: GeminiService | null;
}

export const LegalResearch = ({ geminiService }: LegalResearchProps) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleResearch = async () => {
    if (!geminiService) {
      toast.error("Please configure your API key first");
      return;
    }

    if (!query.trim()) {
      toast.error("Please enter a legal query");
      return;
    }

    setIsLoading(true);
    try {
      const response = await geminiService.legalResearch(query);
      setResult(response);
      toast.success("Research completed successfully!");
    } catch (error) {
      console.error("Research error:", error);
      toast.error("Failed to complete research. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-legal-navy" />
            <h3 className="text-xl font-semibold text-legal-navy">AI Legal Research</h3>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="research-query">Legal Query</Label>
            <Textarea
              id="research-query"
              placeholder="Example: What are the precedents for breach of contract in Indian law? What constitutes wrongful termination? Explain Article 21 of the Indian Constitution..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>
          
          <Button 
            onClick={handleResearch} 
            disabled={isLoading || !geminiService}
            variant="hero"
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Researching...
              </>
            ) : (
              <>
                <Search className="h-4 w-4" />
                Start Research
              </>
            )}
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-legal-gold" />
              <h4 className="text-lg font-semibold text-legal-navy">Research Results</h4>
            </div>
            
            <div className="prose prose-sm max-w-none">
              <div className="bg-muted/30 rounded-lg p-4 border border-border">
                <pre className="whitespace-pre-wrap font-sans text-sm text-foreground leading-relaxed">
                  {result}
                </pre>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4" />
                Export as PDF
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(result)}>
                Copy to Clipboard
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};