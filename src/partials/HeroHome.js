import React from 'react';

function HeroHome() {


  return (
    <section className="relative">

<div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://media.istockphoto.com/photos/woman-hand-holds-wooden-house-in-the-form-of-heart-against-the-sun-picture-id1283216888?b=1&k=20&m=1283216888&s=170667a&w=0&h=MD66Jcz7jZ8uOFz_IKwA1QeH-RQDa9yTZHGW-xYf2Rc="
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
        <div className="pt-10 text-center sm:text-left sm:pt-0">
            <h1 className="mb-4 text-5xl font-extrabold tracking-tighter leading-tighter" data-aos="zoom-y-out">Lleva la esperanza y la felicidad con <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">WinterHope</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="mb-8 text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Nuestra misión es llevar esperanza a todo aquel que lo necesite, lleva la felicidad a alguien. ¡Sé un WinterHope!</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="w-full mb-4 text-white bg-blue-500 btn hover:bg-blue-700 sm:w-auto sm:mb-0" href="#0">Escribir una carta</a>
                </div>
                <div>
                  <a className="w-full text-white bg-teal-500 btn hover:bg-teal-600 sm:w-auto sm:ml-4" href="#0">¿Quiénes somos?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default HeroHome;