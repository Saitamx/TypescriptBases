(() => {
  const retirarDinero = (montoRetirar: number) => {
    let dineroActual = 1000;

    return new Promise<number>((resolve, reject) => {
      if (montoRetirar > dineroActual) {
        reject("No hay suficiente dinero");
      } else {
        dineroActual -= montoRetirar;
        resolve(dineroActual);
      }
    });
  };
  retirarDinero(1500)
    .then((montoActual) => console.log(`Me queda ${montoActual}`))
    .catch(console.warn);
})();
