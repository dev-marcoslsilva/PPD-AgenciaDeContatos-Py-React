import { useState } from "react";

function Sidebar({ user, open }) {
  const [isEditMode, toggleEditMode] = useState(false);
  const raw = user?.aniversario.split(' ');
  const aniversario = new Date(raw).toLocaleDateString('pt-BR');
  const nome = user?.name?.split(' ')[0] || "Usuário";

  

  return (
    <aside
      className={`left-8 top-43 bg-blue-400 rounded-lg 
           transform transition-all duration-500
       ${
         open
           ? "w-64 h-100 shadow-md p-4 mr-8"
           : "w-0 mr-0 p-0 overflow-hidden"
       }`}
    >
      <div
        className={`text-3xl h-full ${
          open ? "flex flex-col justify-around" : "hidden"
        }`}
      >
        <div className="flex justify-center align-items-center gap-4">
          <h2 className="text-orange-500 text-x ">Olá, {nome}!</h2>
        </div>

        <div className={`${isEditMode ? "flex flex-col" : "hidden"}`}>
          <h6 className={`text-xs text-orange-300 font-bold`}>
            Como você gostaria de ser chamado?
          </h6>
          <input
            type="text"
            value={user?.nome}
            className={`border-t-0 border-r-0 border-l-0 border-b-2 border-orange-300 bg-transparent focus:outline-none focus:ring-0 color-white-300 text-m h-30 w-full 
        
      `}
          />
        </div>

        <h4 className={`text-white text-xl`}>{user?.telefone}</h4>
        <h4 className={`text-white text-xl ${open ? "flex" : "hidden"}`}>
          {aniversario}
        </h4>
        <h4 className={`text-white text-xl ${open ? "flex" : "hidden"}`}>
          {user?.email}
        </h4>

        <div name="divButtons" className="flex justify-between">
          <button
            className={`color-white-300 text-xl border-2 border-orange-300 rounded-lg px-2 py-1 bg-green-300`}
            name="Deslogar"
            
          >
            aaaa
          </button>
          <button
            className={`color-white-300 text-xl border-2 border-orange-300 rounded-lg px-2 py-1 bg-green-300`}
            name="EditarPerfil"
            onClick={() => toggleEditMode(!isEditMode)}
          >
            bbbbb
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
