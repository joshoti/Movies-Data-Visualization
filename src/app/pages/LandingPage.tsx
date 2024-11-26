import { Outlet, useLocation, Navigate } from "react-router-dom";
import { NavigationBar } from "../components/Analysis/NavigationBar";
import { Flex } from "@mantine/core";

export const docsScrollOptions: ScrollIntoViewOptions = {
  behavior: "auto",
  block: "end",
};

export function LandingPageLayout() {
  const location = useLocation();
  if (location.pathname === "/") {
    Navigate({ to: "/analysis" });
  }

  return (
    <Flex direction={"column"} h={"100vh"}>
      {/* Top dynamic content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <Outlet />
      </div>

      <NavigationBar />
    </Flex>
  );
}
