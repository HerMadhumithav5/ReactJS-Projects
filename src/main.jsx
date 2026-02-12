import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import QRCode from "./qrcode.jsx";
import Login from "./Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  {/* <App/>
  <QRCode/> */}
  <Login/>
  </StrictMode>,
);
