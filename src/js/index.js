/*
    Objetivo 1 - Quando o usuário clicar no botão de 'mostrar mais' deve abrir os projetos que estão escondidos no html
        Passo 1 - Pegar o botão 'mostrar mais' no JS pra poder verificar quando o usuário clicar em cima dele.

        Passo 2 - Identificar o clique no botão

        Passo 3 - Adicionar a classe "ativo" nos projetos escondidos

      Objetivo 2 - Esconder o botão de 'mostrar mais'  
        Passo 1 - Pegar o botão e esconder ele

*/

//
//OBJ1
/* explicações: 
    referências de objetos contém constantes e variáveis que vão trazer informações da página ou de outras classes e funções ou métodos que representam as operações que manipulam ou interagem com a página, exemplo > objeto.método(Nargumentos) > document.getElementById('botao');
    variáveis são nomes asssociados a um espaço / endereço de memória do computador destinado a armazenar dados de qualquer tipo, sendo elas alteradas  durante a execução do algoritmo. Em javascript se divide em const: uma vez definido o valor, ele não muda em nenhum outro momento; var: o valor armazenado pode ser alterado e fica disponível no js inteiro; let: o valor armazenado pode ser alterado porém seu escopo fica limitado no local de criação(método,classe);
    querySelector -> buscar por seletor (.,#,p)
    As ações feitas pelo usuário se refletem como eventos que são emissões audíveis / interceptáveis dessas ações, por exemplo o clique do botão pelo usuário é uma ação emitida que o javascript pode interceptar e executar uma função lambda(sem nome) -> addEventListener('click', () =>{})
*/
//P1 - usamos a referência de um objeto chamado document para pegar o botão 
const botaMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
// usamos a referência de um objeto chamado document para pegar todos elementos que contenham o seletor classe dos projetos (.projeto), desde que não contenha a classe .ativo e armazenando na referência projetos inativos
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

//P2 - Identificar o clique no botão
botaMostrarProjetos.addEventListener('click', ()=>{
  //P3 - Adicionar a classe "ativo" nos projetos escondidos  
  mostrarMaisProjetos();

  //OB2 - Esconder o botão de 'mostrar mais'  
  //P1 - Pegar o botão e esconder ele
  esconderBotao();
});

function esconderBotao() {
  botaMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos(){
  // 'varre' a lista de projetos inativos um por um e para cada um deles fazer uma ação
  projetosInativos.forEach(projetoInativo => {
    //resgate a lista de classes que pertence ao projetoInativo e inclua a subclasse ativo 
    projetoInativo.classList.add('ativo');
  })
}

//truque para criar uma função automaticamente, selecionar todo o código necessário para a função, clicar com o direito, clicar em refatorar, clicar exctract to function in global scope
//Challenge: adicionar rodapé, incluir o botão menos e trocar conteúdo textual, imagens e projetos para conteúdo próprio