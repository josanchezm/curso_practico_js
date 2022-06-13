// código del cuadrado

console.group("Cuadrado");
function Cuadrado(ladoCuadrado, unidadCuadrado) {
    console.log(`los lados del cuadrado miden: ${ladoCuadrado} ${unidadCuadrado}`);

    const perimetroCuadrado = (ladoCuadrado * 4).toFixed(2);
    console.log("El perímetro del cuadrado es: "+perimetroCuadrado+ ` ${unidadCuadrado}`);

    const areaCuadrado = (ladoCuadrado*ladoCuadrado).toFixed(2);
    console.log("El área del cuadrado es: "+areaCuadrado+` ${unidadCuadrado}`+ "^2");

    var perimetroAreaCuadrado = `perímetro: ${perimetroCuadrado} ${unidadCuadrado} 
    área: ${areaCuadrado} ${unidadCuadrado}^2`
    return perimetroAreaCuadrado;
}
Cuadrado(5, "cm");
console.groupEnd();

// código del triángulo

console.group("Triangulo");
function Triangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo, unidadTriangulo) {

    if (ladoTriangulo1 === ladoTriangulo2 && ladoTriangulo1 != baseTriangulo) {
        console.log(`los lados del triángulo miden: ${ladoTriangulo1} ${unidadTriangulo} y su base: ${baseTriangulo} ${unidadTriangulo}`);

        const alturaTriangulo = (Math.sqrt((Math.pow(ladoTriangulo1,2)-(Math.pow(baseTriangulo,2)/4)))).toFixed(2);
        console.log(`la altura del triángulo es: ${alturaTriangulo} ${unidadTriangulo}`);

        const perimetroTriangulo = ((ladoTriangulo1*2)+baseTriangulo).toFixed(2);
        console.log("El perímetro del triángulo es: "+perimetroTriangulo+` ${unidadTriangulo}`);

        const areaTriangulo = ((baseTriangulo*alturaTriangulo)/2).toFixed(2);
        console.log("El área del tríangulo es: "+areaTriangulo+` ${unidadTriangulo}`+ "^2");

        var alturaPerimetroAreaTriangulo = `
        altura: ${alturaTriangulo} ${unidadTriangulo}
        perímetro: ${perimetroTriangulo} ${unidadTriangulo}
        área: ${areaTriangulo} ${unidadTriangulo}^2
        `;
        return alturaPerimetroAreaTriangulo;
    }   else {
            alert("Los triángulos isóceles presentan dos lados congruentes el uno con el otro y difieren de la base. Vuelva a intentarlo");
            alturaPerimetroAreaTriangulo = " ";
            return alturaPerimetroAreaTriangulo;
        }   
}
Triangulo(6,6,4,"cm");
console.groupEnd();

// código del círculo

console.group("Circulo");
function Circulo(radioCirculo,unidadCirculo) {
    const diametroCirculo = radioCirculo*2;
    const pi = Math.PI;
    console.log(`El radio del círculo es: ${radioCirculo} ${unidadCirculo}, por tanto su diametro: ${diametroCirculo} ${unidadCirculo}`);

    const circunferencia = (diametroCirculo * pi).toFixed(2);
    console.log(`la circunferencia es: ${circunferencia} ${unidadCirculo}`);

    const areaCirculo = ((radioCirculo*radioCirculo)*pi).toFixed(2);
    console.log(`el área del círculo es: ${areaCirculo} ${unidadCirculo}^2`); 
    
    var cirfuncerenciaAreaCirculo = `circunferencia: ${circunferencia} ${unidadCirculo}
    área: ${areaCirculo} ${unidadCirculo}^2`;

    return cirfuncerenciaAreaCirculo;
}
Circulo(4,"cm");
console.groupEnd();

// código del círculo pero invocando funciones dentro de otras

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

// Interacción con HTML - Cuadrado

function calculoCuadrado() {
    const inputCuadradoMedida = document.getElementById("Cuadrado-medida");
    const valueCuadradoMedida = inputCuadradoMedida.value;
    const inputCuadradoUnidad = document.getElementById("Cuadrado-unidad"); 
    const valueCuadradoUnidad = inputCuadradoUnidad.value;

    const returnCuadrado = Cuadrado(valueCuadradoMedida,valueCuadradoUnidad);
    const contenedor = document.getElementById("contenedor_cuadrado");
    contenedor.style.paddingBottom = "70px";
    const flecha = document.getElementById("flecha_cuadrado");
    flecha.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Arrow_east.svg" alt="longitud lado cuadrado"></img>`;
    flecha.style.opacity = "100%";
    const lado = document.getElementById("lado_cuadrado");
    lado.innerText = `${valueCuadradoMedida} ${valueCuadradoUnidad}`;
    lado.style.opacity = "100%";
    const resultado = document.getElementById("resultado_cuadrado");
    resultado.innerText = returnCuadrado;
    return resultado;
}

// Interacción con HTML - Triangulo

function calculoTriangulo() {
    const inputTrianguloLado = document.getElementById("Triangulo-lado"); 
    const valueTrianguloLado = inputTrianguloLado.value;
    const inputTrianguloLado2 = document.getElementById("Triangulo-lado2");
    const valueTrianguloLado2 = inputTrianguloLado2.value;
    const inputTrianguloBase = document.getElementById("Triangulo-base");
    const valueTrianguloBase = inputTrianguloBase.value;
    const inputTrianguloUnidad = document.getElementById("Triangulo-unidad");
    const valueTrianguloUnidad = inputTrianguloUnidad.value;

    if(valueTrianguloLado === valueTrianguloLado2 && valueTrianguloLado != valueTrianguloBase) {
        const returnTriangulo = Triangulo(valueTrianguloLado,valueTrianguloLado2,parseFloat(valueTrianguloBase),valueTrianguloUnidad);
        const flecha_lado = document.getElementById("flecha_triangulo_lado");
        flecha_lado.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Arrow_east.svg"  alt="longitud lado triangulo"></img>`;
        flecha_lado.style.opacity = "100%";
        const flecha_base = document.getElementById("flecha_triangulo_base");
        flecha_base.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Arrow_east.svg"  alt="longitud lado cuadrado"></img>`;
        flecha_base.style.opacity = "100%";
        const flecha_altura = document.getElementById("flecha_triangulo_altura");
        flecha_altura.innerHTML = `<img src="https://icons.iconarchive.com/icons/iconsmind/outline/256/View-Height-icon.png" alt="longitud lado cuadrado"></img>`;
        flecha_altura.style.opacity = "100%";
        const lado = document.getElementById("lado_triangulo");
        lado.innerText = `${valueTrianguloLado} ${valueTrianguloUnidad}`;
        lado.style.opacity = "100%";
        const base = document.getElementById("base_triangulo");
        base.innerText = `${valueTrianguloBase} ${valueTrianguloUnidad}`;
        base.style.opacity = "100%";
        const calculo_altura = (Math.sqrt((Math.pow(valueTrianguloLado,2)-(Math.pow(parseFloat(valueTrianguloBase),2)/4)))).toFixed(2);
        const altura = document.getElementById("altura_triangulo");
        altura.innerText = `${calculo_altura} ${valueTrianguloUnidad}`;
        altura.style.opacity = "100%";
        const resultado = document.getElementById("resultado_triangulo");
        resultado.innerText = returnTriangulo;
        return resultado;
    } else {
        alert("Los triángulos isóceles presentan dos lados congruentes el uno con el otro y difieren de la base. Vuelva a intentarlo");
        return " ";
    }
}

// Interacción con HTML - Circulo

function calculoCirculo() {
    const pi = Math.PI;
    const inputCirculoRadio = document.getElementById("Circulo-radio");
    const valueCirculoRadio = inputCirculoRadio.value;
    const inputCirculoUnidad = document.getElementById("Circulo-unidad");
    const valueCirculoUnidad = inputCirculoUnidad.value;

    const returnCirculo = Circulo(valueCirculoRadio,valueCirculoUnidad);
    const radio = document.getElementById("radio_circulo");
    radio.innerText = `r = ${valueCirculoRadio} ${valueCirculoUnidad}`;
    radio.style.opacity = "100%";
    const calculo_diametro = (valueCirculoRadio*2).toFixed(2);
    const diametroCirculo = document.getElementById("diametro_circulo");
    diametroCirculo.innerText = `d = ${calculo_diametro} ${valueCirculoUnidad}`;
    diametroCirculo.style.opacity = "100%";
    const calculo_circunferencia = (calculo_diametro*pi).toFixed(2); 
    const circunferencia = document.getElementById("circunferencia_circulo");
    circunferencia.innerText = `c = ${calculo_circunferencia} ${valueCirculoUnidad}`;
    circunferencia.style.opacity = "100%";
    const resultado = document.getElementById("resultado_circulo");
    resultado.innerText = returnCirculo;
    return resultado;
}

// Perro en js pq si

// var perro = {
//     raza: "husky",
//     pelaje: "gris con blanco",
//     annios: 4,
//     ladrido: function ladrar() {
//         alert("wuf wuf");
//     }
// }

// perro.ladrido();
// alert(perro.raza);









