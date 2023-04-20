const logo = document.querySelector(".logo");
const bntOp = document.querySelector(".bar3");
logo.addEventListener("click",e=>{
   location.href = "../../index.html";
});
bntOp.addEventListener("click",e=>{
    const navBar = document.querySelector(".navBar");
    navBar.classList.toggle("navBar2");
    window.addEventListener("click",e=>{
        if( e.target != bntOp && e.target != navBar){
        navBar.classList.remove("navBar2");
    }
    })
})
const mostrarFiltro = document.querySelector(".mostrar__filtro");
const filtro = document.querySelector(".espesCadena");
mostrarFiltro.addEventListener("click",e=>{
    filtro.classList.toggle("espesCadena2");
})