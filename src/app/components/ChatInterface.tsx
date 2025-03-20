"use client"
import { useState } from "react"

interface Prompt {
    prompt: string;
}

export function ChatInterface() {
    const [prompt, setPrompt] = useState<Prompt>();

    const handlePrompt = async () => {

        console.log("Clicked")

        try {
            const response = await fetch("http://localhost:3000/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    prompt: prompt
                })
            });

            const data = await response.json()

            if (response.ok) {
            alert(data)
            }

        } catch (error) {
            alert("Something went wrong")
        }
        
    }

    return(
    <>
    <div>
        <label htmlFor="promt-input">Enter a prompt: </label><br />
        <textarea id="promt-input" onChange={(e) => setPrompt({ prompt: e.target.value })} /><br />
        <button onClick={handlePrompt}>Go</button>
    </div>
    <article>
        <p>
            {/* Här ska vi displaya svaret från AI:n */}
        </p>
    </article>
    </>
    )
}