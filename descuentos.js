/* const precioOriginal = 120;
const descuento = 18; */



/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}); */

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    price = document.getElementById("inputPrice");
    const priceValue = price.value;
    discount = document.getElementById("inputDiscount");
    const discountValue = discount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento son $" + precioConDescuento;
}