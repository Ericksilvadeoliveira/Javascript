let num = document.getElementById('num')
let lista = document.getElementById('lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, let) {
    if (let.indexOf(Number(n)) != -1) {
        return true
    } else {
        false
    }

}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) // adicionar elemento em um vetor(no caso let valores [])
        let item = document.createElement('option') // para adicionar na tela tem que criar uma option
        item.text = `Valor ${num.value} adicionado`// string com possibilidade de interpolação
        lista.appendChild(item)
        res.innerHTML = '' // para limpar a analise lá em baixo sempre que adicionar um número
    } else {
        alert('Valor inválido ou já adicionado a lista.')
    }
    num.value = '' // assim que clicar em adicionar, vai apagar o número do input
    num.focus() // junto com num.value faz com que o foco fique no (já limpo) input(adicionar) depois de cada click
}

function analisar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length // tamanho do vetor
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0 // soma recebe o primeiro conteúdo elemento
        let media = 0 // msm coisa

        for (let pos in valores) { // para cada posição em valores
            soma += valores[pos] // ou seja, vai sempre receber e somar cada no número no vetor
            media 
            if (valores[pos] > maior) { // passando o maior índice dentro do vetor para a let MAIOR 
                maior = valores[pos]
            }

            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot // aqui fora porque n vai usar valores[pos]

        res.innerHTML = '' // zerar res(componente lá de cima) que é a div separada para analisar
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>` // o +(para contatenar/juntar com '' anterior)
        res.innerHTML += `<p>O maior número cadastrado é ${maior} e o menor é ${menor}`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}`
        res.innerHTML += `<p>A média dos valores adicionados é ${media}`    
    }
}

function limpar() {
    location.reload()
}


