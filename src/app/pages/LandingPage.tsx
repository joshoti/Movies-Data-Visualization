import { Outlet, useLocation, Navigate } from "react-router-dom";
import { NavigationBar } from "../components/Analysis/NavigationBar";

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
    <>
      <div
        style={{
          height: "100vh",
        }}
      >
        {/* Top dynamic content */}
        <div
          style={{
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </div>

        <NavigationBar />
      </div>
    </>
  );
}
