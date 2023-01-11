import React from 'react'
import './styles.css';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-6 bg-black-500 z-40">
        <div className="container px-8 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-white rounded bg-white block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                ><span className="ml-2 font-light antialiased"><small className="text-cyan-300">01.</small> Sobre</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                ><span className="ml-2 font-light antialiased"><small className="text-cyan-300">02.</small> Projetos</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                ><span className="ml-2 font-light antialiased"><small className="text-cyan-300">03.</small> Contato</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-cyan-300"
                  href="https://github.com/IgorConstant/" target="_blank"
                >
                  <i className="fab fa-github text-lg leading-lg text-white opacity-75"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-cyan-300"
                  href="https://www.linkedin.com/in/igor-henrique-constant-2b2190113/"
                >
                  <i className="fab fa-linkedin text-lg leading-lg text-white opacity-75"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}