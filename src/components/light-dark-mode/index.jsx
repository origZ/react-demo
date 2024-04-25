import React, { memo } from "react";
import UseLocalStroage from "./useLocalStroage";
import styles from "./style.module.css";

const LightDarkMode = memo(() => {
  const [theme, setTheme] = UseLocalStroage("theme", "dark");

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);
  return (
    <div className={styles.lightdarkmode} data-theme={theme}>
      <div className={styles.container}>
        <p>Hello World</p>
        <button onClick={handleTheme}>Change Theme</button>
      </div>
    </div>
  );
});

export default LightDarkMode;
