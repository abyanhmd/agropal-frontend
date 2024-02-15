import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "@pages/Authentication/Login.jsx";
import Register from "@pages/Authentication/Register.jsx";
import Home from "@pages/Home/Home.jsx";
import Dashboard from "@pages/Home/Dashboard.jsx";
import Inventory from "@pages/Home/Inventory/Inventory.jsx";
import Weather from "@pages/Home/Weather/Weather.jsx";
import AddProduct from "@pages/Home/Inventory/AddProduct.jsx";
import AddLocation from "@pages/Home/Weather/AddLocation";
import Financial from "@pages/Home/Financial";
import Settings from "@pages/Home/Settings/Settings";
import Account from "@pages/Home/Account/Account";
import ForgetPassword from "@pages/Authentication/ForgetPassword";
import ForgetPasswordConfirmation from "@pages/Authentication/ForgetPasswordConfirmation";
import Docs from "@pages/Docs/Docs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/create" element={<AddProduct />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/weather/add" element={<AddLocation />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route
          path="/forget-password-confirmation"
          element={<ForgetPasswordConfirmation />}
        />
        <Route path="/api/docs" element={<Docs />} />
      </Routes>
    </>
  );
}

export default App;
