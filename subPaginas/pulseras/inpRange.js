const inpRan = document.querySelector(".inpRan");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
window.addEventListener("load",e=>{
    max.textContent = "$" + inpRan.value
});
inpRan.addEventListener("change",e=>{
    max.textContent = "$" + inpRan.value;
});