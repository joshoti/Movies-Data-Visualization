import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Router } from "./Router";
import { theme } from "./theme";
import { ChatProvider } from "./app/hooks/ChatProvider";

export default function App() {
  return (
    <ChatProvider>
      <MantineProvider theme={theme}>
        <Router />
      </MantineProvider>
    </ChatProvider>
  );
}
