// Datos para las diferentes cuentas (3 en nuestros Casos).
const cuentas = {
  1: { nombre: "Usuario 1", saldo: 500, password: "1234" },
  2: { nombre: "Usuario 2", saldo: 800, password: "5678" },
  3: { nombre: "Usuario 3", saldo: 300, password: "9012" },
};

let seleccionarCuentaId = null;

// Función para seleccionar una cuenta e ingresar la contraseña del usuario.
function ingresar() {
  const cuentaId = document.getElementById("cuentas").value;
  const password = document.getElementById("password").value;
  const seleccionarCuenta = cuentas[cuentaId];
  if (seleccionarCuenta && seleccionarCuenta.password === password) {
    seleccionarCuentaId = cuentaId;
    document.getElementById("nombreCuenta").innerText =
      seleccionarCuenta.nombre;
    document.getElementById(
      "saldoCuenta"
    ).innerText = `Saldo: $${seleccionarCuenta.saldo}`;
    document.getElementById("pantallaCuenta").style.display = "block";
    document.getElementById("password").value = "";
    document.getElementById("contenedor_cuenta").style.display = "none";
  } else {
    alert("Contraseña incorrecta. Por favor inténtalo de nuevo.");
  }
}

// Función para consultar el saldo diponible en la cuenta del usuario.
function consultarSaldo() {
  const seleccionarCuenta = cuentas[seleccionarCuentaId];
  if (seleccionarCuenta) {
    alert(
      `El saldo de ${seleccionarCuenta.nombre} es: $${seleccionarCuenta.saldo}`
    );
  }
}

// Función para depositar dinero en cuenta selecionada.
function depositarDinero() {
  const seleccionarCuenta = cuentas[seleccionarCuentaId];
  if (seleccionarCuenta) {
    const monto = parseInt(document.getElementById("saldo").value);
    if (isNaN(monto) || monto <= 0) {
      alert("Por favor, ingresa un monto válido.");
      return;
    }
    seleccionarCuenta.saldo += monto;
    if (seleccionarCuenta.saldo > 990) {
      seleccionarCuenta.saldo = 990;
    }
    actualizarPantanlla();
  }
}

// Función para retirar dinero, de usuario seleccionado.
function retirarDinero() {
  const seleccionarCuenta = cuentas[seleccionarCuentaId];
  if (seleccionarCuenta) {
    const monto = parseInt(document.getElementById("saldo").value);
    if (isNaN(monto) || monto <= 0) {
      alert("Por favor, ingresa un monto válido.");
      return;
    }
    if (monto > seleccionarCuenta.saldo) {
      alert("Fondos insuficientes.");
      return;
    }
    seleccionarCuenta.saldo -= monto;
    if (seleccionarCuenta.saldo < 10) {
      seleccionarCuenta.saldo = 10;
    }
    actualizarPantanlla();
  }
}

// Función para salir de la cuenta.
function cerrarSesion() {
  seleccionarCuentaId = null;
  document.getElementById("pantallaCuenta").style.display = "none";
  document.getElementById("contenedor_cuenta").style.display = "block";
}

// Función para actualizar el saldo mostrado en pantalla.
function actualizarPantanlla() {
  const selectedAccount = cuentas[seleccionarCuentaId];
  document.getElementById(
    "saldoCuenta"
  ).innerText = `Saldo: $${selectedAccount.saldo}`;
}
