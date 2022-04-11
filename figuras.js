// codigo del cuadrado

console.group("Cuadrado");

function Cuadrado(ladoCuadrado, unidadCuadrado) {
    console.log(`los lados del cuadrado miden: ${ladoCuadrado} ${unidadCuadrado}`);

    const perimetroCuadrado = ladoCuadrado * 4;
    console.log("El perimetro del cuadrado es: "+perimetroCuadrado+ ` ${unidadCuadrado}`);

    const areaCuadrado = ladoCuadrado*ladoCuadrado;
    console.log("El area del cuadrado es: "+areaCuadrado+` ${unidadCuadrado}`+ "^2");

    var perimetroAreaCuadrado = [
        {perimetro: `${perimetroCuadrado} ${unidadCuadrado}`},
        {area: `${areaCuadrado} ${unidadCuadrado}^2`}
    ];

    return perimetroAreaCuadrado;
}
Cuadrado(5, "cm");
console.groupEnd();

// codigo del triangulo

console.group("Triangulo");

function Triangulo(ladoUnoTriangulo, ladoDosTriangulo, baseTriangulo, alturaTriangulo, unidadTriangulo) {
    console.log(`los lados del triangulo miden: ${ladoUnoTriangulo} ${unidadTriangulo} y ${ladoDosTriangulo} ${unidadTriangulo}. Su base mide ${baseTriangulo} ${unidadTriangulo}, y su altura ${alturaTriangulo} ${unidadTriangulo}`);

    const perimetroTriangulo = ladoUnoTriangulo+ladoDosTriangulo+baseTriangulo;
    console.log("el petrimetro del triangulo es: "+perimetroTriangulo+` ${unidadTriangulo}`);

    const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
    console.log("el area del triangulo es: "+areaTriangulo+` ${unidadTriangulo}`+ "^2"); 
    
    var perimetroAreaTriangulo = [
        {perimetro: `${perimetroTriangulo} ${unidadTriangulo}`},
        {area: `${areaTriangulo} ${unidadTriangulo}^2`}
    ]

    return perimetroAreaTriangulo;
}
Triangulo(6,6,4,5.5,"cm");
console.groupEnd();

// codigo del circulo

console.group("Circulo");

function Circulo(radioCirculo,unidadCirculo) {
    const diametroCirculo = radioCirculo*2;
    const pi = Math.PI;
    console.log(`El radio del circulo es: ${radioCirculo} ${unidadCirculo} y su diametro: ${diametroCirculo} ${unidadCirculo}`);

    const circunferencia = diametroCirculo * pi;
    console.log(`la circunferencia es: ${circunferencia} ${unidadCirculo}`);

    const areaCirculo = (radioCirculo*radioCirculo)*pi;
    console.log(`el area del circulo es: ${areaCirculo} ${unidadCirculo}^2`); 
    
    var cirfuncerenciaAreaCirculo = [
        {circunferencia: `${circunferencia} ${unidadCirculo}`}, 
        {area: `${areaCirculo} ${unidadCirculo}^2`}
    ]

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









