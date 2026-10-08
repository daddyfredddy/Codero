const TemplateStatsCard = ({ template }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Production Template</p>

          <h2 className="mt-1 text-xl font-bold text-gray-900">
            {template.name}
          </h2>
        </div>

        <div className="rounded-xl bg-gray-100 px-3 py-2 text-sm">Active</div>
      </div>

      {/* Equipment */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-gray-50 p-3">
          <p className="text-xs text-gray-500">Cameras</p>

          <p className="mt-1 text-lg font-semibold">{template.cameras}</p>
        </div>

        <div className="rounded-lg bg-gray-50 p-3">
          <p className="text-xs text-gray-500">Mics</p>

          <p className="mt-1 text-lg font-semibold">{template.microphones}</p>
        </div>

        <div className="rounded-lg bg-gray-50 p-3">
          <p className="text-xs text-gray-500">Replay</p>

          <p className="mt-1 text-lg font-semibold">{template.replay}</p>
        </div>
      </div>

      {/* Button */}
      <button className="mt-5 w-full rounded-lg border border-gray-200 py-2 text-sm font-medium hover:bg-gray-50">
        View Template
      </button>
    </div>
  );
};

export default TemplateStatsCard;
