function alterarStatus(numero) {
    let clicked = document.getElementById(`game-${numero}`);
    let imagem = clicked.querySelector('.dashboard__item__img');
    let botao = clicked.querySelector('.dashboard__item__button');
    let nome = clicked.querySelector('.dashboard__item__name')

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        removerStatus(imagem, botao, 'Alugar', 'dashboard__item__img--rented', 'dashboard__item__button--return');
    } else {
        adicionarStatus(imagem, botao, 'Devolver', 'dashboard__item__img--rented', 'dashboard__item__button--return');
    }
}

function adicionarStatus(imagem, botao, textoBotao, classeImagem, classeBotao) {
    imagem.classList.add(classeImagem);
    botao.classList.add(classeBotao);
    botao.textContent = textoBotao;
}

function removerStatus(imagem, botao, textoBotao, classeImagem, classeBotao) {
    imagem.classList.remove(classeImagem);
    botao.classList.remove(classeBotao);
    botao.textContent = textoBotao;
}
