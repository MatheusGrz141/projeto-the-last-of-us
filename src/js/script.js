let botoesCarrosel = document.querySelectorAll('.botao');
botoesCarrosel.forEach((botao , index)=>{
    botao.addEventListener('click' ,() =>{
        
        
        removerBotaoSelecionado();
        selecionarBotao(botao);
        esconderImagemAtiva(); 
        mudarImagemDeFundo(index);
        
    })
})

function mudarImagemDeFundo(index) {
    const imagens = document.querySelectorAll('.imagem');
    imagens[index].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function selecionarBotao(botao) {
    botao.classList.add('selecionado');
}

function removerBotaoSelecionado() {
    const selecionado = document.querySelector('.selecionado');
    selecionado.classList.remove('selecionado');
}
