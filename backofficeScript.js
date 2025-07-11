const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
let endpointToUse = "";
const parameters = new URLSearchParams(location.search);
const prId = parameters.get("id");
let methodToUse = "";
const nameInput = document.getElementById("Nome");
const desInput = document.getElementById("Descrizione");
const brandInput = document.getElementById("Brand");
const imgInput = document.getElementById("Image-Url");
const priceInput = document.getElementById("Price");
const btnGroup = document.getElementById("btnGroup");
const heading = document.getElementById("heading");
const alert500 = document.getElementById("Alert500");

const reset = document.getElementById("reset");
const elimina = function () {
  fetch(endpointToUse, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzVmYjc4Y2RkZjAwMTU1ZDY3YTYiLCJpYXQiOjE3NTIyMjExNzksImV4cCI6MTc1MzQzMDc3OX0.XRkzjhDkenkS5Vnx7HD3I_S6-pTcBIbI2l4rqA49sWI",
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log("eliminato");
        location.assign("./home.html");
      } else {
        throw new Error(`errore_${res.status}`);
      }
    })
    .catch((er) => {
      alert500.classList.remove("d-none");
      if (er.message === "errore_500") {
        alert500.innerHTML = `C'è stato un problema, errore del server
        <a href="https://www.google.com" class="alert-link">clicca quik</a> per
        andare su Google.`;
      } else if (er.message === "errore_400") {
        alert500.innerHTML = `C'è stato un problema, errore nella richiesta
        <a href="https://www.google.com" class="alert-link">clicca quik</a> per
        andare su Google.`;
      } else {
        alert500.innerHTML = `C'è stato un problema, errore generico
        <a href="https://www.google.com" class="alert-link">clicca quik</a> per
        andare su Google.`;
      }
      console.log("errore", er);
    });
};

if (prId) {
  heading.innerText = "Modifica Prodotto";
  endpointToUse = endpoint + "/" + prId;
  methodToUse = "PUT";
  btnGroup.innerHTML += `<button  class="btn btn-danger mt-2" id="elimina" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Elimina Prodotto
              </button>`;

  fetch(endpointToUse, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzVmYjc4Y2RkZjAwMTU1ZDY3YTYiLCJpYXQiOjE3NTIyMjExNzksImV4cCI6MTc1MzQzMDc3OX0.XRkzjhDkenkS5Vnx7HD3I_S6-pTcBIbI2l4rqA49sWI",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`errore_${res.status}`);
      }
    })
    .then((data) => {
      console.log(data);
      nameInput.value = data.name;
      desInput.value = data.description;
      brandInput.value = data.brand;
      imgInput.value = data.imageUrl;
      priceInput.value = data.price;
    })
    .catch((er) => {
      alert500.classList.remove("d-none");
      if (er.message === "errore_500") {
        alert500.innerHTML = `C'è stato un problema, errore del server
        <a href="https://www.google.com" class="alert-link">clicca quik</a> per
        andare su Google.`;
      } else if (er.message === "errore_400") {
        alert500.innerHTML = `C'è stato un problema, errore nella richiesta
        <a href="https://www.google.com" class="alert-link">clicca quik</a> per
        andare su Google.`;
      } else {
        alert500.innerHTML = `C'è stato un problema, errore generico
        <a href="https://www.google.com" class="alert-link">clicca quik</a> per
        andare su Google.`;
      }
      console.log("errore", er);
    });
} else {
  endpointToUse = endpoint;
  methodToUse = "POST";
  heading.innerText = "Nuovo Prodotto";
}

const form = document.getElementById("form");

class product {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}
console.log(form);

reset.addEventListener("click", () => {
  form.reset();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const productToSave = new product(
    nameInput.value,
    desInput.value,
    brandInput.value,
    imgInput.value,
    priceInput.value
  );

  fetch(endpointToUse, {
    method: methodToUse,
    body: JSON.stringify(productToSave),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzVmYjc4Y2RkZjAwMTU1ZDY3YTYiLCJpYXQiOjE3NTIyMjExNzksImV4cCI6MTc1MzQzMDc3OX0.XRkzjhDkenkS5Vnx7HD3I_S6-pTcBIbI2l4rqA49sWI",
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log("successo");
        e.target.reset();
        location.assign("./home.html");
      } else {
        throw new Error(`errore_${res.status}`);
      }
    })
    .catch((er) => {
      alert500.classList.remove("d-none");
      if (er.message === "errore_500") {
        alert500.innerHTML = `C'è stato un problema, errore del server
        <a href="https://www.google.com" class="alert-link">clicca quik</a> per
        andare su Google.`;
      } else if (er.message === "errore_400") {
        alert500.innerHTML = `C'è stato un problema, errore nella richiesta
        <a href="https://www.google.com" class="alert-link">clicca quik</a> per
        andare su Google.`;
      } else {
        alert500.innerHTML = `C'è stato un problema, errore generico
        <a href="https://www.google.com" class="alert-link">clicca quik</a> per
        andare su Google.`;
      }
      console.log("errore", er);
    });
});
