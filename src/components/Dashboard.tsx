import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ApiKeyInput } from "@/components/ApiKeyInput";
import { LegalResearch } from "@/components/LegalResearch";
import { DocumentDrafting } from "@/components/DocumentDrafting";
import { GeminiService } from "@/services/geminiService";
import { Search, FileText, BookOpen, Gavel, Scale } from "lucide-react";

export const Dashboard = () => {
  const [geminiService, setGeminiService] = useState<GeminiService | null>(null);
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    const storedApiKey = localStorage.getItem('gemini_api_key');
    if (storedApiKey) {
      setGeminiService(new GeminiService(storedApiKey));
      setHasApiKey(true);
    }
  }, []);

  const handleApiKeySet = (apiKey: string) => {
    if (apiKey) {
      setGeminiService(new GeminiService(apiKey));
      setHasApiKey(true);
    } else {
      setGeminiService(null);
      setHasApiKey(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Scale className="h-8 w-8 text-legal-navy" />
              <h1 className="text-4xl font-bold text-legal-navy">LexiLaw Dashboard</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your AI-powered legal research and drafting workspace
            </p>
          </div>

          {/* API Key Configuration */}
          <ApiKeyInput onApiKeySet={handleApiKeySet} hasApiKey={hasApiKey} />

          {/* Main Dashboard */}
          <Card className="p-8">
            <Tabs defaultValue="research" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-2">
                <TabsTrigger value="research" className="flex items-center gap-2 p-3">
                  <Search className="h-4 w-4" />
                  <span className="hidden sm:inline">Research</span>
                </TabsTrigger>
                <TabsTrigger value="drafting" className="flex items-center gap-2 p-3">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Drafting</span>
                </TabsTrigger>
                <TabsTrigger value="case-brief" className="flex items-center gap-2 p-3">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Case Brief</span>
                </TabsTrigger>
                <TabsTrigger value="mock-judge" className="flex items-center gap-2 p-3">
                  <Gavel className="h-4 w-4" />
                  <span className="hidden sm:inline">Mock Judge</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="research">
                <LegalResearch geminiService={geminiService} />
              </TabsContent>

              <TabsContent value="drafting">
                <DocumentDrafting geminiService={geminiService} />
              </TabsContent>

              <TabsContent value="case-brief">
                <Card className="p-6 text-center">
                  <BookOpen className="h-12 w-12 text-legal-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-legal-navy mb-2">Case Brief Generator</h3>
                  <p className="text-muted-foreground mb-4">
                    Upload case documents and get AI-generated structured briefs with key facts and legal reasoning.
                  </p>
                  <p className="text-sm text-muted-foreground">Coming soon...</p>
                </Card>
              </TabsContent>

              <TabsContent value="mock-judge">
                <Card className="p-6 text-center">
                  <Gavel className="h-12 w-12 text-legal-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-legal-navy mb-2">AI Mock Judge</h3>
                  <p className="text-muted-foreground mb-4">
                    Present your case to an AI judge for outcome prediction and strategic insights for moot courts.
                  </p>
                  <p className="text-sm text-muted-foreground">Coming soon...</p>
                </Card>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
};