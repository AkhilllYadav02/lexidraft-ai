interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

export class GeminiService {
  private apiKey: string = "AIzaSyAhEx2yqNCn7xWN-slW3puy4o0gAFh6Z9E";

  constructor() {
    // API key is now hardcoded for direct usage
  }

  async generateContent(prompt: string): Promise<string> {
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': this.apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
          }
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const data: GeminiResponse = await response.json();
    return data.candidates[0]?.content?.parts[0]?.text || 'No response generated';
  }

  async legalResearch(query: string): Promise<string> {
    const prompt = `As a legal AI assistant, provide a comprehensive analysis for the following legal query. 
    
    Query: "${query}"
    
    Please provide:
    1. Relevant legal principles and concepts
    2. Key case law precedents (if applicable)
    3. Statutory provisions that may apply
    4. Legal analysis and reasoning
    5. Practical implications and considerations
    
    Format your response in a clear, structured manner suitable for law students and junior lawyers. Include citations where relevant.`;

    return this.generateContent(prompt);
  }

  async draftDocument(documentType: string, details: string): Promise<string> {
    const prompt = `As a legal document drafting assistant, help create a ${documentType} based on the following details:
    
    Details: "${details}"
    
    Please provide:
    1. A well-structured draft document
    2. Key clauses and provisions
    3. Legal considerations and risk factors
    4. Suggested modifications or alternatives
    
    Ensure the document follows standard legal formatting and includes appropriate disclaimers.`;

    return this.generateContent(prompt);
  }

  async generateCaseBrief(caseText: string): Promise<string> {
    const prompt = `Analyze the following legal case and create a comprehensive case brief:
    
    Case Text: "${caseText}"
    
    Please extract and organize:
    1. Case Citation and Court
    2. Facts of the Case
    3. Legal Issues Presented
    4. Holdings and Decisions
    5. Legal Reasoning and Ratio
    6. Dissenting Opinions (if any)
    7. Legal Significance and Precedent Value
    
    Format as a structured case brief suitable for legal study and reference.`;

    return this.generateContent(prompt);
  }

  async mockJudgeAnalysis(caseDetails: string): Promise<string> {
    const prompt = `Acting as an experienced judge, analyze the following case and provide judicial insights:
    
    Case Details: "${caseDetails}"
    
    Please provide:
    1. Likely legal outcome and reasoning
    2. Strength of arguments on both sides
    3. Key legal precedents that would influence the decision
    4. Potential counterarguments and weaknesses
    5. Strategic recommendations for presentation
    6. Estimated probability of success for each side
    
    Note: This is for educational purposes and moot court preparation only.`;

    return this.generateContent(prompt);
  }
}