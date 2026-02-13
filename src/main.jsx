import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import QRCode from "./qrcode.jsx";
import Login from "./Login.jsx";
import AdviceApp from "./AdviceApp..jsx";
import Register from "./Register.jsx";

createRoot(document.getElementById("root")).render(
   <AdviceApp/>
  // <Register />,
  //  <App/>
  // <QRCode/>
  //  <Login/>  ,
);
