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
      <div id="head"></div>
    </div>
  );
}
