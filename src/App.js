import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import CompletedTask from "./Pages/CompletedTask/CompletedTask";
import Navbar from "./Pages/Home/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<Home />} />
                <Route path="/completedTask" element={<CompletedTask />} />
            </Routes>
        </div>
    );
}

export default App;
