const span = document.querySelectorAll(".spanCade");
const items = document.querySelectorAll(".imgItem");
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseenter", e => {
        span[i].style.animation = "mostrarPubli .3s forwards";
        items[i].style.transform = "scale(1.2)";
        span[i].addEventListener("mouseover", e => {
            span[i].style.animation = "mostrarPubli .3s forwards";
            items[i].style.transform = "scale(1.2)";
        })
        span[i].addEventListener("mouseout", e => {
            span[i].style.animation = "ocultarPubli .3s forwards";
            items[i].style.transform = "scale(1)";
        })
        items[i].addEventListener("mouseout", e => {
            span[i].style.animation = "ocultarPubli .3s forwards";
            items[i].style.transform = "scale(1)";
        })
    })
}
const corrido = document.querySelectorAll(".contSpan");
for (let i = 0; i < corrido.length; i++) {
    corrido[i].addEventListener("mouseover",e=>{
        const brr = document.querySelectorAll(".barraC");
        brr[i].style.margin = "5px 0px 10px 0";
        corrido[i].addEventListener("mouseout",e=>{
            brr[i].style.margin = "5px 50px 10px 0";
        })
    })
    
}
const bntWhat = document.querySelector(".bntWhat");
bntWhat.addEventListener("mouseover",e=>{
    const modalBtn = document.querySelector(".bntWhatModal");
    modalBtn.style.animation= "bntMIni 1s forwards";
    bntWhat.addEventListener("mouseout",e=>{
        const modalBtn = document.querySelector(".bntWhatModal");
        modalBtn.style.animation = "bntMFin 1s forwards"
    })
})