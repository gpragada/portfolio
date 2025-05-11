import React, { useState } from "react";

const getBotReply = (input) => {
  const lower = input.toLowerCase();
  const responses = [
    {
      keywords: ["resume", "cv"],
      reply: "I have an extensive resume showcasing my skills, experience, and accomplishments. Please check out the Projects page for a detailed outlook!",
    },
    {
      keywords: ["project", "work", "experience"],
      reply: "I've been involved in various projects spanning data analytics, web development, and more. My GitHub and portfolio have all the details!",
    },
    {
      keywords: ["hello", "hi", "hey"],
      reply: "Hello there! How can I help you today?",
    },
  ];

  for (const { keywords, reply } of responses) {
    if (keywords.some((word) => lower.includes(word))) {
      return reply;
    }
  }
  return "That's interesting! Could you please elaborate or ask another question?";
};

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Bantu. Ask me about my resume or projects.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { text: input, sender: "user" };
    const botReply = { text: getBotReply(input), sender: "bot" };
    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");
  };

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      left: "20px",
      zIndex: 1000,
      width: "300px",
      background: "#fff",
      border: "1px solid #ddd",
      borderRadius: "5px",
      padding: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
    }}>
      <div style={{ maxHeight: "200px", overflowY: "auto", marginBottom: "10px" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === "bot" ? "left" : "right", margin: "5px 0" }}>
            <span style={{
              padding: "5px 10px",
              borderRadius: "15px",
              background: msg.sender === "bot" ? "#f1f1f1" : "#0078d4",
              color: msg.sender === "bot" ? "#333" : "#fff"
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <input
          style={{
            flex: 1,
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "3px"
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about my resume or projects"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button style={{
          marginLeft: "5px",
          padding: "5px 10px",
          borderRadius: "3px",
          border: "none",
          background: "#0078d4",
          color: "#fff"
        }} onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
