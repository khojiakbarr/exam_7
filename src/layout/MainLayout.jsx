import React from "react";
import MyNavbar from "../components/MyNavbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col">
      <MyNavbar />
      <div className="h-[calc(100vh-62px)] dark:bg-gray-700 container p-3">
        <Outlet />
      </div>
    </div>
  );
}
