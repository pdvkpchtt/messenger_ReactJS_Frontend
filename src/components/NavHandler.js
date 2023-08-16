import { Routes, Route } from "react-router-dom";

import Auth from "./Auth/Auth";

const NavHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="*" element={<Auth />} />
    </Routes>
  );
};

export default NavHandler;
