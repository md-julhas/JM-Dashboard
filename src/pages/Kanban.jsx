import React, { useState } from "react"
import { Helmet } from "react-helmet-async"
import {
  Footer,
  KanbanTaskCreateAndUpdateForm,
  LayoutWithSideAndNavbar,
} from "../components"
import { useStateContext } from "../contextProvider/contextProvider"
import { IoSearchOutline } from "react-icons/io5"
import { kanbanInitialData } from "../constants/data"

const getFormattedDate = () => {
  const today = new Date()
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }
  return today.toLocaleDateString("en-GB", options)
}

const Kanban = () => {
  const { themeColor } = useStateContext()
  const [tasks, setTasks] = useState(kanbanInitialData)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentTask, setCurrentTask] = useState({
    id: "",
    taskName: "",
    desc: "",
    color: "#922B8C",
    assignedTo: "",
    assignedDate: getFormattedDate(),
    priority: "low",
  })

  const taskHeadingStyles = "text-lg font-semibold mb-4 select-none"

  const resetForm = () => {
    setCurrentTask({
      id: "",
      taskName: "",
      desc: "",
      color: "#922B8C",
      assignedTo: "",
      assignedDate: getFormattedDate(),
      priority: "low",
    })
  }

  const moveTask = (task, from, to) => {
    if (from === to) return

    setTasks((prev) => ({
      ...prev,
      [from]: prev[from].filter((t) => t.id !== task.id),
      [to]: [...prev[to], task],
    }))
  }

  const renderTasks = (tasks, column) => (
    <div className="rounded-md">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="mb-2 cursor-pointer"
          draggable
          onDragStart={(e) =>
            e.dataTransfer.setData("task", JSON.stringify(task))
          }
        >
          <div
            className="border dark:border-gray-700 p-5 bg-lightPrimary dark:bg-darkThird"
            style={{ borderLeftColor: task.color }}
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-semibold truncate">{task.taskName}</h2>
              <div className="flex gap-2 text-sm">
                <button
                  className="text-green-600 hover:text-green-800"
                  onClick={() => {
                    setCurrentTask(task)
                    setIsModalOpen(true)
                  }}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDeleteTask(task, column)}
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-1 truncate">
              {task.desc}
            </p>

            <div className="text-sm text-gray-500 flex flex-col gap-2 mt-3">
              <div className="capitalize truncate">
                <b>Assign : </b>
                <span>{task.assignedTo}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>{task.assignedDate}</span>
                <span
                  className={`text-xs px-2 py-[2px] capitalize w-fit text-gray-100 rounded-full ${
                    task.priority === "low"
                      ? "bg-pink-400"
                      : task.priority === "medium"
                      ? "bg-teal-500"
                      : task.priority === "high"
                      ? "bg-blue-400"
                      : ""
                  }`}
                >
                  {task.priority}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const handleDrop = (e, toColumn) => {
    const task = JSON.parse(e.dataTransfer.getData("task"))
    const fromColumn = Object.keys(tasks).find((col) =>
      tasks[col].some((t) => t.id === task.id)
    )

    if (fromColumn && toColumn) {
      moveTask(task, fromColumn, toColumn)
    } else {
      console.error(`Column not found: ${fromColumn} or ${toColumn}`)
    }
  }

  const handleSaveTask = (task) => {
    if (task.id) {
      // Edit existing task
      setTasks((prev) => ({
        ...prev,
        [Object.keys(prev).find((col) =>
          prev[col].some((t) => t.id === task.id)
        )]: prev[
          Object.keys(prev).find((col) =>
            prev[col].some((t) => t.id === task.id)
          )
        ].map((t) => (t.id === task.id ? task : t)),
      }))
    } else {
      // Add new task
      setTasks((prev) => ({
        ...prev,
        newTask: [
          ...prev.newTask,
          { ...task, id: new Date().getTime().toString() },
        ],
      }))
    }
  }

  const handleDeleteTask = (task, column) => {
    setTasks((prev) => ({
      ...prev,
      [column]: prev[column].filter((t) => t.id !== task.id),
    }))
  }

  const handleCloseModal = () => {
    resetForm()
    setIsModalOpen(false)
  }

  return (
    <>
      <LayoutWithSideAndNavbar>
        <Helmet>
          <title>Kanban Board | Dashboard</title>
          <meta name="kanban board" content="kanban board dashboard" />
        </Helmet>

        <div className="m-5 sm:mx-7 text-gray-600 dark:text-darkText">
          <h1 className="text-3xl font-semibold mt-7">Kanban Board</h1>

          {/* Add new task and search */}
          <div className="flex flex-col sm:flex-row justify-start sm:justify-between mt-7 gap-3">
            <button
              onClick={() => {
                resetForm()
                setIsModalOpen(true)
              }}
              className="text-gray-100 rounded-md px-4 py-2 w-fit hover:opacity-90"
              style={{ backgroundColor: themeColor }}
            >
              Add New Task
            </button>

            <div className="relative">
              <IoSearchOutline className="absolute top-3.5 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 border dark:border-gray-700 dark:bg-darkSecondary rounded-md focus:outline-none"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <div
              className="grid grid-cols-3 gap-7 mt-7 min-w-[1000px]"
              style={{ minHeight: "calc(100vh - 320px)" }}
            >
              {/* New task */}
              <div
                className="bg-lightPrimary dark:bg-darkSecondary p-5 rounded-md shadow-sm mb-7"
                onDrop={(e) => handleDrop(e, "newTask")}
                onDragOver={(e) => e.preventDefault()}
              >
                <h2
                  className={taskHeadingStyles}
                  style={{ borderColor: themeColor }}
                >
                  New Task
                </h2>
                {renderTasks(tasks.newTask, "newTask")}
              </div>
              {/* Working task */}
              <div
                className="bg-lightPrimary dark:bg-darkSecondary p-5 rounded-md shadow-sm mb-7"
                onDrop={(e) => handleDrop(e, "workingTask")}
                onDragOver={(e) => e.preventDefault()}
              >
                <h2
                  className={taskHeadingStyles}
                  style={{ borderColor: themeColor }}
                >
                  Working Task
                </h2>
                {renderTasks(tasks.workingTask, "workingTask")}
              </div>
              {/* Completed task */}
              <div
                className="bg-lightPrimary dark:bg-darkSecondary p-5 rounded-md shadow-sm mb-7"
                onDrop={(e) => handleDrop(e, "completedTask")}
                onDragOver={(e) => e.preventDefault()}
              >
                <h2
                  className={taskHeadingStyles}
                  style={{ borderColor: themeColor }}
                >
                  Completed Task
                </h2>
                {renderTasks(tasks.completedTask, "completedTask")}
              </div>
            </div>
          </div>
        </div>
        <Footer />

        {isModalOpen && (
          <KanbanTaskCreateAndUpdateForm
            task={currentTask}
            onSave={handleSaveTask}
            onClose={handleCloseModal}
          />
        )}
      </LayoutWithSideAndNavbar>
    </>
  )
}

export default Kanban
