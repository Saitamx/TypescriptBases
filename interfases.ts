(() => {
  interface Xmen {
    nombre: string;
    edad: number;
    poder?: string; // por si deseo que sea opción
  }
  const enviarMision = (xmen: Xmen) => {
    console.log(`Enviando a ${xmen.nombre} a la misión`);
  };

  const regresarAlCuartel = (xmen: Xmen) => {
    console.log(`Enviando a ${xmen.nombre} a la misión`);
  };

  const wolverine = {
    nombre: "Logan",
    edad: 60,
  };
  enviarMision(wolverine);
  regresarAlCuartel(wolverine);
})();
