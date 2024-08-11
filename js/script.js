const btn_darkmode = document.getElementById("darkmode");
 
document.addEventListener("DOMContentLoaded", e => {
  cargarModooscuro()
  btn_darkmode.addEventListener("click", toggleDarkMode) 
})

 function toggleDarkMode(){
  btn_darkmode.classList.toggle("dark"); 
  document.body.classList.toggle("dark");
  guardarModoOscuro(btn_darkmode.classList.contains("dark"))
 }


 function guardarModoOscuro(estado){
  localStorage.setItem("modoDark", estado)
 }
 function cargarModooscuro(){
  const modoDarkguardado = localStorage.getItem("modoDark") ==="true";
  if ( modoDarkguardado){
    btn_darkmode.classList.add("dark"); 
    document.body.classList.add("dark");
  }
 }