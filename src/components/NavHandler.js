import { Routes, Route } from "react-router-dom";

import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";

const NavHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="*" element={<Auth />} />
    </Routes>
  );
};

export default NavHandler;
