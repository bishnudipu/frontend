import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/topbar/topbar";
import DashBoard from "./pages/dashboard/dashboard";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import VendorHome from "./pages/vendorHome/vendorhomepage";
import VendorDashboard from "./components/vendors/dashboard/vendordashboard";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<Login />} />
          <Route exact={true} path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
      {/* <DashBoard /> */}
    </>
  );
}

export default App;
