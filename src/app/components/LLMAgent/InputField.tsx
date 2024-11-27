import { useState } from "react";
import { Textarea } from "@mantine/core";
import classes from "./LLMAgent.module.css";
import { padding } from "./ChatSpace";

export function InputField({ application }: any) {
  const [inputValue, setInputValue] = useState("");

  const handleEnterKey = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents the default newline behavior
      console.log(inputValue);
      setInputValue("");
    }
  };

  return (
    <Textarea
      radius="lg"
      autosize
      maxRows={6}
      size="md"
      variant="filled"
      placeholder={`Message model. Hit "Enter" to send`}
      classNames={{ input: classes.input }}
      pl={padding}
      pr={padding}
      mt={5}
      value={inputValue}
      onChange={(event) => setInputValue(event.currentTarget.value)}
      onKeyDown={handleEnterKey}
    />
  );
}
