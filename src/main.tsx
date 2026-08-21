import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/styles/globals.css";
import { AppRouter } from "@/app/router";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Elemento #root não encontrado");

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
);
