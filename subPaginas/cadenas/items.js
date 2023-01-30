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
                console.log("click");
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
          console.log("click");
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
  elementoImg.children[2].addEventListener("click", e => {
    console.log("click")
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

