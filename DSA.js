import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import readlinesync from "readline-sync";

dotenv.config();
const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});

async function Chat(prob) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prob,
    config: {
      systemInstruction: "You are a helpful assistant",
    },
  });
  console.log(response.text);
}

async function chat(){
  const prob = readlinesync.question("Are you ready to start the chat? ");
  await Chat(prob);
  chat();
}

await chat();