import React from "react";
import { Outlet } from "react-router-dom";

const User: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default User;
