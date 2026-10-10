import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Admin/Sidebar";
import Topbar from "../Pages/Admin/Topbar";

const AdminLayout = () => {
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "OB1",
      cameras: 40,
      microphones: 9,
      replay: 3,
    },
    {
      id: 2,
      name: "OB2",
      cameras: 8,
      microphones: 6,
      replay: 2,
    },
  ]);

  const addTemplate = (newTemplate) => {
    setTemplates((prevTemplates) => [
      ...prevTemplates,
      {
        ...newTemplate,
        id: Date.now(),
      },
    ]);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div class="text-white w-1/5 bg-gray-900 min-h-screen">
        <Sidebar />{" "}
      </div>

      {/* Main area */}
      <div className="flex-1">
        {/* Topbar */}
        <Topbar />

        {/* Page content */}
        <main className="p-6">
          <Outlet
            context={{
              templates,
              addTemplate,
            }}
          />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
