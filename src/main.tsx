//import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./lazy/root";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from "notistack";
import { setSnackbar } from "./api/snackbar";

function SnackbarInitializer() {
  const { enqueueSnackbar } = useSnackbar();
  setSnackbar(enqueueSnackbar);
  return null;
}

createRoot(document.getElementById("root")!).render(
  <SnackbarProvider maxSnack={3}>
    <SnackbarInitializer />
    <Router>
      <App />
    </Router>
  </SnackbarProvider>
);
