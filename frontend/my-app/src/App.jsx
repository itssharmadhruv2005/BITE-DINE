import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import MyProfile from "./pages/MyProfile"; // ✅ new import
import MyOrders from "./pages/MyOrders";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/myprofile" element={<MyProfile />} /> {/* ✅ new route */}
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/myorders" element={<MyOrders />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
