import { useState } from "react";

function Sidebar({ user, open }) {
  const [isEditMode, toggleEditMode] = useState(false);
  const [nome, setNome] = useState(user?.nome?.split(" ")[0] || "Usuário");

  const [telefone, setTelefone] = useState(user?.telefone);
  console.log(telefone);

  const raw = user?.aniversario.split(" ");
  const aniversario = new Date(raw).toLocaleDateString("pt-BR");

  return (
    <aside
      className={`left-8 top-43 bg-blue-400 rounded-lg 
           transform transition-all duration-500
       ${
         open ? "w-64 h-100 shadow-md p-4 mr-8" : "w-0 mr-0 p-0 overflow-hidden"
       }`}
    >
      <div
        className={`text-3xl h-full ${
          open ? "flex flex-col justify-around" : "hidden"
        }`}
      >
        <div
          className={`h-full justify-around ${
            isEditMode ? "hidden" : "flex flex-col"
          }`}
        >
          <div className={`flex justify-center align-items-center gap-4`}>
            <h2 className="text-blue-900 text-x ">Olá, {nome}!</h2>
          </div>

          <h4 className={`text-white text-xl`}>{user?.telefone}</h4>
          <h4 className={`text-white text-xl`}>{aniversario}</h4>
          <h4 className={`text-white text-xl`}>{user?.email}</h4>

          <div name="divButtons" className="flex justify-between">
            <button
              className={`color-white-300 text-xl border-2 border-orange-300 rounded-lg px-2 py-1 bg-green-300`}
              name="Deslogar"
            >
              aaaa
            </button>
            <button
              className={`text-xl border-2 border-orange-300 rounded-lg px-2 py-1 bg-gray-100`}
              name="EditarPerfil"
              onClick={() => toggleEditMode(!isEditMode)}
            >
              bbbbb
            </button>
          </div>
        </div>

        <div
          className={`flex flex-col h-full justify-around ${
            isEditMode ? "flex flex-col" : "hidden"
          }`}
        >
          <div className={`${isEditMode ? "flex flex-col" : "hidden"}`}>
            <h6 className={`text-lg text-orange-300 font-bold`}>
              Como você quer ser chamado?
            </h6>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className={`border-t-0 border-r-0 border-l-0 border-b-2 border-orange-300 bg-transparent focus:outline-none focus:ring-0 color-white-300 text-lg h-10 w-full 
        
      `}
            />

            <div name="inputTel">
              <h6 className={`text-lg text-orange-300 font-bold`}>
                Este é o seu número?
              </h6>

              <input
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="border-t-0 border-r-0 border-l-0 border-b-2 border-orange-300 bg-transparent focus:outline-none focus:ring-0 color-white-300 text-lg h-10 w-full"
              />
            </div>
          </div>
          <div name="divBotoes" className="flex justify-between mt-4">
            <button onClick={() => toggleEditMode(!isEditMode)}>Cancel</button>
            <button>Apply</button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
