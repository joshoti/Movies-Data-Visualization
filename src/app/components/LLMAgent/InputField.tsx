import { useContext, useState } from "react";
import { Button, Group, Textarea } from "@mantine/core";
import classes from "./LLMAgent.module.css";
import { padding } from "./ChatSpace";
import { ChatContext } from "../../hooks/ChatProvider";

export function InputField({ application }: any) {
  const [inputValue, setInputValue] = useState("");

  const chatContext = useContext(ChatContext);

  const addMessage = ({ role, message, application }: any) => {
    chatContext.addMessage({ role, message, application });
  };
  const clearMessages = () => {
    chatContext.clearMessages({ application });
  };

  const handleEnterKey = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents the default newline behavior

      if (inputValue === "") {
        return;
      }

      addMessage({
        role: "user",
        message: inputValue,
        application: application,
      });
      setInputValue("");
    }
  };

  return (
    <Group align="end" pl={padding} pr={padding} mt={5}>
      <Textarea
        flex={1}
        radius="lg"
        autosize
        maxRows={6}
        size="md"
        variant="filled"
        placeholder={`Message model. Hit "Enter" to send`}
        classNames={{ input: classes.input }}
        value={inputValue}
        onChange={(event) => setInputValue(event.currentTarget.value)}
        onKeyDown={handleEnterKey}
      />
      <Button radius="md" size="md" onClick={clearMessages}>
        Clear Chat
      </Button>
    </Group>
  );
}
