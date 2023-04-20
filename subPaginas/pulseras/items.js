const elementsSli = [
  {
    img: "https://content.app-sources.com/s/74959632708265314/uploads/Images/5D8A2891.JPG_1-5930624.jpg",
    nombre: "Pulsera Cubana 3mm",
    precio: "115.000",
    medida: "3mm",
    categoria: "Pulseras"
  },
  {
    img: "https://content.app-sources.com/s/74959632708265314/uploads/Images/IMG_6559-5955909.jpg",
    nombre: "Pulsera Cross",
    precio: "85.000",
    medida: "2mm",
    categoria: "Pulseras"
  },
  {
    img: "https://content.app-sources.com/s/74959632708265314/uploads/Images/B10A1470-5930135.jpg",
    nombre: "Pulsera Cubana ",
    precio: "125.000",
    medida: "5mm",
    categoria: "Pulseras"
  },
  {
    img: "https://content.app-sources.com/s/74959632708265314/uploads/Images/Pulsera_Twist_-_circon-0685273.jpg",
    nombre: "Pulsera Dandi en Acero",
    precio: "155.000",
    medida: "3cm",
    categoria: "Pulseras"
  },
  {
    img: "https://content.app-sources.com/s/74959632708265314/uploads/Images/IMG_8785-5274596.jpg",
    nombre: "Pulsera Escalava",
    precio: "135.000",
    medida: "4mm",
    categoria: "Pulseras"
  },{
    img: "https://content.app-sources.com/s/74959632708265314/uploads/Images/IMG_4572-3368878.GIF",
    nombre: "Pulsera Dandi Gold",
    precio: "165.000",
    medida: "4mm",
    categoria: "Pulseras"
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

