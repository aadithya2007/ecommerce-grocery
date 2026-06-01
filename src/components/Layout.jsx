import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
