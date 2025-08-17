// components/parts/AIAssistant.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sparkles } from "lucide-react";

// Dummy response data
const dummyResponses = {
  fixtures: `
    <h4 class="font-bold text-gray-800 mb-2">Upcoming Matches</h4>
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase">Match</th>
            <th class="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
            <th class="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-900">Rayon vs APR FC</td>
            <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">Aug 25</td>
            <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">15:00</td>
          </tr>
          <tr>
            <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-900">Mukura vs Police</td>
            <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">Aug 26</td>
            <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">15:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  generic:
    "I'm sorry, I can only provide information on upcoming fixtures at this time. Please try asking about 'fixtures' or 'upcoming matches'.",
};

export const AIAssistant = () => {
  const [messages, setMessages] = useState<
    { sender: "user" | "assistant"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [isAssistantTyping, setIsAssistantTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = { sender: "user" as const, text: input.trim() };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsAssistantTyping(true);

    const lowerInput = input.trim().toLowerCase();
    let responseText = dummyResponses.generic;

    if (
      lowerInput.includes("fixtures") ||
      lowerInput.includes("matches") ||
      lowerInput.includes("upcoming")
    ) {
      responseText = dummyResponses.fixtures;
    }

    // Simulate a delay for a more realistic feel
    setTimeout(() => {
      const assistantMessage = {
        sender: "assistant" as const,
        text: responseText,
      };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
      setIsAssistantTyping(false);
    }, 1000);
  };

  useEffect(() => {
    // Scroll to the bottom on new message
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isAssistantTyping]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hidden md:flex text-green-600 hover:text-green-800"
        >
          <Sparkles className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[500px] p-6">
        <div className="flex flex-col h-full">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            RPL Assistant
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Ask me anything about the league, teams, players, or matches.
          </p>

          <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
            <p className="text-sm text-gray-400">
              Welcome! How can I help you today?
            </p>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-200 text-gray-800 rounded-br-none"
                      : "bg-green-100 text-gray-800 rounded-bl-none"
                  }`}
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
              </div>
            ))}
            {isAssistantTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 p-3 rounded-lg rounded-bl-none text-sm">
                  <span className="typing-animation">...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="mb-4 space-y-2">
            <p className="text-xs font-semibold text-gray-600">
              Suggested questions:
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                className="text-xs h-auto py-1 text-green-600 border-green-300 hover:bg-green-50"
                onClick={() => setInput("What are the upcoming matches?")}
              >
                What are the upcoming matches?
              </Button>
              <Button
                variant="outline"
                className="text-xs h-auto py-1 text-green-600 border-green-300 hover:bg-green-50"
                onClick={() => setInput("Who is the top scorer?")}
              >
                Who is the top scorer?
              </Button>
              <Button
                variant="outline"
                className="text-xs h-auto py-1 text-green-600 border-green-300 hover:bg-green-50"
                onClick={() => setInput("Tell me about Rayon Sports.")}
              >
                Tell me about Rayon Sports.
              </Button>
            </div>
          </div>

          <form
            onSubmit={handleSendMessage}
            className="flex space-x-2 items-center"
          >
            <input
              type="text"
              placeholder="Type your question..."
              className="flex-1 p-2 border rounded-md text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              type="submit"
              className="bg-green-600 text-white hover:bg-green-700"
            >
              Send
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};
