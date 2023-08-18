import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import { AccountContext } from "./AccountContext";
import PrivateRoutes from "./PrivateRoutes";
import CustomLoader from "../shared/ui/CustomLoader";

const NavHandler = () => {
  const { user } = useContext(AccountContext);

  return user.loggedIn === null ? (
    <div className="h-full flex justify-center items-center">
      <CustomLoader />
    </div>
  ) : (
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
