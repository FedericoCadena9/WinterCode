import React from 'react';

function QuienesSomos() {
  return (
    <section className="relative pt-20">

      <div className="absolute inset-0 pointer-events-none from-teal-400 bg-gradient-to-r to-blue-400 top-1/2 md:mt-24 lg:mt-0" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 right-0 w-px h-20 p-px m-auto transform translate-y-1/2 bg-gray-200"></div>

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">

          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2">¿Quiénes somos?</h2>
            <p className="text-xl text-gray-600"> Somos un grupo de estudiantes altamente interesados en transformar y reflejar felicidad y esperanza en las personas, a través de una comunidad que busca poder cambiar el rumbo de las cosas.</p>
          </div>
          
          <div>
            <h3 className='pb-6 text-3xl font-bold text-center text-white'>Nuestra misión</h3>
          </div>
          <div className="grid items-start max-w-sm gap-6 mx-auto md:grid-cols-2 md:max-w-2xl lg:max-w-none">
          
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white bg-blue-500 rounded-full p-3 my-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">Reconfortar sentimientos</h4>
              <p className="text-center text-gray-600">Al leer una carta nos damos cuenta de la importancia y el apoyo de aquellos que están a nuestro alrededor.</p>
            </div>
            
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white bg-blue-500 rounded-full p-3 my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">Crear nuevas experiencias</h4>
              <p className="text-center text-gray-600">Transfomar momentos difíciles en nuevas experiencias en la vida de las personas.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;
