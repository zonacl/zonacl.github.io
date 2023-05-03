
'use strict';


const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

if(!localStorage.getItem('zonacl-cookie-consent')){
  avisoCookies.classList.add('activo');
  fondoAvisoCookies.classList.add('activo');
}


botonAceptarCookies.addEventListener("click", crearCookie);

function crearCookie(){
    var name = "zonacl-cookie-consent"
    var value = "Aceptada"
    var days = 30;
    setCookie(name, value, days);
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');
    localStorage.setItem('zonacl-cookie-consent', true);
}

function setCookie(name,value,days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '')  + expires + '; path=/';
}

function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return false;
}

function eraseCookie(name) {
  document.cookie = name+'=; Max-Age=-99999999;';
}
