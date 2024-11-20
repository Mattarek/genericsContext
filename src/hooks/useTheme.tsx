import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("Provider is required!");
	}
	return context;
};
