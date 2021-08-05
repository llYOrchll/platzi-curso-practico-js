function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )  
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const lista1 = [
    100,
    200,
    500,
    40000000,
]

listaOrdenada = lista1.sort(function(a,b){
    return a-b;
})

const mitadLista1 = parseInt(listaOrdenada.length / 2);

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if(esPar(listaOrdenada.length)){
    const elemento1 = listaOrdenada[mitadLista1 - 1];
    const elemento2 = listaOrdenada[mitadLista1];

        const promedioElement1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElement1y2;

}else{
    mediana = listaOrdenada[mitadLista1];
}