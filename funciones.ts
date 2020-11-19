(function () {
  function sumarN(a: number, b: number) {
    return a + b;
  }

  const sumarF = (a: number, b: number) => a + b;

  console.log(sumarN(3, 5));
  console.log(sumarF(1, 2));

  const hulk = {
    nombre: "Hulk",
    smash() {
      setTimeout(() => {
        console.log(`${this.nombre}!`);
      }, 1000);
    },
  };
  hulk.smash();
  
})();
