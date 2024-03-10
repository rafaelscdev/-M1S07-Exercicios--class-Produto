class Produto {
    nome;
    preco;
    quantidade;
    ///////////////////////// 2
    constructor(valorNome, valorPreco, valorQuantidade) {
        this.nome = valorNome
        this.preco = valorPreco
        this.quantidade = valorQuantidade
    }
    ///////////////////////// 3
    Vender(quantidadeVendida) {
        if (quantidadeVendida > this.quantidade) {
            console.log("Estoque insuficiente!")
            console.log(`Existe apenas ${this.quantidade} unidades disponíveis.`)
            return
        }

        // this.quantidade = this.quantidade - quantidadeVendida
        this.quantidade -= quantidadeVendida
    }
//////////////////////////// 4
    Repor(quantidadeReposta) {
        this.quantidade += quantidadeReposta
    }
//////////////////////////// 5
    MostrarEstoque() {
        console.log(`O produto ${this.nome} custa R$ ${this.preco}\n e possui ${this.quantidade} unidades em estoque!`)
    }
/////////////////////////// 6
    AtualizarPreco(novoValor) {
        this.preco = novoValor
    }
}

class Pessoa {
    nome;
    idade;
    profissao;

    constructor(nome, idade, profissao) {
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
}

class Cliente extends Pessoa {
    telefone;
    email;
    clienteDesde;

    constructor(nome, idade, profissao, telefone, email, clienteDesde) {
        super(nome, idade, profissao)
        this.telefone = telefone
        this.email = email
        this.clienteDesde = clienteDesde
    }
}

const clienteRafael = new Cliente("Rafael", 31, "Game Designer", "555343466", "exemplo@email.com", "2024-03-08")
console.log(clienteRafael)






/* ---------- TESTES ----------- */
// instância
const caneta = new Produto("Caneta", 2, 5)
caneta.Vender(10)
caneta.Repor(10)
caneta.Vender(12)
caneta.AtualizarPreco(2.5)
caneta.MostrarEstoque()