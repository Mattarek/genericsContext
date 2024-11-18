import { createContext } from "react";

export interface ThemeContext {
	theme: "light" | "dark";
	toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContext | undefined>(undefined);
