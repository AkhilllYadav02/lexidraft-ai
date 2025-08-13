import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Key, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

interface ApiKeyInputProps {
  onApiKeySet: (apiKey: string) => void;
  hasApiKey: boolean;
}

export const ApiKeyInput = ({ onApiKeySet, hasApiKey }: ApiKeyInputProps) => {
  const [apiKey, setApiKey] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      localStorage.setItem('gemini_api_key', apiKey.trim());
      onApiKeySet(apiKey.trim());
      toast.success("API key configured successfully!");
      setApiKey("");
    } else {
      toast.error("Please enter a valid API key");
    }
  };

  const clearApiKey = () => {
    localStorage.removeItem('gemini_api_key');
    onApiKeySet('');
    toast.success("API key removed");
  };

  if (hasApiKey) {
    return (
      <Card className="p-4 bg-green-50 border-green-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Key className="h-4 w-4 text-green-600" />
            <span className="text-sm text-green-700 font-medium">Gemini AI Configured</span>
          </div>
          <Button variant="outline" size="sm" onClick={clearApiKey}>
            Change API Key
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 border-2 border-legal-gold/20 bg-gradient-to-br from-legal-gold/5 to-background">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-legal-navy">
          <Key className="h-5 w-5" />
          <h3 className="font-semibold">Configure Gemini AI</h3>
        </div>
        
        <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <AlertTriangle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-700">
            <p className="font-medium mb-1">Temporary Configuration</p>
            <p>For production use, connect to Supabase for secure API key management. Your key will be stored locally in your browser.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">Gemini API Key</Label>
            <div className="relative">
              <Input
                id="apiKey"
                type={showApiKey ? "text" : "password"}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Gemini API key (AIza...)"
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          
          <Button type="submit" variant="hero" className="w-full">
            Configure AI Assistant
          </Button>
        </form>

        <div className="text-xs text-muted-foreground">
          <p>Don't have an API key? Get one from the <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer" className="text-legal-navy hover:underline">Google AI Studio</a></p>
        </div>
      </div>
    </Card>
  );
};