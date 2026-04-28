import React from "react";

function Sidebar({ user, open }) {
  console.log("User: ", user);
  console.log("Open: ", open);
  return (
    <div>
      <h2 className={`color-white-300 text-xl ${open ? "flex" : "hidden"}`}>
        Olá, {user?.nome}!{" "}
      </h2>

      <h4 className={`color-white-300 text-xl ${open ? "flex" : "hidden"}`}>
        {user?.numero}
      </h4>
      <h4 className={`color-white-300 text-xl ${open ? "flex" : "hidden"}`}>
        {user?.aniversario}
      </h4>
      <h4 className={`color-white-300 text-xl ${open ? "flex" : "hidden"}`}>
        {user?.email}
      </h4>

      <div name="divButtons">
        <button
          className={`color-white-300 text-xl ${open ? "flex" : "hidden"}`}
          name="Deslogar"
        >
          aaaa
        </button>
        <button
          className={`color-white-300 text-xl ${open ? "flex" : "hidden"}`}
          name="EditarPerfil"
        >
          bbbbb
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
