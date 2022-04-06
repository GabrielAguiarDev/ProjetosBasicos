function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var dtn = window.document.getElementById('dtn')
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 5 && hora < 12) {
        //BOM DIA!
        dtn.innerHTML = 'Bom Dia!'
        img.src = 'img/fotomanha.png'
        window.document.body.style.background = '#f1d6ba'
    } else if (hora >= 12 && hora < 19) {
        //BOA TARDE!
        dtn.innerHTML = 'Boa Tarde!'
        img.src = 'img/fototarde.png'
        window.document.body.style.background = '#ce8872'
    } else if (hora >= 19 && hora < 23.59) {
        //BOA NOITE!
        dtn.innerHTML = 'Boa Noite!'
        img.src = 'img/fotonoite.png'
        window.document.body.style.background = '#0a456a'
    } else if (hora >= 00 && hora < 5) {
        //BOA MADRUGADA!
        dtn.innerHTML = 'Boa Madrugada!'
        img.src = 'img/fotomadrugada.png'
        window.document.body.style.background = '#191d26'
    } else if (hora > 23.59) {
        alert('[ERRO] Hora inválida. Revise as suas configurações!')
    }
}

