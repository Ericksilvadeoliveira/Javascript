function contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fin')
    let int = document.getElementById('int')
    let res = document.getElementById('prep') // let = var

    if (ini.value.length == 0 || fim.value.length == 0 || int.value.length == 0) {
        res.innerHTML = 'Impossível Contar!'
        //alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let it = Number(int.value)
        if (it == 0) {
            alert('Intervalo inválido! Considerando Intervalo 1')
            it = 1
        }
        if (i < f) {
            // contagem crescente
            for (let c = i; c <= f; c += it) {
                res.innerHTML += ` ${c} \u{1f449}`  
            }
        } else {
            // contagem regressiva
            for (let c = i; c>= f; c -= it) {
                res.innerHTML += `${c} \u{1f449}`
            }  
        }
        res.innerHTML += `\u{1f3c1}`
    }
}

