import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
// import './index.css'

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</StrictMode>
);