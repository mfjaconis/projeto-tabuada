
 function tabuada() {
    let numero = document.getElementById('txtnum')
    let tab = document.getElementById('res')
    let msg = document.getElementById('mensagem')

    if (numero.value.length == 0) {
        alert('Por favor, digite um número valido!')
    } else {

        let n = Number(numero.value)
        tab.innerHTML = ''
        msg.innerHTML = ''
        msg.innerHTML += `<strong>Tabuada do número ${n}</strong>` 
        for (let t = 1; t <= 10; t++) {
            let item = document.createElement('option')
            item.text = `${n} x ${t} = ${n*t}`
            tab.appendChild(item)
        }
    }

 }