const D = document;

export function entradaContacto() {
  const $nombre = D.getElementById("nombre"),
    $numero = D.getElementById("numero"),
    $btn_agregar = D.getElementById("btn_agregar");

  D.addEventListener("click", (e) => {
    if (e.target === $btn_agregar) {
      window.location.href = `/agregar/${$nombre.value}/${$numero.value}`;
    }
  });
}