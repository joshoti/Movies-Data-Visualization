import { useContext, useState } from "react";
import { Button, Flex, Group, Textarea, Modal, Paper } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconArrowUp } from "@tabler/icons-react";
import classes from "./LLMAgent.module.css";
import { padding } from "./ChatSpace";
import { ChatContext } from "../../hooks/ChatProvider";
import { api } from "../../api/axios-api";

export function InputField({ application }: any) {
  const sendButtonSize = 40;
  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const chatContext = useContext(ChatContext);

  const communicateWithAgent = (message: string) => {
    api
      .post(`/${application}`, { prompt: message })
      .then(({ data }) => {
        addMessage({ role: "agent", message: data, application: application });
      })
      .catch((error) => {
        notifications.show({
          color: "red",
          title: "Error Occurred!",
          autoClose: 7000,
          message:
            "The backend might not be connected, hence unable to communicate with model",
        });
      });
  };

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
      communicateWithAgent(inputValue);
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
      <Flex
        className={classes.sendButton}
        justify="center"
        align="center"
        style={{
          marginRight: 10,
          borderRadius: sendButtonSize / 2,
          height: sendButtonSize,
          width: sendButtonSize,
        }}
      >
        <IconArrowUp size={sendButtonSize - 10} style={{ color: "white" }} />
      </Flex>
      <Button
        color="rgb(134, 139, 230)"
        variant="outline"
        radius="md"
        size="md"
        onClick={() => setOpenModal(true)}
      >
        Clear Chat
      </Button>
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        title="Do you want to clear chat?"
        centered
        withCloseButton={false}
      >
        <Paper>
          <Button
            color="red"
            variant="outline"
            radius="md"
            size="md"
            mr={20}
            onClick={() => {
              clearMessages();
              setOpenModal(false);
            }}
          >
            Confirm
          </Button>
          <Button
            color="gray"
            radius="md"
            size="md"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </Button>
        </Paper>
      </Modal>
    </Group>
  );
}
