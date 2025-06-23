export default function TaskModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-md shadow-xl w-full max-w-md p-6 relative">
        <button
          className="absolute top-3 right-4 text-green-900 text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-6">Task Details</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Title</label>
            <input
              type="text"
              placeholder="Add a task title"
              className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-600">Priority</label>
              <select className="w-full mt-1 border rounded px-3 py-2">
                <option>Select priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm text-gray-600">Deadline</label>
              <input
                type="date"
                className="w-full mt-1 border rounded px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600">Comments</label>
            <textarea
              placeholder="Add any comments to your task"
              className="w-full mt-1 border rounded px-3 py-2 h-24 resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border text-green-900 border-green-900 hover:bg-green-100"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded text-white bg-green-900 hover:bg-green-800"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
