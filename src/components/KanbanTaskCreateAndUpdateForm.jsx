import React, { useState } from "react"
import { useStateContext } from "../contextProvider/contextProvider"

const KanbanTaskCreateAndUpdateForm = ({ task, onSave, onClose }) => {
  const { themeColor } = useStateContext()
  const [formData, setFormData] = useState(task)

  const inputStyles =
    "mt-1 block w-full p-2 border dark:border-gray-700 outline-none rounded-md dark:bg-darkSecondary"
  const formLabelSytles = "text-sm font-medium"

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    const { taskName, desc, color, assignedTo, assignedDate, priority } =
      formData

    if (
      !taskName ||
      !desc ||
      !color ||
      !assignedTo ||
      !assignedDate ||
      !priority
    ) {
      alert("All fields must be filled!")
      return
    }

    onSave(formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-lightPrimary dark:bg-darkThird text-gray-700 dark:text-darkText p-6 rounded-md w-4/5 md:w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">
          {task.id ? "Edit Task" : "Add New Task"}
        </h2>

        <div className="mb-4">
          <label className={formLabelSytles}>Task Name</label>
          <input
            type="text"
            name="taskName"
            value={formData.taskName}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>

        <div className="mb-4">
          <label className={formLabelSytles}>Description</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            className={inputStyles}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className={formLabelSytles}>Color</label>
          <div className="relative">
            <input
              type="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="absolute w-full h-full opacity-0 cursor-pointer"
              style={{ backgroundColor: formData.color }}
            />
            <div
              className="w-full h-10 rounded-md mt-1"
              style={{ backgroundColor: formData.color }}
            ></div>
          </div>
        </div>

        <div className="mb-4">
          <label className={formLabelSytles}>Assigned To</label>
          <input
            type="text"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>

        <div className="mb-4">
          <label className={formLabelSytles}>Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className={inputStyles}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:opacity-90"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-md text-gray-100 hover:opacity-90"
            style={{ backgroundColor: themeColor }}
          >
            {task.id ? "Save Changes" : "Add Task"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default KanbanTaskCreateAndUpdateForm
