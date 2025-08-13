import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Loader2, Download } from "lucide-react";
import { GeminiService } from "@/services/geminiService";
import { toast } from "sonner";

interface DocumentDraftingProps {
  geminiService: GeminiService;
}

export const DocumentDrafting = ({ geminiService }: DocumentDraftingProps) => {
  const [documentType, setDocumentType] = useState("");
  const [details, setDetails] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const documentTypes = [
    { value: "contract", label: "Contract/Agreement" },
    { value: "petition", label: "Petition/Application" },
    { value: "notice", label: "Legal Notice" },
    { value: "affidavit", label: "Affidavit" },
    { value: "memorandum", label: "Legal Memorandum" },
    { value: "letter", label: "Legal Letter" },
    { value: "brief", label: "Legal Brief" },
    { value: "motion", label: "Motion" }
  ];

  const handleDraft = async () => {
    if (!documentType || !details.trim()) {
      toast.error("Please select document type and provide details");
      return;
    }

    setIsLoading(true);
    try {
      const response = await geminiService.draftDocument(documentType, details);
      setResult(response);
      toast.success("Document drafted successfully!");
    } catch (error) {
      console.error("Drafting error:", error);
      toast.error("Failed to draft document. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-legal-navy" />
            <h3 className="text-xl font-semibold text-legal-navy">AI Document Drafting</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="document-type">Document Type</Label>
              <Select value={documentType} onValueChange={setDocumentType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
                <SelectContent>
                  {documentTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="document-details">Document Details</Label>
            <Textarea
              id="document-details"
              placeholder="Provide specific details for the document you want to draft. Include parties involved, key terms, purpose, deadlines, and any special clauses or conditions..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="min-h-[120px] resize-none"
            />
          </div>
          
          <Button 
            onClick={handleDraft} 
            disabled={isLoading}
            variant="hero"
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Drafting Document...
              </>
            ) : (
              <>
                <FileText className="h-4 w-4" />
                Draft Document
              </>
            )}
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-legal-gold" />
                <h4 className="text-lg font-semibold text-legal-navy">Drafted Document</h4>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
            
            <div className="prose prose-sm max-w-none">
              <div className="bg-white rounded-lg p-6 border-2 border-border shadow-sm">
                <pre className="whitespace-pre-wrap font-mono text-sm text-foreground leading-relaxed">
                  {result}
                </pre>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Edit Document
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(result)}>
                Copy to Clipboard
              </Button>
              <Button variant="accent" size="sm">
                Save as Template
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};