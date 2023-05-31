function carregarProdutosDestaque() {
    
    var produtos = [
      { nome: 'Celular A', preco: 999.99 },
      { nome: 'Celular B', preco: 799.99 },
      { nome: 'Celular C', preco: 699.99 }
    ];
  
    var produtosDiv = document.getElementById('produtos');
  
    produtos.forEach(function(produto) {
      var produtoDiv = document.createElement('div');
      produtoDiv.innerHTML = '<h3>' + produto.nome + '</h3><p>R$ ' + produto.preco + '</p>';
      produtosDiv.appendChild(produtoDiv);
    });
  }
  
  function processarFormularioContato(event) {
    event.preventDefault(); 
  
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
  
    console.log('Dados do formulário:');
    console.log('Nome: ' + nome);
    console.log('Email: ' + email);
    console.log('Mensagem: ' + mensagem);
  
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
  }
  
  window.addEventListener('DOMContentLoaded', carregarProdutosDestaque);
  
  var formularioContato = document.getElementById('formulario-contato');
  formularioContato.addEventListener('submit', processarFormularioContato);