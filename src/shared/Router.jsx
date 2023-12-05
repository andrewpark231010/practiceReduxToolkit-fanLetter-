import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Router() {
  // const 이건뭘까 = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={auth.isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={auth.isLoggedIn ? <Navigate to="/" /> : <Register />}
        />

        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="*"
          element={<Navigate replace to={auth.isLoggedIn ? "/" : "/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
