import { useEffect, useContext } from "react";
import { MessageBubble } from "./MessageTemplate";
import { docsScrollOptions } from "../../pages/LandingPage";
import { scrollToElement } from "../../utils/scoll";
import { ChatContext } from "../../hooks/ChatProvider";

export const padding = 150;

export const storageOption = sessionStorage;

export function ChatSpace({ application }: any) {
  // To scroll to the bottom of chat
  useEffect(() => {
    scrollToElement("head", docsScrollOptions);
  });

  const chatContext = useContext(ChatContext);
  const chatHistory =
    application === "probe"
      ? chatContext.probeChatHistory
      : chatContext.predictChatHistory;

  const sampleMessages = [
    { role: "user", message: "How are you today?" },
    { role: "agent", message: "Piss off" },
    {
      role: "user",
      message:
        "Consider a database for students enrolling in courses and professors teaching those courses.  Provide a (Semantic Data Model) SDM model of this database? You can also provide the ERDM of this database",
    },
    {
      role: "agent",
      message:
        "Here's how we can approach the Semantic Data Model (SDM) and the Enhanced Entity-Relationship Data Model (ERDM) for a database involving students enrolling in courses and professors teaching those courses: Semantic Data Model (SDM) In a Semantic Data Model, the entities and their relationships are represented in a simple and intuitive manner to capture the meaning behind the data. Here's an SDM representation of this system:",
    },
    {
      role: "user",
      message:
        "Consider a database for students enrolling in courses and professors teaching those courses.  Provide a (Semantic Data Model) SDM model of this database? You can also provide the ERDM of this database",
    },
    {
      role: "agent",
      message:
        "Here's how we can approach the Semantic Data Model (SDM) and the Enhanced Entity-Relationship Data Model (ERDM) for a database involving students enrolling in courses and professors teaching those courses: Semantic Data Model (SDM) In a Semantic Data Model, the entities and their relationships are represented in a simple and intuitive manner to capture the meaning behind the data. Here's an SDM representation of this system:",
    },
    {
      role: "user",
      message:
        "Consider a database for students enrolling in courses and professors teaching those courses.  Provide a (Semantic Data Model) SDM model of this database? You can also provide the ERDM of this database",
    },
    {
      role: "agent",
      message:
        "Here's how we can approach the Semantic Data Model (SDM) and the Enhanced Entity-Relationship Data Model (ERDM) for a database involving students enrolling in courses and professors teaching those courses: Semantic Data Model (SDM) In a Semantic Data Model, the entities and their relationships are represented in a simple and intuitive manner to capture the meaning behind the data. Here's an SDM representation of this system:",
    },
  ];

  return (
    <div
      style={{
        paddingLeft: padding,
        paddingRight: padding,
      }}
    >
      {chatHistory.map(({ role, message }) => (
        <MessageBubble role={role} message={message} />
      ))}
      {sampleMessages.map(({ role, message }) => (
        <MessageBubble role={role} message={message} />
      ))}
      <div id="head"></div>
    </div>
  );
}
