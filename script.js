"use strict";
;
(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function salvar(veiculo) {
            localStorage.setItem("patio", JSON.stringify(veiculo));
        }
        function adicionar(veiculo) {
            var _a;
            const row = document.createElement('tr');
            row.innerHTML = `
    <td>${veiculo.nome}</td>
    <td>${veiculo.placa}}</td>
    <td>${veiculo.entrada}</td>
    <td>
    <button class="delete" data-placa="${veiculo.placa}" >X</button>
    </td>
    `;
            (_a = $('#patio')) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        }
        function remover() { }
        function render() {
            $("#patio").innerHTML = "";
            const patio = ler();
            if (patio.length) {
                patio.forEach((veiculo) => adicionar(veiculo));
            }
        }
        patio().render;
        return { ler, adicionar, salvar, remover, render };
    }
    (_a = $('#cadastrar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b;
        const nome = (_a = $('#nome')) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $('#placa')) === null || _b === void 0 ? void 0 : _b.value;
        if (nome || placa) {
            alert(' Nome e placa são obrigatorio');
            return;
        }
        patio().adicionar({
            nome: "",
            placa: "",
            entrada: new Date()
        });
    });
})();
