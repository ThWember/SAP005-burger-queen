
export const requestKitchen = (state) => {
    const idUser = localStorage.getItem("token");
    let requestOptions = {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `${idUser}`
      },
      redirect: 'follow'
    };

  fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result)
      
      state(result)
    })
    .catch(error => console.log('error', error));
}

