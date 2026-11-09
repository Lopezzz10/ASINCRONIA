const SALDO = 500;

function retirarDinero(monto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (monto <= SALDO) {
        resolve(`Retiro exitoso de $${monto}. Saldo restante: $${SALDO - monto}`);
      } else {
        reject(`Fondos insuficientes. Límite de retiro: $${SALDO}`);
      }
    }, 1500);
  });
}

retirarDinero(200)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));

retirarDinero(600)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));