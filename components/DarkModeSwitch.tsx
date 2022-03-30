import { Switch } from "@nextui-org/react";
import * as DarkReader from "darkreader";
import { useState, useEffect } from "react";

const DarkModeSwitch = () => {
  const [isDark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (isDark) {
      DarkReader.auto({});
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setDark(!!e.matches);
        !e.matches ? DarkReader.disable() : DarkReader.auto({});
      });
  }, []);

  const handleChange = () => {
    isDark ? DarkReader.disable() : DarkReader.auto({});
    setDark(!isDark);
  };

  return <Switch checked={isDark} onChange={handleChange} />;
};

export default DarkModeSwitch;
