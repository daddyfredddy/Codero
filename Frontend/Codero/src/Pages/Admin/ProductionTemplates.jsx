import { useState } from "react";
import { useOutletContext } from "react-router-dom";

// import TemplateStatsCard from '../../Components/TemplateStatsCard';
import CreateTemplate from "../../Components/CreateTemplate";
import TemplateStatsCard from "../../Components/TemplateStatCard";

const ProductionTemplates = () => {
  const { templates, addTemplate } = useOutletContext();

  const [showCreateTemplate, setShowCreateTemplate] = useState(false);

  const handleCreateTemplate = (newTemplate) => {
    addTemplate(newTemplate);

    setShowCreateTemplate(false);
  };

  return (
    <div className="w-full">
      {showCreateTemplate ? (
        <CreateTemplate
          onCancel={() => setShowCreateTemplate(false)}
          onSubmit={handleCreateTemplate}
        />
      ) : (
        <>
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Production Templates
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Create and manage your production templates.
              </p>
            </div>

            <button
              onClick={() => setShowCreateTemplate(true)}
              className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              + Create New Template
            </button>
          </div>

          {/* Template Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {templates.map((template) => (
              <TemplateStatsCard key={template.id} template={template} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductionTemplates;
