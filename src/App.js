import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Dashboard from "./Pages/Dashboard/dashboard";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
       <Route path="/" element={<Dashboard />} />
    </Routes>
    </>
  );
}

export default App;
