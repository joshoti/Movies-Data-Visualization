import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { MantineProvider } from "@mantine/core";
import { Router } from "./Router";
import { theme } from "./theme";
import { Notifications } from "@mantine/notifications";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <Router />
    </MantineProvider>
  );
}
