import React from "react";

export default function sendMail() {
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="w-2/3 py-20 lg:w-2/5 md:w-1/2">
          <form className="min-w-full p-10 bg-white rounded-lg shadow-lg">
            <h1 className="mb-6 font-sans text-2xl font-bold text-center text-gray-600">
              Escribe aquí tu carta
            </h1>
            <div>
              <label
                className="block my-3 font-semibold text-gray-800 text-md"
                for="nombre"
              >
               Nombre
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre"
              />
            </div>
            <div>
              <label
                className="block my-3 font-semibold text-gray-800 text-md"
                for="email"
              >
                Correo
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
                type="text"
                name="correo"
                id="correo"
                placeholder="Correo"
              />
            </div>
            
            <div>
              <label
                className="block my-3 font-semibold text-gray-800 text-md"
                for="carta"
              >
Carta              </label>
                <textarea className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none" name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-6 font-sans text-lg font-semibold tracking-wide text-white bg-red-600 rounded-lg"
            >
              Validar
            </button>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-6 mb-3 font-sans text-lg font-semibold tracking-wide text-gray-800 bg-red-100 rounded-lg"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
