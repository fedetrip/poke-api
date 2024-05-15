import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { DetallePokemon } from "./pages/DetallePokemon";
import { ResultadoBusqueda } from "./components/ResultadoBusqueda";
import "./css/App.css";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/pokemon/:id"
            element={<DetallePokemon />}
          />
          <Route
            path="/search"
            element={<ResultadoBusqueda />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
