// Função que ira converter a moeda + o request de uma api para pegar a conversão do dolar comercial
function currencyConverter() {
    var currencyValueBRL = Number(document.querySelector('#container__input-brl').value);

    // URL com o tipo de moeda (Por enquanto só USD), para devolver a cotação
    const urlApi = "https://economia.awesomeapi.com.br/json/USD-BRL";

    // Realizando o request para a api [https://docs.awesomeapi.com.br/api-de-moedas]
    const requestApi = new XMLHttpRequest();
    requestApi.open('GET', urlApi, false);
    requestApi.send();


    // Tratando os dados para JSON
    const responsedata = requestApi.responseText;
    const responseApi = JSON.parse(responsedata);
    console.log(responseApi);

    var Dolar = `${Number(responseApi[0].low)}`;
    /* console.log(Dolar); */


    var convertedCurrency =  currencyValueBRL * Dolar;

    var test = document.querySelector('.container__input-result');
    test.value = convertedCurrency.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

    /* console.log(test); */
}