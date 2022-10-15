/*alert("oi")*/
/*esse alerta é uma função do JavaScript. 
É aquela janela que aparece assim que vc entra em um site */
/*quanto menos comentário, melhor. comentários demais não é legal.*/
/* 

    OBJETIVO - Quando clicarmos na aba, temos que mostrar o conteúdo da aba que foi criada e esconder o conteúdo da aba anterior.


    passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

    passo 2 - identificar o cloque no elemento da aba

    passo 3 - quando o usuario clicar, desmarcar a aba selecionada

    passo 4 - marcar a aba clicada como selecionada

    passo 5 - esconder o conteúdo anterior

    passo 6 - mostrar o conteúdo da aba selecionada

*/
//passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

//console.log(document.querySelectorAll(".aba"));
//quando tem um ponto ou é uma propriedade ou é um método, quando é um método, dentro dos parentese é uma ação.

const tabs = document.querySelectorAll(".tab");
//const = diz que essa lista de abas será constante. ng pode alterar esse valor. teu proprio script não pode alterar o valor da variavel aba, pq ela é um valor constante.

// passo 2 - identificar o clique no elemento da aba
tabs.forEach(tab => {
    // passo 2 - identificar o clique no elemento da aba
    tab.addEventListener("click", function() {
   
        //guard clause - nem precisava existir esse código, mas ele evita que um outro código seja lido sem necessidade.
    if(tab.classList.contains("selected")){
        return;
    };

    // passo 3 - quando o usuario clicar, desmarcar a aba selecionada
    /*const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    //passo 4 - marcar a aba clicada como selecionada
    aba.classList.add("selecionado"); */

    //PASSO 3 E PASSO 4 são referentes à ABA
    //Os passos 3 e 4 podem ser resumidos dentro de uma função:

    selectTab(tab)

    showInfosTab(tab)

    //PASSO 5 E 6 são referentes à INFORMAÇÃO DA ABA
    //Os passos 5 e 6 podem ser resumidos dentro de uma função:

    //passo 5 - esconder o conteúdo anterior
    /*const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // passo 6 - mostrar o conteúdo da aba selecionada
    // const idDoElementoDeInformacoesDaAba = "informacao-" + aba.id;
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    //acima criamos uma string
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado");*/
    

    }); // tudo isso aqui está sendo feito dentro do (click)
});

function selectTab(tab){
    // passo 3 - quando o usuario clicar, desmarcar a aba selecionada
    const tabSelected = document.querySelector(".tab.selected");
    tabSelected.classList.remove("selected");

    //passo 4 - marcar a aba clicada como selecionada
    tab.classList.add("selected");
}

function showInfosTab(tab){
    //passo 5 - esconder o conteúdo anterior
    const infoSelected = document.querySelector(".info.selected");
    infoSelected.classList.remove("selected");

    // passo 6 - mostrar o conteúdo da aba selecionada
    // const idDoElementoDeInformacoesDaAba = "informacao-" + aba.id;
    const idElementInfosTab = `info-${tab.id}`
    //acima criamos uma string
    const infoToBeShown = document.getElementById(idElementInfosTab)
    infoToBeShown.classList.add("selected");
}
//escrever funções com os verbos no infinitivo e imperativo para demonstrar que se trata de uma ação.
