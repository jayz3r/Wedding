import React from "react";
import {NavLink} from 'react-router-dom'

function Language() {
  return (
    <div className=" h-screen flex flex-col items-center justify-center ">
      <h2 className="text-3xl">Выберите язык</h2>
      <nav className=" text-6xl text-white">
        <NavLink to='/KG'>
            <h3 className="">Кыргыз Тили</h3>
        </NavLink>
        <NavLink to='/RU'>
            <h3>Русский язык</h3>
        </NavLink>
      </nav>
      <h2 className="text-3xl">Тил выберитье</h2>
    </div>
  );
}

export default Language;
