//loja de celulares

console.log("cellphone");
console.log("Aqui só tem aparelhos BBB, bom, barato e bonito!\n");

class Produto {
    constructor(id, descricao, ativo, estoque, preco, marca, modelo) {
      this.id = id;
      this.descricao = descricao;
      this.ativo = ativo;
      this.estoque = estoque;
      this.preco = preco;
      this.marca = marca;
      this.modelo = modelo;
    }
  
    ativar() {
      this.ativo = true;
    }
  
    retirarEstoque(quantidade) {
      if (quantidade <= this.estoque) {
        this.estoque -= quantidade;
      } else {
        console.log("Estoque insuficiente!");
      }
    }
  
    incluirEstoque(quantidade) {
      this.estoque += quantidade;
    }              
        retirarEstoque(valor){				
        if (this.ativo){				
        if(valor<0){				
        console.log("Impossivel realizar, valor negativo")				
        }				
        else if(valor==0){				
        console.log("Impossivel realizar, valor zerado...")				
        }				
        else {				
        this.saldo += valor				
        }				
        }				
        else {				
        console.log("Conta inativa....")				
        }				
        }				
                        
        incluirEstoque(valor){				
        if (this.ativo){				
        if(valor<0){				
        console.log("Impossivel realizar, valor negativo...")				
        }				
        else if(valor ==0 ){				
        console.log("Impossivel realizar, valor zerado...")				
        }				
        else if (valor>this.saldo){				
        console.log("Impossivel realizar, saldo indisponivel...")				
        }				
        else {				
        this.saldo -= valor				
        }				
        }				
        else {				
        console.log("Conta inativa...")				
        }				
        }				
  }

  const leia = require("prompt-sync")();

  const id = parseInt(leia("Digite o id do produto: "));
  
  const celular = new Produto(id, "Celular", true, 10, 2500, "Samsung", "Galaxy S20fe");
  console.log("Estoque inicial:", celular.estoque);
  for (let i = 0; i < 5; i++) {
    const quantidadeCompra = Math.floor(Math.random() * 5) + 1;
    console.log(`Compra ${i + 1}:`);
    console.log("Produto:", celular.descricao);
    console.log("Marca:", celular.marca);
    console.log("Modelo:", celular.modelo);
    console.log("Saldo atual do estoque:", celular.estoque);
    console.log("Valor total da compra:", quantidadeCompra * celular.preco);
    celular.retirarEstoque(quantidadeCompra);
    console.log("__________________________");
  }

  const estoqueFinal = 10 - celular.estoque;
  console.log("Incluir estoque final:", estoqueFinal);
  celular.incluirEstoque(estoqueFinal);
  console.log("Estoque final:", celular.estoque);
							

				
				
			