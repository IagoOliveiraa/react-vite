import { BrowserRouter, Router, Routes } from "react-router-dom";
import { home } from "./pages/home";
import { filmes } from "./pages/filmes";
import { add } from "./pages/add";
import { serie } from "./pages/serie";
import { anima } from "./pages/anima";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={Home} />
                <Route path="/product" element={add} />
                <Route path="/shop" element={anima} />
                <Route path="/login" element={anima} />
                <Route path="/signup" element={filmes} />
                <Route path="/admin" element = {serie} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;