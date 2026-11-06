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

;(function () {
  'use strict';

  var measurementId = 'G-SGQL62V9GN';
  var hostname = window.location.hostname;
  var tagId = 'abrahamtruxillo-analytics-tag';

  if ((hostname !== 'www.abrahamtruxillo.net' && hostname !== 'abrahamtruxillo.net') ||
      !/^G-[A-Z0-9]{6,15}$/.test(measurementId) ||
      window['ga-disable-' + measurementId] === true ||
      document.getElementById(tagId)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  var tag = document.createElement('script');
  tag.id = tagId;
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(tag);
}());
