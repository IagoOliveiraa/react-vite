import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Filmes from "./pages/filmes";
import Add from "./pages/add";
import Serie from "./pages/serie";
import Anima from "./pages/anima";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Add />} />
                <Route path="/shop" element={<Anima />} />
                <Route path="/login" element={<Anima />} />
                <Route path="/signup" element={<Filmes />} />
                <Route path="/admin" element={<Serie />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;