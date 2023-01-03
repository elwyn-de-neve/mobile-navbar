import './App.css';
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav/Nav";
import Login from "./pages/Login";

function App() {

    return (
        <>
            <Nav/>
            <main className="outer-container">
                <Routes>
                    <Route path="/" element={ <Home/> }></Route>
                    <Route path="/about" element={ <About/> }></Route>
                    <Route path="/contact" element={ <Contact/> }></Route>
                    <Route path="/login" element={ <Login/> }></Route>
                </Routes>
            </main>
        </>
    );
}

export default App;
