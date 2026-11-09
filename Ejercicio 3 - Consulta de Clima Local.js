function consultarClima(ciudad) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ temperatura: "24°C", condicion: "Soleado" });
    }, 1500);
  });
}

async function mostrarClima(ciudad) {
  try {
    const clima = await consultarClima(ciudad);
    console.log(`Clima en ${ciudad}:`);
    console.log(`Temperatura: ${clima.temperatura}`);
    console.log(`Condición: ${clima.condicion}`);
  } catch (error) {
    console.log("Error al consultar el clima:", error);
  }
}

mostrarClima("Quito");