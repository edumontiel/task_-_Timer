let contador = 0;
let input = document.getElementById("inputTarefa");
let btn = document.getElementById("btn_add");
let main = document.getElementById("areaLista");

function addTarefa(){
    //PEGAR VALOR DIGITADO
    let valorInput = input.value;

    //SE FOR VALOR NULO, SERÁ DESCONTINUADO
    if (valorInput !== "" && valorInput !== null && valorInput !== undefined){
        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`;

        //ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        //ZERAR OS CAMPOS
        input.value = "";
        input.focus();
        }
    }

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");
    console.log(classe);

    if(classe == "item"){
    item.classList("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");

    item.parentNode.appendChild(item);
    } else {
        item.classList.remove("clicado");

        var icone = document.getElementById("icone_" + id);
        icone.classLIst.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    }        
}

input.addEventeListener("keyup",function(event){
    //SE TECLAR F13 OU ENTER
    if (event.keycode === 13){
        event.preventDefault();
        btnadd.click();
    } 
});