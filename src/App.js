import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Dashboard from "./Pages/Dashboard/dashboard";
import Login from "./Pages/Authentication/login";
import Signup from "./Pages/Authentication/signup";
import Home from "./Pages/Home/home";
import Archived from "./Pages/Archived/archived";
import Labels from "./Pages/Labels/labels";
import Trash from "./Pages/Trash/trash";
import Mockman from "mockman-js";
import { RestrictAuth } from "./Components/ReqRisAuth/RestrictAuth";



function App() {

  const location = useLocation();
  return (
    <>
    {location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/' ? null:<Navbar />}
    <Routes>
       <Route path="/" element={<Dashboard />} />
       <Route element={<RestrictAuth/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
       </Route>
       <Route path='/notes' element={<Home />} />
       <Route path='/archived' element={<Archived />} />
       <Route path='/labels' element={<Labels />} />
       <Route path="/trash" element={<Trash />} />
       <Route path="/mockman" element={<Mockman />} />
    </Routes>
    </>
  );
}

export default App;
