(function(){
const $ = (query: string): HTMLInputElement | null => document.querySelector(query);
function patio(){

function ler(){}

function adcionar(){}

function salvar(){}

function remover(){}

function render(){}

return{ ler, adcionar, salvar, remover, render}








}

$ ('#cadastrar')?.addEventListener('click', ()=> {
    const nome = $('#nome')?.value;
    const placa = $('#placa')?.value;
     if (nome  || placa) {
         alert(' Nome e placa são obrigatorio')
         return;
     }
})
})();