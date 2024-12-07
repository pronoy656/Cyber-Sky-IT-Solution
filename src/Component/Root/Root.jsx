import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Navbar1 from "../Shared/Navbar/Navbar1";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar1></Navbar1>
      <div className="flex space-x-4">
        <div className="w-16 border">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
