const elementsSli = [
  {
    img: "https://content.app-sources.com/s/74959632708265314/thumbnails/640x480/Images/IMG_8285-2841743.jpg",
    nombre: "Cadena ESLABÓN SEGUIDO",
    precio: "165.000",
    medida: "55cm",
    categoria: "Cadena"
  },
  {
    img: "https://content.app-sources.com/s/74959632708265314/thumbnails/640x480/Images/IMG_8001-1481515.jpg",
    nombre: "Cadena TWIST SILVER",
    precio: "131.000",
    medida: "65cm",
    categoria: "Cadena"
  },
  {
    img: "https://content.app-sources.com/s/74959632708265314/thumbnails/640x480/Images/IMG_8506_1-3896442.jpg",
    nombre: "Cadena Box Dama",
    precio: "146.000",
    medida: "45cm",
    categoria: "Cadena"
  },
  {
    img: "https://content.app-sources.com/s/74959632708265314/thumbnails/640x480/Images/IMG_5156_1-4302334.jpg",
    nombre: "Cadena SNAKE 5",
    precio: "137.000",
    medida: "45cm",
    categoria: "Cadena"
  },
  {
    img: "https://content.app-sources.com/s/74959632708265314/thumbnails/640x480/Images/IMG_8953-6314934.jpg",
    nombre: "Cadena MILITAR SILVER",
    precio: "178.000",
    medida: "55cm",
    categoria: "Cadena"
  },
];
const ContadorHeader = () => {
  const contadorCadena = document.querySelector(".contHeaderCade");
  contadorCadena.innerHTML = `
  <h1>${elementsSli[0].categoria}</h1>
  <h5>Mostrar ${mostrarItems.children.length}-${elementsSli.length} de 22 Resultados</h5>`;
}

const mostrarItems = document.querySelector(".contMuestaCadenaApp");
const inpMedida = document.querySelectorAll(".inpMedida");
elementsSli.map((c) => {
  mostrarItems.innerHTML += `
  <div class="contMuestraImgApp">
  <img class="muestraCadenaApp" src="${c.img}" alt="${c.nombre}">
  <div class="elementosImg">
  <i class="fa-solid fa-bag-shopping"></i>
  <hr>
  <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
  </div>
  <h4>${c.nombre}</h4>
  <p>$${c.precio}</p>
  <button class="añadir">Comprar Ahora</button>
  </div>`
  ContadorHeader();
});

inpMedida.forEach((inp) => {
  let validar = false
  inp.addEventListener("click", e => {
    validar == false ? validar = true : validar = false;
    if (validar == true) {
      mostrarItems.innerHTML = null;
      for (let i = 0; i < elementsSli.length; i++) {
        if (elementsSli[i].medida == inp.value) {
          mostrarItems.innerHTML += `
          <div class="contMuestraImgApp">
          <img class="muestraCadenaApp" src="${elementsSli[i].img}" alt="${elementsSli[i].nombre}">
          <div class="elementosImg">
          <i class="fa-solid fa-bag-shopping"></i>
          <hr>
          <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
          </div>
          <h4>${elementsSli[i].nombre}</h4>
          <p>$${elementsSli[i].precio}</p>
          <button class="añadir">Comprar Ahora</button>
          </div>`;
          const imgCadena = document.querySelectorAll(".contMuestraImgApp");
          imgCadena.forEach(c => {
            const cElemento = c.children[1];
            c.addEventListener("mouseover", e => {
              cElemento.classList.add("elementosImg2");
              cElemento.children[2].addEventListener("click", e => {
                const modal = document.querySelector(".modalItem");
                modal.classList.add("modalItem2");
                window.addEventListener("click", e => {
                  if (e.target == modal) {
                    modal.classList.remove("modalItem2");
                  }
                });
                elementsSli.map((el) => {
                  if (el.nombre == c.children[2].textContent) {
                    modal.innerHTML = `
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
                    document.querySelector(".crModal").addEventListener("click", e => {
                      modal.classList.remove("modalItem2");
                    })
                    const bntMenos = document.querySelector(".bntCantidadMenos");
                    const bntMas = document.querySelector(".bntCantidadMas");
                    const inptCantidad = document.querySelector(".inpCantidad")
                    bntMenos.addEventListener("click", e => {
                      inptCantidad.value--;
                      if (inptCantidad.value < 1) inptCantidad.value = 1
                    })
                    bntMas.addEventListener("click", e => {
                      inptCantidad.value++;
                    })
                  }
                });
              })
            })
            c.addEventListener("mouseout", e => {
              cElemento.classList.remove("elementosImg2");
            })
          })
        }
      }
    }
    else {
      mostrarItems.innerHTML = null;
      elementsSli.map((c) => {
        mostrarItems.innerHTML += `
        <div class="contMuestraImgApp">
        <img class="muestraCadenaApp" src="${c.img}" alt="${c.nombre}">
        <div class="elementosImg">
        <i class="fa-solid fa-bag-shopping"></i>
        <hr>
        <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
        </div>
        <h4>${c.nombre}</h4>
        <p>$${c.precio}</p>
        <button class="añadir">Comprar Ahora</button>
        </div>`;
      });
      const imgCadena = document.querySelectorAll(".contMuestraImgApp");
      imgCadena.forEach((c) => {
        const elementoImg = c.children[1];
        elementoImg.children[2].addEventListener("click", e => {
          const modal = document.querySelector(".modalItem");
          modal.classList.add("modalItem2");
          window.addEventListener("click", e => {
            if (e.target == modal) {
              modal.classList.remove("modalItem2");
            }
          });
          elementsSli.map((el) => {
            if (el.nombre == c.children[2].textContent) {
              modal.innerHTML = `
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
            document.querySelector(".crModal").addEventListener("click", e => {
              modal.classList.remove("modalItem2");
            })
            const bntMenos = document.querySelector(".bntCantidadMenos");
            const bntMas = document.querySelector(".bntCantidadMas");
            const inptCantidad = document.querySelector(".inpCantidad")
            bntMenos.addEventListener("click", e => {
              inptCantidad.value--;
              if (inptCantidad.value < 1) inptCantidad.value = 1
            })
            bntMas.addEventListener("click", e => {
              inptCantidad.value++;
            })
          });
        })
        c.addEventListener("mouseover", e => {
          elementoImg.classList.add("elementosImg2");
        })
        c.addEventListener("mouseout", e => {
          elementoImg.classList.remove("elementosImg2");
        });
      });
    }
    ContadorHeader();
  })
});

const imgCadena = document.querySelectorAll(".contMuestraImgApp");
imgCadena.forEach((c) => {
  const elementoImg = c.children[1];
  const modal = document.querySelector(".modalItem");
  elementoImg.children[2].addEventListener("click", e => {
    modal.classList.add("modalItem2");
    elementsSli.map((el) => {
      if (el.nombre == c.children[2].textContent) {
        modal.innerHTML = `
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
        document.querySelector(".crModal").addEventListener("click", e => {
          modal.classList.remove("modalItem2");
        })
        window.addEventListener("click", e => {
          if (e.target == modal) {
            modal.classList.remove("modalItem2");
          }
        });
        const bntMenos = document.querySelector(".bntCantidadMenos");
        const bntMas = document.querySelector(".bntCantidadMas");
        const inptCantidad = document.querySelector(".inpCantidad")
        bntMenos.addEventListener("click", e => {
          inptCantidad.value--;
          if (inptCantidad.value < 1) inptCantidad.value = 1
        })
        bntMas.addEventListener("click", e => {
          inptCantidad.value++;
        })
      }
    });
  })
  c.addEventListener("mouseover", e => {
    elementoImg.classList.add("elementosImg2");
  })
  c.addEventListener("mouseout", e => {
    elementoImg.classList.remove("elementosImg2");
  })
})


// const url = window.location.href;
// const exprecion = /(cadenas||pulseras||dijes)+/g;

// console.log(exprecion.test(url));

