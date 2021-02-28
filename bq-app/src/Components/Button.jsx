
  export const Button = ({Class, Funct, Text}) => {
    return(
      <button className={Class} onClick={Funct}>
         {Text}
      </button>
    )
  }