import { Switch } from "@nextui-org/react";
import * as DarkReader from "darkreader";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DarkModeSwitch = () => {
  const [isDark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    DarkReader.setFetchMethod(window.fetch);
  }, []);

  useEffect(() => {
    if (isDark) {
      // Adding timeout is functionaly unecessary but fixes the issue with the switch's coloring upon first render
      setTimeout(() => {
        DarkReader.auto({});
      }, 10);
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setDark(!!e.matches);
        !e.matches ? DarkReader.disable() : DarkReader.auto({});
      });
  }, []);

  const toggleDark = () => {
    isDark ? DarkReader.disable() : DarkReader.auto({});
    setDark(!isDark);
  };

  const inferiorBrowser = () => {
    // add toast here
    toast("Sorry, this feature is not supported in your browser.", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  let isFF = navigator.userAgent.search("Firefox") != -1; // True if user browser is Firefox, False if not duh

  useEffect(() => {
    if (!isFF) {
      setTimeout(() => {
        DarkReader.auto({});
        console.log("Test fix happened");
      }, 3000);
    }
  });

  return (
    <Switch
      id="DarkToggle"
      checked={isDark}
      onChange={toggleDark} // inferiorBrowser does nothing yet BUT IT WILL
      iconOff={<FontAwesomeIcon icon={faSun} />}
      iconOn={<FontAwesomeIcon icon={faMoon} />}
      style={{}}
      disabled={!isFF}
      onClick={!isFF ? inferiorBrowser : undefined}
    />
  );
};

export default DarkModeSwitch;
