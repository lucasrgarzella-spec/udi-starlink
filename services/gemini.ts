import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize the client only if the key is available, handled gracefully in the component
let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

export const generateSalesResponse = async (
  userMessage: string, 
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  if (!ai) {
    return "Desculpe, o assistente de IA não está configurado no momento (API Key ausente).";
  }

  try {
    const model = ai.models;
    
    // Using flash for speed in a chat context
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history, // Pass previous conversation context if implemented fully, for now we treat as single turn + context in prompt for simplicity in this demo function, or ideally use chat sessions.
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `Você é um especialista em vendas e suporte técnico para revenda de produtos Starlink (internet via satélite) da empresa 'UDI STARLINK'. 
        Seu tom é profissional, futurista e prestativo.
        Responda perguntas sobre:
        1. Velocidade da internet (Baixa latência, 100-200Mbps).
        2. Instalação (Fácil, faça você mesmo).
        3. Planos (Residencial, Viagem, Marítimo).
        4. Hardware (Kit Padrão, Alto Desempenho).
        
        Se o usuário perguntar preços exatos, diga que variam por região e sugira olhar a seção de produtos abaixo.
        Seja conciso. Responda em Português.`,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, não consegui processar sua solicitação no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Estou tendo dificuldades para conectar aos satélites de conhecimento. Tente novamente em breve.";
  }
};