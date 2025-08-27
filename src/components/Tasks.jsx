import { ChevronRight, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import Button from "./Button";


function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navegate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navegate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-2">
          <button
            onClick={() => onTaskClick(task.id)} 
            className={`flex-1 bg-slate-400 text-left text-white p-2 rounded-md w-full
              ${task.isCompleted ? "line-through" : ""}`}
          >
            {task.title}
          </button>

              <Button> 
                <button
            onClick={() => onSeeDetailsClick(task)}
          >
            <ChevronRight />
          </button>

              </Button>
          

          <Button
            onClick={() => onDeleteTaskClick(task.id)} 
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;