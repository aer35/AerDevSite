import App from "./App";
import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
import { NextUIProvider, getDocumentTheme } from "@nextui-org/react";

let root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <NextUIProvider>
    <App />
  </NextUIProvider>
);
