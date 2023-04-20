elementsSli2 = [
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
const carritoCompra = document.querySelector(".navBar__item");

const divCarritoCompra = document.querySelector(".contMostrarCompra");
const conSubDivItem = document.querySelector(".contMostrarCompra__subItem");
let contenedorCarrito;
let contenedorCarritoCount = [];
carritoCompra.addEventListener("mouseover", e => {
  divCarritoCompra.classList.add("contMostrarCompra2");
  divCarritoCompra.addEventListener("mouseover", e => {
    divCarritoCompra.classList.add("contMostrarCompra2");
  })
  divCarritoCompra.addEventListener("mouseout", e => {
    divCarritoCompra.classList.remove("contMostrarCompra2");
  });
});

carritoCompra.addEventListener("mouseout", e => {
  divCarritoCompra.classList.remove("contMostrarCompra2");
})

const bntCarritoCompra = document.querySelectorAll(".añadir");
bntCarritoCompra.forEach((b) => {
  b.addEventListener("click", e => {
    const spanVeryCarrito = document.querySelector(".contSpanVeryCompra");
    spanVeryCarrito.classList.add("contSpanVeryCompra--active");
    const contador = document.querySelector(".navBar__contadorItems");
    setTimeout(() => {
      spanVeryCarrito.classList.remove("contSpanVeryCompra--active");
    }, 3000);
    elementsSli2.filter((fil) => {
      if (e.target.parentElement.children[1].textContent == fil.nombre) {
        contenedorCarrito = [{ ...fil }];
        contenedorCarritoCount.push(fil);
        // contenedorCarrito.unshift(fil);
        contenedorCarrito.map((item) => {
          conSubDivItem.innerHTML += `
          <div class="contMostrarCompra__item">
          <div class="contMostrarCompra__item__Cont">
              <img src="${item.img}"
                  alt="${item.img}">
              <div class="contMostrarCompra__item__ContInp__inp">
                  <p>${item.nombre}</p>
                  <div class="contMostrarCompra__item__ContInp__inpitem contCantidadCadena">
                      <button class="bntCantidadMenos">-</button>
                      <input value="1" min="1" class="inpCantidad" type="number">
                      <button class="bntCantidadMas">+</button>
                  </div>
              </div>
              <div class="contMostrarCompra__item__Cont__precio">
                  <p>${item.precio}</p>
                  <button class="contMostrarCompra__item__Cont__btnBorrar"><i class="fa-solid fa-trash-can"></i>
                  </button>
              </div>
          </div>
        </div>`
        });
        // const precioTotal = document.querySelector(".contMostrarCompra__Subtotal__total");
        // contenedorCarrito.map((p)=>{
        //   let precioo = parseInt(p.precio) + parseInt(p.precio);

        // })
      }
    })
    if (contenedorCarrito.length > 0) {
      contador.classList.add("navBar__contadorItems--active");
      contador.textContent = contenedorCarritoCount.length;
    } else {
      contador.classList.remove("navBar__contadorItems--active");
    }

  })
})