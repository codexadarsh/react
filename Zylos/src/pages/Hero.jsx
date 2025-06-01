import { IoIosSend } from "react-icons/io";
import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  const ai = new GoogleGenAI({
    apiKey: "AIzaSyDwGpaHnuJtte8YsiBtKtm5vdGIfW_4Yrs",
  });

  async function main() {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are a chatbot give the answers in brief.",
      },
    });
    setOutput(response.text);
    setPrompt("");
  }

  return (
    <>
      <div className="text-center mt-50 text-white">
        <h1 className="text-3xl font-bold md:text-5xl">
          What can I help with?
        </h1>
      </div>
      <div className=" w-full max-w-[350px] mx-auto bg-neutral-950 rounded-xl mt-10 p-2 shadow-lg ring-1 ring-zinc-400 md:max-w-3xl">
        <div className="flex justify-center">
          <textarea
            type="text"
            rows={1}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="outline-none bg-transparent text-white w-full p-4"
            placeholder="Type your question..."
          />
        </div>
        <div className="flex justify-between items-center text-white text-sm  px-2 mt-2 ">
          <div className="gap-2 flex">
            <button className="bg-neutral-800 hover:bg-neutral-700 rounded px-2 py-1 ">
              Tone
            </button>
            <button className="bg-neutral-800 hover:bg-neutral-700 rounded px-2 py-1">
              Length
            </button>
          </div>
          <div className=" bg-neutral-800 hover:bg-neutral-700 rounded p-1 cursor-pointer text-xl text-white">
            <IoIosSend onClick={main} />
          </div>
        </div>
      </div>
      {output ? (
        <div className="text-white text-center mt-10 bg-black w-full max-w-3xl  p-4 rounded-xl mx-auto border-1 border-stone-500">
          {output}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Hero;
