const elementsSli = [
  {
    img: "https://content.app-sources.com/s/74959632708265314/thumbnails/640x480/Images/IMG_8285-2841743.jpg",
    nombre: "Cadena ESLABÓN SEGUIDO",
    precio: "165.000",
    medida: "55cm"
  },
  {
    img: "https://content.app-sources.com/s/74959632708265314/thumbnails/640x480/Images/IMG_8001-1481515.jpg",
    nombre: "Cadena TWIST SILVER",
    precio: "131.000",
    medida: "65cm"
  },
  {
    img: "https://content.app-sources.com/s/74959632708265314/thumbnails/640x480/Images/IMG_8506_1-3896442.jpg",
    nombre: "Cadena Box Dama",
    precio: "146.000",
    medida: "45cm"
  },
  {
    img: "https://content.app-sources.com/s/74959632708265314/thumbnails/640x480/Images/IMG_5156_1-4302334.jpg",
    nombre: "Cadena SNAKE 5",
    precio: "137.000",
    medida: "45cm"
  },
  {
    img: "https://content.app-sources.com/s/74959632708265314/thumbnails/640x480/Images/IMG_8953-6314934.jpg",
    nombre: "Cadena MILITAR SILVER",
    precio: "178.000",
    medida: "55cm"
  },
]
const listaCa = document.querySelector(".carouselLista");
elementsSli.map((c) => {
  listaCa.innerHTML += `
    <div class="carouselElemento">
      <div class="contItemImg">
        <img class="itemImg" src="${c.img}" alt="${c.nombre}">
        <div class="elementosImg">
          <i class="fa-solid fa-bag-shopping elementosImg__item1"></i>
          <hr>
          <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </div>
        <p>${c.nombre}</p>
        <b><p>$${c.precio}</p></b>
        <button class="añadir">Añadir al carrito</button>
    </div>`
});
const itemImg = document.querySelectorAll(".contItemImg");
itemImg.forEach((i) => {
  const elementosImg = i.children[1];
  elementosImg.children[2].addEventListener("click", e => {
    const modalItem = document.querySelector(".modalItem");
    modalItem.classList.add("modalItem2");
    window.addEventListener("click",e=>{
      if(e.target == modalItem){
        modalItem.classList.remove("modalItem2");
      }
    })
    elementsSli.map((el) => {
      if (el.nombre == i.parentElement.children[1].textContent) {
        modalItem.innerHTML = `
        <div class="contMostrModal">
          <div class="contImgModal">
            <img src="${el.img}" alt="">
            <div class="contImgPeque">
              <img src="${el.img}" alt="">
              <img src="${el.img}" alt="">
              <img src="${el.img}" alt="">
            </div>
          </div>
            <div class="contEspModal">
              <h1>${el.nombre}</h1>
              <p>${el.precio}</p>
              <a href="#">Ver detalles</a>
              <label>Largo</label>
              <select class="sltLargoCadena" name="LargoCadena" id="">
                <option value="${el.medida}">${el.medida}</option>
              </select>
              <div class="contCantidadG">
                <div class="contCantidadCadena">
                <button class="bntCantidadMenos">-</button>
                <input value="1" min="1" class="inpCantidad" type="number">
                <button class="bntCantidadMas">+</button>
                </div>
                <button class="añadir">Añadir al carrito</button>
              </div>
            </div>
          <i class="fa-sharp fa-solid fa-xmark crModal"></i>
        </div>`
      }
    })
    const crModal = document.querySelector(".crModal");
    document.querySelector(".bntCantidadMenos").addEventListener("click",e=>{
      parseInt(inpCantidadNum.value --);
      if(inpCantidadNum.value < 1)inpCantidadNum.value = 1;
    })
    const inpCantidadNum = document.querySelector(".inpCantidad");
    document.querySelector(".bntCantidadMas").addEventListener("click",e=>{
      parseInt(inpCantidadNum.value ++)
    })
    crModal.addEventListener("click", e => {
      modalItem.classList.remove("modalItem2");
    })
  })
  i.addEventListener("mouseover", e => {
    elementosImg.classList.add("elementosImg2");
  })
  i.addEventListener("mouseout", e => {
    elementosImg.classList.remove("elementosImg2");
  })
});