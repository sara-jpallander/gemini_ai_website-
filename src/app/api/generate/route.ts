import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);


export async function getAnswer(req: any, res: any) {
    const { prompt } = await req.json();

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        console.log(result.response.text());

        res.send(result)
    } catch (error) {
        res.send(error, "fuck u")
        
    }
}


