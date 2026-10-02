import { useEffect } from "react";
import { useState } from "react";
import Frase from "./components/Frase";

function App() {
  const [frase, setFrase] = useState({});

  useEffect(() => {
    obtenerFrase();
  }, []);

  const obtenerFrase = async () => {
    try {
      const respuesta = await fetch(
        "https://thesimpsonsapi.com/api/characters",
      );
      const datos = await respuesta.json();
      console.log(datos.results);

      const personajes = datos.results;
      const personajesRandom =
        personajes[Math.floor(Math.random() * personajes.length)];

      setFrase(personajesRandom);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <img src="" alt="" />
        <Frase frase={frase}></Frase>
        <button className="btn-primary" onClick={() => obtenerFrase()}>ENVIAR
        </button>
      </section>
    </>
  );
}

export default App;
