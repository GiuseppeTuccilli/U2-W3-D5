const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const parameters = new URLSearchParams(location.search);
const prId = parameters.get("id");
const img = document.querySelector(".card img");
const nome = document.querySelector(".card h5");
const des = document.getElementById("des");
const price = document.getElementById("price");
const brand = document.getElementById("brand");

fetch(endpoint + "/" + prId, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzVmYjc4Y2RkZjAwMTU1ZDY3YTYiLCJpYXQiOjE3NTIyMjExNzksImV4cCI6MTc1MzQzMDc3OX0.XRkzjhDkenkS5Vnx7HD3I_S6-pTcBIbI2l4rqA49sWI",
  },
})
  .then((res) => {
    if (res.ok) {
      console.log(res);
      return res.json();
    } else {
      throw new Error(`errore_${res.status}`);
    }
  })
  .then((data) => {
    console.log(data);

    img.setAttribute("src", data.imageUrl);
    nome.innerText = data.name;
    des.innerText = data.description;
    price.textContent = data.price;
    brand.innerText = data.brand;
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
