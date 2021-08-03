//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado
}
//console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();
//Codigo del triangulo
/* console.group("Triangulos");
const ladoTrianguloUno = 6;
const ladoTrianguloDos = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5

console.log("Los lados del triangulo miden: " 
+ ladoTrianguloUno + " cm, " 
+ ladoTrianguloDos + " cm, " 
+ baseTriangulo + " cm") */

//console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

function perimetroTriangulo(ladoUno, ladoDos, base){
    return ladoUno + ladoDos + base;
}

//console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

//console.log("El area del triangulo es de: " + areaTriangulo + " cm^2");

console.groupEnd();

//Codigo del circulo
console.group("Circulos");

// Radio
//const radioCirculo = 4;
//console.log("El radio del circulo mide: " + radioCirculo + " cm");

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}
//console.log("El diametro del circulo mide: " + diametroCirculo + " cm");

// PI
const PI = Math.PI;
// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};
//console.log("El perimetro del circulo mide: " + perimetroCirculo + " cm");

// Area
function areaCirculo(radio){
    return PI * (radio * radio);
}
//console.log("El area del circulo es de: " + areaCirculo + " cm^2");

function alturaIsoceles(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        return Math.sqrt((lado1 * lado1) - ((base * base) / 4));
    }else{
        console.log("F");
    }
}
console.groupEnd();


//Aqui se interactua con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

