import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <li
          key={tasks.id}
          className={`list__item ${
            hideDone && task.done ? "list__item--hidden" : ""
          }`}
        >
          <button
            className="list__button list__button--toggleDone"
            onClick={() => toggleTaskDone(task.id)}
          >
            {task.done ? "✓" : ""}
          </button>
          <span
            className={`list__item${
              task.done ? "list__item list__item--done" : "list__item"
            }`}
          >
            {task.content}
          </span>

          <button
            className="list__button list__button--remove"
            onClick={() => removeTask(task.id)}
          >
            🗑
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
