// codigo del cuadrado

console.group("Cuadrado");
function Cuadrado(ladoCuadrado, unidadCuadrado) {
    console.log(`los lados del cuadrado miden: ${ladoCuadrado} ${unidadCuadrado}`);

    const perimetroCuadrado = ladoCuadrado * 4;
    console.log("El perimetro del cuadrado es: "+perimetroCuadrado+ ` ${unidadCuadrado}`);

    const areaCuadrado = ladoCuadrado*ladoCuadrado;
    console.log("El area del cuadrado es: "+areaCuadrado+` ${unidadCuadrado}`+ "^2");

    var perimetroAreaCuadrado = `perimetro: ${perimetroCuadrado} ${unidadCuadrado} 
    area: ${areaCuadrado} ${unidadCuadrado}^2`
    return perimetroAreaCuadrado;
}
Cuadrado(5, "cm");
console.groupEnd();

// codigo del triangulo

console.group("Triangulo");
function Triangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo, unidadTriangulo) {

    if (ladoTriangulo1 === ladoTriangulo2 && ladoTriangulo1 != baseTriangulo) {
        console.log(`los lados del triangulo miden: ${ladoTriangulo1} ${unidadTriangulo} y su base: ${baseTriangulo} ${unidadTriangulo}`);

        const alturaTriangulo = Math.sqrt((Math.pow(ladoTriangulo1,2)-(Math.pow(baseTriangulo,2)/4)));
        console.log(`la altura del triangulo es: ${alturaTriangulo} ${unidadTriangulo}`);

        const perimetroTriangulo = (ladoTriangulo1*2)+baseTriangulo;
        console.log("El petrimetro del triangulo es: "+perimetroTriangulo+` ${unidadTriangulo}`);

        const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
        console.log("El area del triangulo es: "+areaTriangulo+` ${unidadTriangulo}`+ "^2");

        var alturaPerimetroAreaTriangulo = `
        altura: ${alturaTriangulo} ${unidadTriangulo}
        perimetro: ${perimetroTriangulo} ${unidadTriangulo}
        area: ${areaTriangulo} ${unidadTriangulo}^2
        `
        return alturaPerimetroAreaTriangulo;
    }   else {
            alert("Los triangulos isoceles presentan dos lados congruentes el uno con el otro y difieren de la base. Vuelve a intentarlo");
        }   
}
Triangulo(6,6,4,"cm");
console.groupEnd();

// codigo del circulo

console.group("Circulo");
function Circulo(radioCirculo,unidadCirculo) {
    const diametroCirculo = radioCirculo*2;
    const pi = Math.PI;
    console.log(`El radio del circulo es: ${radioCirculo} ${unidadCirculo}, por tanto su diametro: ${diametroCirculo} ${unidadCirculo}`);

    const circunferencia = diametroCirculo * pi;
    console.log(`la circunferencia es: ${circunferencia} ${unidadCirculo}`);

    const areaCirculo = (radioCirculo*radioCirculo)*pi;
    console.log(`el area del circulo es: ${areaCirculo} ${unidadCirculo}^2`); 
    
    var cirfuncerenciaAreaCirculo = `circunferencia: ${circunferencia} ${unidadCirculo}
    area: ${areaCirculo} ${unidadCirculo}^2`;

    return cirfuncerenciaAreaCirculo;
}
Circulo(4,"cm");
console.groupEnd();

// codigo del circulo pero invocando funciones dentro de otras

function diametroCirculo(radio) {
    return radio*2;
}

const pi = Math.PI;

function circunferencia(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio) {
    return (radio*radio)*pi;
}

// Interaccion con HTML - Cuadrado

function calculoCuadrado() {
    const inputCuadradoMedida = document.getElementById("Cuadrado-medida");
    const valueCuadradoMedida = 
    inputCuadradoMedida.value;
    const inputCuadradoUnidad = document.getElementById("Cuadrado-unidad"); 
    const valueCuadradoUnidad = inputCuadradoUnidad.value;

    const returnCuadrado = Cuadrado(valueCuadradoMedida,valueCuadradoUnidad);
    alert(returnCuadrado);
}

// Interaccion con HTML - Triangulo

function calculoTriangulo() {
    const inputTrianguloLado = document.getElementById("Triangulo-lado"); 
    const valueTrianguloLado = inputTrianguloLado.value;
    const inputTrianguloLado2 = document.getElementById("Triangulo-lado2");
    const valueTrianguloLado2 = inputTrianguloLado2.value;
    const inputTrianguloBase = document.getElementById("Triangulo-base");
    const valueTrianguloBase = inputTrianguloBase.value;
    const inputTrianguloUnidad = document.getElementById("Triangulo-unidad");
    const valueTrianguloUnidad = inputTrianguloUnidad.value;

    const returnTriangulo = Triangulo(valueTrianguloLado,valueTrianguloLado2,parseInt(valueTrianguloBase),valueTrianguloUnidad);
    alert(returnTriangulo);
}

// Interaccion con HTML - Circulo

function calculoCirculo() {
    const inputCirculoRadio = document.getElementById("Circulo-radio");
    const valueCirculoRadio = inputCirculoRadio.value;
    const inputCirculoUnidad = document.getElementById("Circulo-unidad");
    const valueCirculoUnidad = inputCirculoUnidad.value;

    const returnCirculo = Circulo(valueCirculoRadio,valueCirculoUnidad);
    alert(returnCirculo);
}

// Perro en js pq si

var perro = {
    raza: "husky",
    pelaje: "gris con blanco",
    annios: 4,
    ladrido: function ladrar() {
        alert("wuf wuf");
    }
}

perro.ladrido();
alert(perro.raza);









