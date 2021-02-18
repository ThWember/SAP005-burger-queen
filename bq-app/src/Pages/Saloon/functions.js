
export const SendOrder = (name, table) => {
    localStorage.setItem("client", name)
    localStorage.setItem("table", table)
    alert("Pedido enviado a cozinha")
}