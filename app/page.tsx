"use client";

import { useRef, useState, useEffect, FormEvent } from "react";
import AppNavbar from "@/components/app-navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface MessageBubbleProps {
  children: React.ReactNode;
  time: string;
  align?: "left" | "right";
}

function MessageBubble({ children, time, align = "left" }: MessageBubbleProps) {
  const alignment = align === "left" ? "" : "ml-auto";
  const minWidth = align === "left" ? "min-w-[120px]" : "min-w-[80px]";

  return (
    <div
      className={`relative bg-card border border-border rounded-lg p-2 mb-4 overflow-auto min-w-[200px] max-w-[275px] w-auto ${minWidth} ${alignment}`}
    >
      <p className="text-sm break-words">{children}</p>
      <span className="absolute bottom-2 right-2 text-xs">{time}</span>
    </div>
  );
}

interface Message {
  text: string;
  time: string;
  align: "left" | "right";
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hallo! Wie geht's?", time: "01:10 AM", align: "left" },
    { text: "Mir geht's gut, danke!", time: "01:12 AM", align: "right" },
  ]);

  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      align: "right",
    };
    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col h-screen w-375 px-10 overflow-auto pt-16">
      <AppNavbar />

      <div className="flex-1 overflow-auto pt-16">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.align === "right" ? "p-4 ml-auto" : "p-4"}
          >
            <MessageBubble time={msg.time} align={msg.align}>
              {msg.text}
            </MessageBubble>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="flex p-4 ml-auto mr-auto">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-[4] w-[800px]"
          />
          <Button type="submit" variant="outline" className="cursor-pointer">
            <Send />
          </Button>
        </div>
      </form>
    </div>
  );
}
