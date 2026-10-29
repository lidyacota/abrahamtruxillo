/* Abraham Truxillo · comportamiento mínimo (sin bibliotecas).
   Todo el contenido se ve sin JavaScript; esto agrega el menú plegable en celular. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  // Menú en pantallas chicas
  var barra = document.querySelector(".barra");
  var boton = document.querySelector(".barra__menu");
  if (barra && boton) {
    boton.hidden = false;
    boton.addEventListener("click", function () {
      var abierta = barra.classList.toggle("abierta");
      boton.setAttribute("aria-expanded", String(abierta));
    });
  }
})();
