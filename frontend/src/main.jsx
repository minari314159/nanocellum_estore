import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/users/AuthContext";
import React from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<App />
		</AuthProvider>
	</React.StrictMode>
);
