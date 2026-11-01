"use client";

import { useState, createContext, useEffect } from "react";

interface ThemeType {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

// todo: creating theme context
export const ThemeContext = createContext<ThemeType>({
  theme: "light",
  setTheme: () => {},
});

interface Provider {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: Provider) {
  const [themeState, setThemeState] = useState<"light" | "dark">("light");

useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark")
    setThemeState(savedTheme);
}, []);

  useEffect(() => {
    localStorage.setItem("theme", themeState);
  }, [themeState]);

  return (
    <ThemeContext.Provider
      value={{
        theme: themeState,
        setTheme: setThemeState,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
