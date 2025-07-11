const endpoint = "https://striveschool-api.herokuapp.com/api/product/";

const getData = function () {
  fetch(endpoint, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzVmYjc4Y2RkZjAwMTU1ZDY3YTYiLCJpYXQiOjE3NTIyMjExNzksImV4cCI6MTc1MzQzMDc3OX0.XRkzjhDkenkS5Vnx7HD3I_S6-pTcBIbI2l4rqA49sWI",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("la chiamata non torna 200");
      }
    })
    .then((data) => {
      console.log(data);
      const row = document.querySelector(".row");
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]._id);
        row.innerHTML += `
      <div class="col col-12 col-md-6 col-lg-3">
            <div class="card">
              <a href='./datails.html?id=${data[i]._id}'><img
                
                src='${data[i].imageUrl}'
                class="card-img-top w-100"
                alt="${data[i].name}"
                style="height: 200px; width: auto; object-fit: contain"
              /></a>
              <div class="card-body">
                <h5 class="card-title">${data[i].name}</h5>
                
                <p class="card-text">Prezzo: <span class="price">${data[i].price}</span>$</p>
                <a href="./backoffice.html?id=${data[i]._id}" class="btn btn-primary">Modifica</a>
              </div>
            </div>
          </div>
      `;
      }
    })
    .catch((er) => {
      console.log("errore", er);
    });
};

getData();
