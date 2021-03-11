import { RequestApi } from '../../Services/Request';

export const statisticProducts = (state, name) => {
  const idUser = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RhbmRvQGhvdG1haWwuY29tIiwiaWQiOjExLCJpYXQiOjE2MTQ5MTU0MDAsImV4cCI6MTY0NjQ3MzAwMH0.LGhyK18HoyJd1TKFNz5ulxENctrc8OegcCEPOCKjMv4"
  const path = "orders";
  const methodType = "GET";

  RequestApi(path, methodType, idUser)
    .then(response => response.json())
    .then(result => {
      const product = result.map((order) =>{
        return order.Products.filter((item) =>{
          if(item.name.includes(`${name}`)){
          return item }
        })
      })
      state(product)
    }
    )
    .catch(error => console.log('error', error));
};

