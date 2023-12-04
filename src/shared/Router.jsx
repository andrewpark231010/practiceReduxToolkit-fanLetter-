import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Router() {
  const isLoggedIn = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/home" /> : <Register />}
        />

        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="*"
          element={<Navigate replace to={isLoggedIn ? "/home" : "/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
