import { SYSTEM_PROMPT, SAMEER_KNOWLEDGE } from '../data/sameerKnowledge';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const DEFAULT_MODEL = 'llama-3.3-70b-versatile';

export const getGroqApiKey = (): string => {
  return (
    import.meta.env.VITE_GROQ_API_KEY ||
    localStorage.getItem('sameer_groq_api_key') ||
    ''
  );
};

export const setGroqApiKey = (key: string): void => {
  if (key.trim()) {
    localStorage.setItem('sameer_groq_api_key', key.trim());
  } else {
    localStorage.removeItem('sameer_groq_api_key');
  }
};

export async function askSameerAI(
  conversationHistory: ChatMessage[],
  userPrompt: string
): Promise<string> {
  const apiKey = getGroqApiKey();

  if (!apiKey) {
    // Helpful local fallback if API key isn't provided yet
    const query = userPrompt.toLowerCase();
    if (query.includes('project') || query.includes('work')) {
      return `Here's the scoop! Sameer built **Samparkasetu CRM** (a tractor dealership platform running on Next.js, Redis & Dokploy), **Datalk** (AI SQL assistant with Gemini), and an **Online Exam Portal** supporting 1,000+ simultaneous students! 🚀\n\n*(P.S. Add your Groq API key via the key icon above to unlock my full witty LLM powers!)*`;
    }
    if (query.includes('hire') || query.includes('job') || query.includes('contact') || query.includes('email')) {
      return `YES! Sameer is actively open for Full Stack, Software Engineering, and Backend roles! You can reach him at **sameerpjadhav12@gmail.com** or on [LinkedIn](https://linkedin.com/in/sameer-jadhav-a040921b5). He responds faster than a cached Redis query! ⚡`;
    }
    if (query.includes('resume') || query.includes('cv')) {
      return `Ah, the legendary resume! Legend says it's stored in a vault labeled *"Privacy Notice"*. But between you and me: 8.79 CGPA at Sanjivani University, intern at Samparkasetu & HCL Tech, 3rd place in Taiwan Spectra Vision, and master of Spring Boot & React! 🏆`;
    }
    return `Hey there! I am **SameerBot** 🤖. To give you personalized, ultra-witty, deep-dive answers, please click the 🔑 icon in the header to enter your **Groq API key** (or add \`VITE_GROQ_API_KEY\` to your \`.env\`).\n\nUntil then, feel free to ask about Sameer's projects, skills, or why you should hire him!`;
  }

  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...conversationHistory.slice(-8), // Keep recent history for context
    { role: 'user', content: userPrompt }
  ];

  try {
    const response = await fetch(GROQ_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        messages,
        temperature: 0.7,
        max_tokens: 600
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      const errMsg = err?.error?.message || `HTTP error ${response.status}`;
      
      // Fallback model trial if 70b hits rate limits
      if (response.status === 429 || response.status === 404) {
        return tryFallbackModel(messages, apiKey);
      }
      throw new Error(errMsg);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Oops, my neural net blinked. Try asking again!";
  } catch (error: any) {
    console.error('Groq API Error:', error);
    return `⚠️ ${error.message || 'Error connecting to Groq AI'}. Please check your API key in the settings above!`;
  }
}

async function tryFallbackModel(messages: any[], apiKey: string): Promise<string> {
  try {
    const res = await fetch(GROQ_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages,
        temperature: 0.7,
        max_tokens: 500
      })
    });
    if (!res.ok) throw new Error('Fallback model failed');
    const data = await res.json();
    return data.choices?.[0]?.message?.content || "Hello! SameerBot is ready.";
  } catch (err) {
    return "Looks like Groq is taking a quick coffee break (Rate limit or network hiccup). Please try again in a few seconds!";
  }
}
