interface Veiculo {
    nome: string;
    placa: string;
    entrada: Date;
};

(function(){
const $ = (query: string): HTMLInputElement | null => document.querySelector(query);
function patio(){

function ler(): Veiculo[]{
    return localStorage.patio ? JSON.parse(localStorage.patio) : []
}
function salvar(veiculo: Veiculo[]){
localStorage.setItem("patio", JSON.stringify(veiculo));
}

function adicionar(veiculo: Veiculo): void{
 const row = document.createElement('tr');
 row.innerHTML = `
    <td>${veiculo.nome}</td>
    <td>${veiculo.placa}}</td>
    <td>${veiculo.entrada}</td>
    <td>
    <button class="delete" data-placa="${veiculo.placa}" >X</button>
    </td>
    `;
    $('#patio')?.appendChild(row);
 
}

function remover(){}

function render(){
    $("#patio")!.innerHTML = "";
    const patio =ler();
    if (patio.length) {
        patio.forEach((veiculo) => adicionar(veiculo));
    }
}
    patio().render;
return{ ler, adicionar, salvar, remover, render}

}

$ ('#cadastrar')?.addEventListener('click', ()=> {
    const nome = $('#nome')?.value;
    const placa = $('#placa')?.value;
     if (nome  || placa) {
         alert(' Nome e placa são obrigatorio')
         return;
     }
     patio().adicionar({
    nome: "",
    placa: "",
    entrada: new Date()
});
})
})();