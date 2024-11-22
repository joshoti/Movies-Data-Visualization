import { Flex, Tabs } from "@mantine/core";
import classes from "./Analysis.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export function NavigationBar() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("analysis");

  const location = useLocation();
  /**
   * Sets active tab. Useful for when the page is reached from
   * the browser's URL instead of being clicked in the docs page.
   */
  const styleActiveTab = () => {
    const urlPrefix = "/";
    const currentPath = location.pathname.substring(urlPrefix.length);
    if (activeTab !== currentPath) {
      setActiveTab(currentPath);
    }
  };
  styleActiveTab();

  const setActiveTabAndNavigate = (value: string) => {
    navigate(`/${value}`, { replace: true });
  };

  /**
   * Returns the style for active tab/menu to one tab and regular style for the others
   * @param tabName is the name of a tab/menu
   * @returns css class(es)
   */
  const getTabStyle = (tabName: string) => {
    if (tabName !== activeTab) return `${classes.menuText} ${classes.tabs}`;
    return `${classes.menuText} ${classes.tabs} ${classes.focus}`;
  };

  const useCaseMenuHeight = 50;

  return (
    <Flex justify={"center"} h={100} align={"center"}>
      <Tabs
        color="rgb(220, 220, 220)"
        radius={10}
        variant="pills"
        defaultValue={activeTab}
      >
        <Tabs.List w={"100%"}>
          {/* 1 */}
          <Tabs.Tab
            onFocus={() => setActiveTabAndNavigate("analysis")}
            h={useCaseMenuHeight}
            value="analysis"
            className={getTabStyle("analysis")}
          >
            Analysis
          </Tabs.Tab>

          {/* 2 */}
          <Tabs.Tab
            onFocus={() => setActiveTabAndNavigate("probe")}
            h={useCaseMenuHeight}
            value="probe"
            className={getTabStyle("probe")}
          >
            Probe
          </Tabs.Tab>

          {/* 3 */}
          <Tabs.Tab
            onFocus={() => setActiveTabAndNavigate("predict")}
            h={useCaseMenuHeight}
            value="predict"
            className={getTabStyle("predict")}
          >
            Predict
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Flex>
  );
}
