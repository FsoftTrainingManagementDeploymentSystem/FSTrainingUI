import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LanguageProvider } from "./app/context/LanguageContext.jsx";
import "./app/styles/index.css";

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
