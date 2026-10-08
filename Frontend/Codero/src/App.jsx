import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Pages/AdminLogin";
import ChiefEngineer from "./Pages/ChiefEngineer";
import AudioEngineer from "./Pages/AudioEngineer";
import Home from "./Pages/Home";
import AdminLayout from "./Layouts/AdminLayout";
import Dashboard from "./Pages/Admin/Dashboard";
import ProductionTemplates from "./Pages/Admin/ProductionTemplates";
import Topbar from "./Pages/Admin/Topbar";
import Sidebar from "./Pages/Admin/Sidebar";
import Calendar from "./Pages/Admin/Calendar";
import Reports from "./Pages/Admin/Reports";
import AccessCodes from "./Pages/Admin/AccessCodes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route
              path="productionTemplates"
              element={<ProductionTemplates />}
            />
            <Route path="calendar" element={<Calendar />} />
            <Route path="reports" element={<Reports />} />
            <Route path="accessCodes" element={<AccessCodes />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/chiefEng" element={<ChiefEngineer />} />
          <Route path="/audioEng" element={<AudioEngineer />} />
          <Route path="/topbar" element={<Topbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
