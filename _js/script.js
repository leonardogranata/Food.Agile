let carrinho = [];
let total = 0;

// Função para adicionar itens ao carrinho
function adicionarCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;

    // Atualiza o carrinho no HTML
    atualizarCarrinho();
}

// Função para atualizar o carrinho na interface
function atualizarCarrinho() {
    const itensCarrinho = document.getElementById("itens-carrinho");
    const totalCarrinho = document.getElementById("total");

    // Limpa o carrinho
    itensCarrinho.innerHTML = '';

    // Adiciona os itens do carrinho
    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        itensCarrinho.appendChild(li);
    });

    // Atualiza o total
    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
}


