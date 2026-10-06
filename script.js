 function irParaCardapio() {
    document.getElementById("cardapio").scrollIntoView({
        behavior: "smooth"
    });
}

  function filtrarCardapio(categoria, botao) {

    const produtos = document.querySelectorAll(".produto");
    const botoes = document.querySelectorAll(".filtros button");

    botoes.forEach(function(item) {
        item.classList.remove("filtro-ativo");
    });

    botao.classList.add("filtro-ativo");

    produtos.forEach(function(produto) {

        if (categoria === "todos") {
            produto.style.display = "block";
        } 
        else if (produto.classList.contains(categoria)) {
            produto.style.display = "block";
        } 
        else {
            produto.style.display = "none";
        }

    });
}

  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    alert("✨ Obrigada, " + nome + "! Sua mensagem foi enviada com sucesso! O Chapeleiro agradece.");

    formulario.reset();

});

 function mostrarProduto(nome, preco) {

    alert("Produto: " + nome + "\nPreço: " + preco);

}

 setTimeout(function() {
    document.getElementById("bot-chapeleiro").style.display = "none";
}, 5000);