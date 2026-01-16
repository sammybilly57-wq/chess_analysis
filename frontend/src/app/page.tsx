"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Home() {
  const [pgn, setPgn] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    console.log("PGN submitted:", pgn);
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch("/api/analyse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pgn }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server returned ${response.status}: ${errorText.slice(0, 100)}`);
      }

      const data = await response.json();
      console.log("Analysis result:", data);
      setResult(data);
    } catch (error: any) {
      console.error("Error analyzing PGN:", error);
      setResult({ 
        status: "error", 
        message: error.message || "Failed to connect to backend" 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ThemeToggle />
      <main className="flex min-h-screen flex-col items-center justify-between p-8 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-200">
        <div className="w-full max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center dark:text-white">
            ChessLens - PGN Analyzer
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Analyze your chess games with AI-powered insights
          </p>
          <div className="flex flex-col w-full">
            <textarea
              className="w-full h-72 p-6 text-lg border-2 border-gray-300 dark:border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200"
              placeholder="Paste your PGN here...
Example:
1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7"
              value={pgn}
              onChange={(e) => setPgn(e.target.value)}
            ></textarea>
            <button
              className="mt-6 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={loading || !pgn.trim()}
            >
              {loading ? "Analyzing..." : "Analyze PGN"}
            </button>
          </div>
          
          {result && (
            <div className={`mt-8 p-6 border rounded-xl ${result.status === 'error' ? 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800' : 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'}`}>
              <h3 className={`text-lg font-semibold mb-2 ${result.status === 'error' ? 'text-red-900 dark:text-red-300' : 'text-green-900 dark:text-green-300'}`}>
                {result.status === 'error' ? 'Error' : 'Analysis Result'}
              </h3>
              <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300 font-mono">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}

          {!result && pgn && (
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
                PGN Preview
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                {pgn.split('\n')[0]}...
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}