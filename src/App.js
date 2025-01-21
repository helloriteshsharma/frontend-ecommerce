import "./App.css";
import AllRoutes from "./Router/AllRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function App() {
  const location = useLocation();

  const isRestrictedPath = [
  "/login",
  "/register-user",
  "/admin-login",
  "/admin/admin"
].includes(location.pathname);

console.log("API Base URL:", API_BASE_URL);

return (
  <div>
    {!isRestrictedPath && <Navbar />}
    <div style={{ minHeight: "90vh" }}>
      <AllRoutes />
    </div>
    {!isRestrictedPath && <Footer />}
  </div>
);

}
export default App;

