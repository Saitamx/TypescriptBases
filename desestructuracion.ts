(() => {
  const avenger = {
    nombre: "Steve",
    clave: "Capitán América",
    poder: "Droga",
  };

  const extraer = ({ nombre, poder }: any) => {
    // const { nombre, clave, poder } = avenger;

    console.log(nombre);
    console.log(poder);
  };

  //   extraer(avenger);

  const avengers: string[] = ["Thor", "Ironman", "Spiderman"];

  const extraerArr = ([, ironman]: string[]) => {
    console.log(ironman);
  };

  extraerArr(avengers);
})();
