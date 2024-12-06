import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <h1>This is Root</h1>
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
