import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Navbar1 from "../Shared/Navbar/Navbar1";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar1></Navbar1>
      </div>

      <div className="flex space-x-4">
        <div className="w-12 mt-40">
          <Navbar></Navbar>
        </div>
        <div className="bg-slate-200 p-3 rounded-2xl mb-12">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Root;
