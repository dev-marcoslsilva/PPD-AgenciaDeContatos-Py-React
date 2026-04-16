import { useState, useEffect } from "react";
import api from "./services/api";
// import "./App.css";

function App() {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    api
      .get("contatos/")
      .then((response) => {
        setContatos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar contatos:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-black">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Minha Agenda de Contatos
        </h1>

        <div className="grid gap-4">
          {contatos.map(contato => (
            <div key={contato.id} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold text-gray-700">{contato.nome}</h2>
              <p className="text-gray-600">{contato.email}</p>
              <p className="text-blue-600 font-medium">{contato.telefone}</p>
            </div>
          ))}
          
          {contatos.length === 0 && (
            <p className="text-center text-gray-500">Nenhum contato encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
