import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./pages/DefaultLayout";
import Homepage from "./pages/Homepage";
import Pokedex from "./pages/Pokedex";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={DefaultLayout}>
                    <Route index Component={Homepage} />
                    <Route path="/pokedex" Component={Pokedex} />
                    <Route path="/about" Component={About} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
