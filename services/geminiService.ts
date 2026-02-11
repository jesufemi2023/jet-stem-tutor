
import { GoogleGenAI, Type } from "@google/genai";
import { ConsultationRequest } from "../types.ts";

export const generateStudyPlan = async (request: ConsultationRequest) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    A parent named ${request.parentName} is seeking help for their child ${request.studentName}, who attends ${request.schoolName} in ${request.location} and is in grade 7-12, struggling with ${request.subject}. 
    
    LOGISTICS CONTEXT:
    - Classes are twice a week, 1 hour each.
    - Conducted via Google Meet.
    - Students are grouped by same country, school, and grade (Max 5 per class).
    - 1-on-1 tutoring is also an option.
    - Monthly payment is required upfront. 
    - Minimum fee is $120 per subject per month (subject to review based on difficulty).
    
    Additional context: ${request.description}.
    
    Please provide a structured tutoring plan in JSON format. The summary should mention that for ${request.subject}, the base monthly fee starts at $120.
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
            summary: { type: Type.STRING, description: "A summary of the needs, mentioning the $120/subject/month starting fee and the Google Meet structure." },
            recommendations: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3-5 specific steps tailored to their curriculum."
            },
            estimatedDuration: { type: Type.STRING, description: "Classes: 2x per week, 1 hour each." },
            monthlyFee: { type: Type.STRING, description: "Specify the fee (minimum $120 per month)." }
          },
          required: ["summary", "recommendations", "estimatedDuration", "monthlyFee"]
        }
      }
    });

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
