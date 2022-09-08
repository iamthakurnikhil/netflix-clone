import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProctectedRoute from "./components/ProctectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
    <AuthContextProvider>

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/account" element={<ProctectedRoute>
          <Account/>
        </ProctectedRoute>}></Route>
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
