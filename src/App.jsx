import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./pages/DefaultLayout";
import Homepage from "./pages/Homepage";
import Pokedex from "./pages/Pokedex";
import About from "./pages/About";
import PokemonShow from "./pages/PokemonShow";
import NotFound from "./pages/NotFound";
import PokemonCreate from "./pages/PokemonStore";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={DefaultLayout}>
                    <Route index Component={Homepage} />
                    <Route path="/pokedex" Component={Pokedex} />
                    <Route path="/pokedex/:id" Component={PokemonShow} />
                    <Route path="/pokedex/create" Component={PokemonCreate} />
                    <Route path="/about" Component={About} />
                    <Route path="*" Component={NotFound} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
