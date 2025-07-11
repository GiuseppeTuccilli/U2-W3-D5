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
      throw new Error("la chiamata non è ok");
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
    console.log("errore", er);
  });
