"use client";

import { useState } from "react";

export default function Home() {
  const [pgn, setPgn] = useState("");

  const handleSubmit = async () => {
    console.log("PGN submitted:", pgn);
    try {
      const response = await fetch("/api/analyse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pgn }),
      });
      const data = await response.json();
      console.log("Analysis result:", data);
    } catch (error) {
      console.error("Error analyzing PGN:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">ChessLens - PGN Analyzer</h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col w-full">
          <textarea
            className="w-full h-64 p-4 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none dark:bg-gray-800 dark:text-white"
            placeholder="Paste your PGN here..."
            value={pgn}
            onChange={(e) => setPgn(e.target.value)}
          ></textarea>
          <button
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={handleSubmit}
          >
            Analyze PGN
          </button>
        </div>
      </div>
    </main>
  );
}