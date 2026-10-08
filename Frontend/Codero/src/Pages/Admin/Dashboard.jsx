import { useOutletContext } from "react-router-dom";
import TemplateStatsCard from "../../Components/TemplateStatCard";

const Dashboard = () => {
  const { templates } = useOutletContext();

  return (
    <div>
      {/* Dashboard Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

        <p className="mt-1 text-sm text-gray-500">
          Overview of your production system.
        </p>
      </div>

      {/* Statistics */}
      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Templates</p>

          <h2 className="mt-2 text-3xl font-bold">{templates.length}</h2>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Active Templates</p>

          <h2 className="mt-2 text-3xl font-bold">{templates.length}</h2>
        </div>
      </div>

      {/* Recent Templates */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            Production Templates
          </h2>

          <p className="text-sm text-gray-500">{templates.length} templates</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {templates.map((template) => (
            <TemplateStatsCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
