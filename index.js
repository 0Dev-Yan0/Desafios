const tag = document.getElementById("resultado");
const lista_num =  [ ];

var feet = false;
var meters =  false;

function feet_function () {
    Pedido_feet();
};

function meters_function () {
    Pedido_meters()
};

function Pedido_feet () {
    let altura = prompt("Qual a altura do quarto?");
    let largura = prompt("Qual a largura do quarto?");

    let lista_Altura = altura.split('');
    let lista_Largura = largura.split('');

    for (let i = 0; i < lista_Altura.length; i++) {
        lista_num.push(lista_Altura[i]);
        console.log(lista_num);
};
};

function Pedido_meters () {
    let altura = prompt("Qual a altura do quarto?");
    let largura = prompt("Qual a largura do quarto?");

    if (!altura.includes(altura) && !largura.includes(largura)) {
        alert("Somente aceitamos números dentro do input!")
        Pedido_meters();
    } else {
        calculo_meters(altura, largura);
    };
}

function calculo_feet (altura, largura) {
    let square_feet = altura * largura;
    const metro_quadrado = square_feet * 0.09290304;
    return alert(metro_quadrado);
};

function calculo_meters (altura, largura) {
    let square_feet = altura * largura;
    return alert(square_feet);
};
