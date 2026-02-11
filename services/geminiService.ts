
import { GoogleGenAI, Type } from "@google/genai";
import { ConsultationRequest } from "../types";

export const generateStudyPlan = async (request: ConsultationRequest) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    A parent named ${request.parentName} is seeking help for their child ${request.studentName}, who is in grade 7-12 and struggling with ${request.subject}. 
    Additional context: ${request.description}.
    
    Our tutoring service focuses on:
    1. Reinforcing school curriculum.
    2. Holistic growth (discipline, responsibility, character).
    3. Building confidence and foundational skills.
    
    Please provide a structured tutoring plan in JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING, description: "A brief professional summary of the child's academic needs." },
            recommendations: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3-5 specific tutoring steps or focus areas."
            },
            estimatedDuration: { type: Type.STRING, description: "Suggested hours per week." }
          },
          required: ["summary", "recommendations", "estimatedDuration"]
        }
      }
    });

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
