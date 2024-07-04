import PropTypes from "prop-types";
import Task from "./Task";

export default function Column({ title, tasks, color }) {
  return (
    <div className="flex flex-col w-1/6 p-1">
      <h2 className="text-slate-400 bg-opacity-50 text-xs ml-3 font-semibold mb-2">
        <span
          className={`inline-block w-2 h-2 mr-2 ${
            color === "red" ? "bg-red-500" : ""
          } ${color === "yellow" ? "bg-yellow-500" : ""} ${
            color === "green" ? "bg-green-500" : ""
          } rounded-full`}
        ></span>
        {title} ({tasks.length})
      </h2>
      <div
        className={`flex-1 ${
          tasks.length === 0 ? "bg-linesLight dark:bg-darkCards rounded-lg" : ""
        } `}
      >
        {tasks.map((task, index) => (
          <Task
            key={index}
            title={task.title}
            subTasks={task.subTasks}
            description={task.description}
          />
        ))}
      </div>
    </div>
  );
}

Column.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  color: PropTypes.string.isRequired,
};
