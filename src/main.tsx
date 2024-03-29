import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/globals.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
