import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Authentication/Login.jsx";
import Register from "./pages/Authentication/Register.jsx";
import Home from "./pages/Home/Home.jsx";
import Dashboard from "./pages/Home/Dashboard.jsx";
import Inventory from "./pages/Home/Inventory.jsx";
import Weather from "./pages/Home/Weather.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="weather" element={<Weather />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
