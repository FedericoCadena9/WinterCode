import React from 'react';

function Correo() {
  return (
    <section>
      <div className="max-w-6xl px-4 pt-20 mx-auto sm:px-6">
        <div className="pb-12 md:pb-20">
          
          <div className="relative px-8 py-10 overflow-hidden rounded shadow-2xl to-teal-500 from-green-500 bg-gradient-to-r md:py-16 md:px-12" data-aos="zoom-y-out">

            <div className="relative flex flex-col items-center justify-between lg:flex-row">

              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="mb-2 text-white h3">Quisiera una carta</h3>
                <p className="mb-6 text-lg text-gray-300">¿Estás pasando por momentos dificiles, o simplemente quieres recibir la felicidad de alguien más a través de una carta virtual? Deja un correo que visites frecuentemente, nosotros nos encargamos del resto.</p>

                <form className="w-full ">
                  <div className="flex flex-col justify-start min-w-full mx-auto sm:flex-row sm:max-w-md lg:mx-0">
                    <input type="email" className="px-4 py-3 mb-2 text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-400 rounded-md appearance-none md:w-1/2 focus:border-gray-600 sm:mb-0 sm:mr-2" placeholder="Tu correo electrónico" aria-label="Tu correo electrónico" />
                    <button className="px-4 py-2 my-2 text-white bg-blue-600 rounded-md shadow md:my-0 hover:bg-blue-700" href="#0">Quiero unirme</button>
                  </div>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Correo;
