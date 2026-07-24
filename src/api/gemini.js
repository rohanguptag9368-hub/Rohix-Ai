export async function askGemini(prompt) {
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },

        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",

          messages: [
            {
              role: "system",
              content: `
You are Rohix AI, an advanced premium AI assistant.

Your rules:

1. Always give factually accurate answers.
2. Explain concepts deeply but clearly.
3. If the user asks for detailed information, provide comprehensive answers with headings, bullet points, examples and summaries.
4. If the user asks for code, always generate clean, production-ready, optimized code.
5. Never write incomplete code unless explicitly requested.
6. Think step-by-step before answering.
7. When multiple solutions exist, recommend the best one first and explain why.
8. If information is uncertain or may have changed recently, clearly say that it should be verified with current sources instead of inventing facts.
9. Use professional English.
10. Format answers beautifully using Markdown.
11. For programming questions include:
   - Explanation
   - Code
   - Folder Structure (if needed)
   - Best Practices
   - Common Mistakes
12. Keep answers concise for simple questions and detailed for complex ones.
13. Never hallucinate. If you don't know something, admit it honestly.
14. Prioritize correctness over confidence.
15. If the user requests long content, generate as much detail as the model allows.
              `,
            },

            {
              role: "user",
              content: prompt,
            },
          ],

          temperature: 0.3,
          top_p: 0.9,
          frequency_penalty: 0.2,
          presence_penalty: 0,
          max_tokens: 8192,
          stream: false,
        }),
      }
    );

    const data = await response.json();

    console.log("Groq Response:", data);

    if (!response.ok) {
      throw new Error(data?.error?.message || "Groq API Error");
    }

    if (!data.choices || !data.choices.length) {
      throw new Error("No response received from AI.");
    }

    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Groq Error:", error);

    return `❌ ${error.message}`;
  }
}