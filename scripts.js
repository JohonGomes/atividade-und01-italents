const listaCompleta = document.querySelector('.list-tasks');
const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
let minhaListaItens = [];

const adicionarNovaTarefa = () => {
minhaListaItens.push({
    tarefa: input.value,
    concluida: false
});
input.value = '';
mostrarTarefas();
}

const mostrarTarefas = () => {
    let novaLi = '';
    minhaListaItens.forEach((item, posicao) => {
        novaLi = novaLi + 
        `
        <li class="task ${item.concluida && "done"}">
            <img src="./img/checked.png" alt="Icone Check" onClick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="Icone Lixeira" onclick="deletarItem(${posicao})"> 
        </li>
        `
    })
    listaCompleta.innerHTML = novaLi;
    localStorage.setItem('lista',JSON.stringify(minhaListaItens))
}

const concluirTarefa = (posicao) => {
    minhaListaItens[posicao].concluida = !minhaListaItens[posicao].concluida 
    mostrarTarefas();
}

const deletarItem = (posicao) => {
    minhaListaItens.splice(posicao, 1);
    mostrarTarefas();
}

const recarregarTarefas = () => {
    const tarefasLocalStorage = localStorage.getItem('lista');
    if(tarefasLocalStorage){
        minhaListaItens = JSON.parse(tarefasLocalStorage);
        mostrarTarefas(); 
    }   
}

recarregarTarefas();
button.addEventListener('click', adicionarNovaTarefa)