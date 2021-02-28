
export const ItensDetails = ({eachItem}) => {
    return(
      <>
        <img className="img-menu" alt="food" src={eachItem.image}/>
        <p>{eachItem.name}</p>
        <p>R${eachItem.price}</p>
        <p>{eachItem.flavor}</p>   
        <p>{eachItem.complement}</p>
      </>
    )};
  