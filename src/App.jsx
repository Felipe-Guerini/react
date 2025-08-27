import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks
      ? JSON.parse(storedTasks)
      : [
          { id: 1, title: "Estudar programação", description: "Estudar programação todos os dias", isCompleted: false },
          { id: 2, title: "Ler livros", description: "Ler pelo menos 30 minutos por dia", isCompleted: false },
          { id: 3, title: "Exercitar-se", description: "Fazer exercícios físicos regularmente", isCompleted: false },
        ];
  });

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  function onTaskClick(taskId) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function onDeleteTaskClick(taskId) {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }

  return (
    <div className="min-h-screen w-full bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>
          Gerenciador de tarefas
        </Title>

        <AddTask onAddTaskSubmit={onAddTaskSubmit} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
