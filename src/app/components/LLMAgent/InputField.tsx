import { TextInput } from "@mantine/core";
import classes from "./LLMAgent.module.css";
import { padding } from "./ChatSpace";

export function InputField({ application }: any) {
  return (
    <TextInput
      radius="lg"
      size="md"
      variant="filled"
      placeholder={`Message model. Hit "Enter" to send`}
      classNames={{ input: classes.input }}
      pl={padding}
      pr={padding}
      mt={5}
    />
  );
}
