import { createContext, useEffect, useState } from "react";
import { storageOption } from "../components/LLMAgent/ChatSpace";
import { MessageBubbleArgs } from "../components/LLMAgent/MessageTemplate";

type ChatContextT = {
  probeChatHistory: Array<MessageBubbleArgs> | [];
  setProbeChatHistory: React.Dispatch<
    React.SetStateAction<Array<MessageBubbleArgs> | []>
  >;
  predictChatHistory: Array<MessageBubbleArgs> | [];
  setPredictChatHistory: React.Dispatch<
    React.SetStateAction<Array<MessageBubbleArgs> | []>
  >;
  addMessage: ({ role, message, application }: any) => void;
  clearMessages: ({ application }: any) => void;
};

export const ChatContext = createContext<ChatContextT>({} as ChatContextT);

export const ChatProvider = ({ children }: any) => {
  const [probeChatHistory, setProbeChatHistory] = useState<
    Array<MessageBubbleArgs> | []
  >([]);
  const [predictChatHistory, setPredictChatHistory] = useState<
    Array<MessageBubbleArgs> | []
  >([]);

  // Load chat history
  useEffect(() => {
    const savedChat = storageOption.getItem("probeChatHistory");
    if (savedChat) {
      setProbeChatHistory(JSON.parse(savedChat));
    }
  }, []);
  useEffect(() => {
    const savedChat = storageOption.getItem("predictChatHistory");
    if (savedChat) {
      setPredictChatHistory(JSON.parse(savedChat));
    }
  }, []);

  // Save chat history
  useEffect(() => {
    storageOption.setItem("probeChatHistory", JSON.stringify(probeChatHistory));
  }, [probeChatHistory]);
  useEffect(() => {
    storageOption.setItem(
      "predictChatHistory",
      JSON.stringify(predictChatHistory)
    );
  }, [predictChatHistory]);

  const addMessage = ({ role, message, application }: any) => {
    const newMessage = { role: role, message: message };
    if (application === "probe") {
      setProbeChatHistory((probeChatHistory) => [
        ...probeChatHistory,
        newMessage,
      ]);
    } else if (application === "predict") {
      setPredictChatHistory((predictChatHistory) => [
        ...predictChatHistory,
        newMessage,
      ]);
    }
  };

  const clearMessages = ({ application }: any) => {
    if (application === "probe") {
      setProbeChatHistory([]);
    } else if (application === "predict") {
      setPredictChatHistory([]);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        probeChatHistory,
        setProbeChatHistory,
        predictChatHistory,
        setPredictChatHistory,
        addMessage,
        clearMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
