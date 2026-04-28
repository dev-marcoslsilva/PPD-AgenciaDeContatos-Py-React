import { useState, useEffect } from "react";
import api from "./services/api";
import "./App.css";
import Sidebar from "./sidebar-component";

function App() {
  const [contatos, setContatos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    api
      .get("contatos/")
      .then((response) => {
        setContatos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar contatos:", error);
      });
  }, []);

  useEffect(() => {
    api
      .get("contatos/favoritados")
      .then((response) => {
        setFavoritos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os favoritos: ", error);
      });
  }, []);

  useEffect(() => {
    api
      .get("usuarios/1/")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar o usuário: ", error);
      });
  }, []);

  
  return (
    <div className="flex-column items-center min-h-screen bg-gray-100 p-8">
      <header className="bg-green-400 min-w-4xl min-h-16 flex items-center justify-center mb-8 rounded-lg shadow-md"></header>

      <div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md cursor-pointer"
        >
          Aqui terá um icon para ativar a sidebar
        </button>
      </div>

      <div
        className={`flex items-center mt-4 ${
          open ? "justify-between" : "justify-around"
        }`}
      >
        
        <Sidebar user={user} open={open}/>

        <div
          className={`flex flex-col max-w-2xl min-w-100 max-h-100 mx-auto bg-blue-400 rounded-xl ${
            open
              ? "min-w-2xl max-h-3xl max-w-3xl justify-around"
              : "max-w-2xl min-w-xl max-h-100 justify-around"
          }`}
        >
          <h1 className="text-3xl text-white text-center">
            Minha Agenda de Contatos
          </h1>

          <div className="grid gap-4 py-4">
            {contatos.map((contato) => (
              <div
                key={contato.id}
                className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500"
              >
                <h2 className="text-xl font-semibold text-gray-700">
                  {contato.nome}
                </h2>
                <p className="text-gray-600">{contato.email}</p>
                <p className="text-blue-600 font-medium">{contato.telefone}</p>
              </div>
            ))}

            {contatos.length === 0 && (
              <p className="text-center text-gray-500">
                Nenhum contato encontrado.
              </p>
            )}
          </div>
        </div>

        <div
          className={`mx-auto bg-blue-400 rounded-xl 
          //   open
          //     ? "max-w-2xl min-w-100 max-h-100"
          //     : "min-w-2xl max-h-3xl max-w-3xl"
          // }`}
        >
          <h1 className="text-3xl text-white text-center">Favoritos</h1>
          <div className="grid gap-8">
            {favoritos.map((favoritos) => (
              <div
                key={favoritos.id}
                className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500"
              >
                <h2 className="text-xl font-semibold text-gray-700">
                  {favoritos.nome}
                </h2>
                <p>{favoritos.email}</p>
                <p>{favoritos.telefone}</p>
              </div>
            ))}

            {favoritos.length === 0 && (
              <p className="text-center text-gray-500">
                Nenhum contato favoritado encontrado.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
