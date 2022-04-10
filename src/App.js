import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import Registeration from "./pages/register";
import HomePage from "./pages/homePage";
import Products from "./pages/products";
import Employee from "./pages/employee";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
          <Route path="/register" element={<Registeration />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
