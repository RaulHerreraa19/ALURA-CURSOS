let btnCopiar = document.getElementById("btnCopiar");
let btnEncriptar = obtenerElemento("btnEncriptar");
let btnDesencriptar = obtenerElemento("btnDesencriptar");
let txtAccion = obtenerElemento("txtTarea").value;

if (txtAccion === "") {
  obtenerElemento("txtCopiar").value = "";
} else {
  obtenerElemento("txtCopiar").value = txtAccion;
}

function obtenerElemento(id) {
  return document.getElementById(id);
}

// funcion para copiar texto encriptado
btnCopiar.addEventListener("click", () => {
  let txtEncriptado = document.getElementById("txtCopiar").value;
  let copiado = txtEncriptado;
  if (copiado !== "") {
    navigator.clipboard
      .writeText(copiado)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bien!",
          text: "Texto copiado correctamente",
          footer: ":)",
          showConfirmButton: false,
          timer: 1500,
        });
        document.getElementById("txtCopiar").value = "";
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrió un error al copiar el texto",
          footer: "Intente de nuevo",
          showConfirmButton: true,
        });
      });
  } else
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No puedes copiar un campo vacío",
      footer: "Intente de nuevo",
    });
});

function encriptarPalabra(txtAccion) {
  let txtEncript = txtAccion;
  txtEncript = txtEncript
    .replaceAll("a", "%@$a$@%")
    .replaceAll("e", "%@$e$@%")
    .replaceAll("i", "%@$i$@%")
    .replaceAll("o", "%@$o$@%")
    .replaceAll("u", "%@$u$@%");
  txtEncript = txtEncript
    .replaceAll("%@$a$@%", "ai")
    .replaceAll("%@$e$@%", "enter")
    .replaceAll("%@$i$@%", "imes")
    .replaceAll("%@$o$@%", "ober")
    .replaceAll("%@$u$@%", "ufat");
  document.getElementById("txtCopiar").value = txtEncript;
}

function desencriptarPalabra(txtEncriptado) {
  let txtEncript = txtEncriptado;
  txtEncript = txtEncript
    .replaceAll("ai", "%@$ai$@%")
    .replaceAll("enter", "%@$enter$@%")
    .replaceAll("imes", "%@$imes$@%")
    .replaceAll("ober", "%@$ober$@%")
    .replaceAll("ufat", "%@$ufat$@%");
  txtEncript = txtEncript
    .replaceAll("%@$ai$@%", "a")
    .replaceAll("%@$enter$@%", "e")
    .replaceAll("%@$imes$@%", "i")
    .replaceAll("%@$ober$@%", "o")
    .replaceAll("%@$ufat$@%", "u");
  document.getElementById("txtCopiar").value = txtEncript;
}

btnEncriptar.addEventListener("click", () => {
  let txtAccion = document
    .getElementById("txtTarea")
    .value.trim()
    .toLowerCase();
  if (txtAccion === "") {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No puedes encriptar un campo vacío",
      footer: "Intente de nuevo",
    });
  } else {
    encriptarPalabra(txtAccion);
    document.getElementById("txtTarea").value = ""; // Limpiar el campo después de encriptar
  }
});

btnDesencriptar.addEventListener("click", () => {
  let encriptado = document
    .getElementById("txtTarea")
    .value.trim()
    .toLowerCase();
  if (encriptado === "") {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No puedes desencriptar un campo vacío",
      footer: "Intente de nuevo",
    });
  } else {
    desencriptarPalabra(encriptado);
  }
});
