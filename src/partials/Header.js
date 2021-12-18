import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="min-w-full px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          
          <div className="flex-shrink-0 mr-4">
            <Link to="/" className="block" aria-label="Cruip">
            <img className='w-9 h-9' src={require('../images/winterHope.png').default} alt="" />
            </Link>
          </div>

          <nav className="flex flex-grow">
            <ul className="flex flex-wrap items-center justify-end flex-grow">
              <li>
                <Link to="/enviar" className="ml-3 text-gray-200 bg-gray-900 btn-sm hover:bg-gray-700">
                  <span>Escribe tu carta</span>   <span className='ml-5'>💌</span>               
                </Link>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
