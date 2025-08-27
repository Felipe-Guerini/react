import { useSearchParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="bg-slate-500 h-screen w-screen p-6">
      <div className="w-[500px] space-y-4 mx-auto">
        
        {/* Cabeçalho com botão e título */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-slate-300"
          >
            <ChevronLeft size={24} />
          </button>

          <Title>Detalhes da Tarefa</Title>
        </div>

        {/* Card da tarefa */}
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
