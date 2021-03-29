// Função que ira converter a moeda
function currencyConverter() {
    var Dolar = 5.79;
    var currencyValueBRL = Number(document.querySelector('#container__input-brl').value);
    currencyBRL = document.querySelector('#container__input-brl');
    var convertedCurrency = 0;
    var convertUSDtoBRL = currencyValueBRL;

    /* var currencyTypeTo = document.querySelector('.currency-type-to').value; */

    convertedCurrency =  convertUSDtoBRL / Dolar;

    console.log(convertedCurrency);

    return document.querySelector('input.brl').innerHTML = convertedCurrency.toFixed(2);
}

currencyConverter();



