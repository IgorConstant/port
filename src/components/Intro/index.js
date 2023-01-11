import { useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";

// CSS
import './style.css'



const Intro = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div className="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          fullScreen: { enable: false },
          interactivity: {
            detect_on: 'window',
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="container px-8 mx-auto z-40">
        <div className="content">
          <h4 className="text-cyan-300">Olá! meu nome é</h4>
          <h1 className="text-indigo-50 mt-2">Igor H. Constant</h1>
          <p className="text-white mt-2 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque non tellus orci ac auctor augue mauris augue. </p>
          <a href="#" className="px-4 py-2 font-semibold text-sm bg-cyan-300 text-black rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white ease-in-out delay-150 duration-300">
            Saiba Mais
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro;