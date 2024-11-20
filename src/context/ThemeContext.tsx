import { useMemo, useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeProvider";

interface Props {
	children: ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState<"light" | "dark">("light");
	const toggleTheme = () => {
		setTheme((theme) => (theme === "light" ? "dark" : "light"));
	};

	const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
