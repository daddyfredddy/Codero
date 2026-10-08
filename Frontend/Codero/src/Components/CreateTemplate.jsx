import { useState } from "react";

const CreateTemplate = ({ onCancel, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    cameras: "",
    microphones: "",
    replay: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name: formData.name,
      cameras: Number(formData.cameras),
      microphones: Number(formData.microphones),
      replay: Number(formData.replay),
    });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onCancel}
          className="mb-4 text-sm text-gray-500 hover:text-gray-900"
        >
          ← Back to Templates
        </button>

        <h1 className="text-2xl font-bold text-gray-900">
          Create New Template
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Configure the resources for your production template.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl rounded-2xl bg-white p-8 shadow-sm"
      >
        {/* Template Name */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Template Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. OB1"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-gray-500"
          />
        </div>

        {/* Cameras */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Number of Cameras
          </label>

          <input
            type="number"
            name="cameras"
            value={formData.cameras}
            onChange={handleChange}
            placeholder="e.g. 12"
            min="0"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-gray-500"
          />
        </div>

        {/* Microphones */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Number of Microphones
          </label>

          <input
            type="number"
            name="microphones"
            value={formData.microphones}
            onChange={handleChange}
            placeholder="e.g. 8"
            min="0"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-gray-500"
          />
        </div>

        {/* Replay */}
        <div className="mb-8">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Replay Machines
          </label>

          <input
            type="number"
            name="replay"
            value={formData.replay}
            onChange={handleChange}
            placeholder="e.g. 3"
            min="0"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-gray-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            Create Template
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTemplate;
