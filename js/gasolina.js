// DOM

const distancia = document.querySelector('#distancia');
const rendimento = document.querySelector('#rendimento');
const preco = document.querySelector('#preco');
const button = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

// EVENTOS

button.addEventListener('click', calcularGasolina);

//FUNCTION

function calcularGasolina(){

    event.preventDefault()// para desativar o recurso do formulario que é de back-end //

    // EXTRAINDO OS VALORES DOS INPUTS //
    let valor1 = distancia.value;
    let valor2 = rendimento.value;
    let valor3 = preco.value;

//CALCULO DO VALOR GASTO // 

    let valorFinal = ((valor1 / valor2)*valor3).toFixed(2);

    if(!valor1 || valor2 || valor3){

  //template para demonstrar resultado//

        resultado.innerHTML = `<h3> O custo total da viagem, será de R$ ${valorFinal}</h3>`; 
    }else{
        resultado.innerHTML = `<h4> Preencha os campos</h4>`; 

    }

  
}