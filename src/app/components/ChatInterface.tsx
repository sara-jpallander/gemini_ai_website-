"use client";
import { useEffect, useState } from "react";

export function ChatInterface() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  const handlePrompt = async () => {
    console.log("Clicked");

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        prompt: prompt,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setAnswer(data.result);
      setPrompt("");
    }
  };

  useEffect(() => {}, []);
  return (
    <>
      <div>
        <label htmlFor="promt-input">Enter a prompt: </label>
        <br />
        <textarea
          value={prompt}
          id="promt-input"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <br />
        <button onClick={handlePrompt}>Go</button>
      </div>
      <article>
        <p>{answer}</p>
      </article>
    </>
  );
}
