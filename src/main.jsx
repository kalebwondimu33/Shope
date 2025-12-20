import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { CategoriesProvider } from "./context/CategoriesContext.jsx";
import { CardDropProvider } from "./context/CardDropContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CardDropProvider>
            <App />
          </CardDropProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
