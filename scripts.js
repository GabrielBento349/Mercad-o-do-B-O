let carrinhoDeCompras = [];

function adicionarAoCarrinho(nomeProduto) {
    carrinhoDeCompras.push(nomeProduto);
    alert(`Produto ${nomeProduto} adicionado ao carrinho.`);
}

function exibirCarrinho() {
    if (carrinhoDeCompras.length === 0) {
        alert("Seu carrinho está vazio.");
    } else {
        alert(`Seu carrinho contém: ${carrinhoDeCompras.join(', ')}`);
    }
}
