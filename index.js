import { GoogleGenAI } from "@google/genai";
import readlinesync from "readline-sync";
import dotenv from "dotenv";

dotenv.config();
const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});

const h = [];

async function Chat(prob) {

  h.push({
    role: "user",
    parts: [{text: prob}]
  })

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: h,
  });

  h.push({
    role: "assistant",
    parts: [{text: response.text}]
  })

  console.log(response.text);
}

async function main() {
  const prob = readlinesync.question("Are you ready to start the chat? ");
  await Chat(prob);
  main();
}

await main();