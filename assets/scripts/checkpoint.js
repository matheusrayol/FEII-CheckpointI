let capturaElementoPai = document.getElementById("lista-cards");
let adicionarCard = document.getElementById("btAdicionar");
let removerCard = document.getElementsByClassName("selecionado");

function inserirNovoCard() {

    // Variáveis dos campos de cadastro
    var inJogo = document.getElementById("inJogo").value;
    var inPlataforma = document.getElementById("inPlataforma").value;
    var inImagem = document.getElementById("inImagem").value;
    var inDescricao = document.getElementById("inDescricao").value;

    // validar o preenchimento dos campos
    if (inJogo == "" || inPlataforma == "" || inDescricao == "" || inImagem == "") {
      alert("Informe os dados corretamente!");
      inJogo.focus();
      return;
    }

    // Criação de um objeto com os dados das variáveis
    var infoCards = {
        jogo: inJogo,
        plataforma: inPlataforma,
        imagem: inImagem,
        descricao: inDescricao
    }

    // Inserção dos dados do objeto na página com manipulação do DOM
    const card = `
        <div class="card text-white bg-dark h-100">
            <img src="${infoCards.imagem}" class="card-img-top" alt="${infoCards.jogo}">
            <div class="card-body d-flex flex-column">
                <h4 class="card-title">${infoCards.jogo}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${infoCards.plataforma}</h6>
                <p class="card-text mb-auto mb-2">${infoCards.descricao}</p>
                <div class="card-footer mt-4">
                    <a href="#" class="btn btn-primary">Remover item</a>
                </div>
            </div>
        </div>`

    // Inserção do card na página
    let novoCard = document.createElement("div");
    novoCard.setAttribute('id', "card");
    novoCard.setAttribute('class', "col-sm-12 col-md-10 col-lg-8 col-xl-6 col-xxl-4")

    novoCard.innerHTML = card;
    capturaElementoPai.appendChild(novoCard);

    // Limpar os campos
    document.getElementById("inJogo").value = "";
    document.getElementById("inPlataforma").value = "";
    document.getElementById("inImagem").value = "";
    document.getElementById("inDescricao").value = "";

}

adicionarCard.addEventListener("click", function(evento) {
    evento.preventDefault();
    inserirNovoCard();
});



// Só falta o script pra remover cards \o/
// Ali do lado no live share tem um item chamado session chat que da pra conversarmos