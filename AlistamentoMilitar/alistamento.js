function enviar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nome = window.document.getElementById('txtnome')
    var fano = window.document.getElementById('ano')
    var img = window.document.getElementById('bandeira')
    var cpf = window.document.getElementById('cpf')

    cpf.addEventListener("blur", () => {
        let value = cpf.value.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4")
        
        cpf.value = value;
    });
    if (fano.value.length == 0 || Number(fano.value) > ano || nome.value.length == 0 || Number(cpf.value) ==  0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else  {
        var idade = ano - Number(fano.value)
        var ensi = window.document.getElementsByName('ensino')
        var filho = window.document.getElementsByName('filhouni')
        var desejo = window.document.getElementsByName('servir')
        var user_name = String(nome.value)
        img.setAttribute('id', 'foto')
        if (idade <= 17) {
            window.alert('Você ainda não tem idade sufuciente para o alistamento!')
        } if (ensi[0].checked && filho[0].checked && desejo[0].checked) {
            res.innerHTML = `Você foi convocado para servir!`
            img.src = 'imagens/soldado.png'
        } if (ensi[0].checked && filho[0].checked && desejo[1].checked) {
            res.innerHTML = 'Você foi Dispensado!'
            img.setAttribute('src', 'imagens/dispensado.png')
        } if (ensi[0].checked && filho[1].checked && desejo[1].checked) {
            res.innerHTML = `Você foi convocado para servir!`
            img.setAttribute('src', 'imagens/soldado.png')
        } if (ensi[0].checked && filho[1].checked && desejo[0].checked) {
            res.innerHTML = `Você foi convocado para servir!`
            img.setAttribute('src', 'imagens/soldado.png')
        } if (ensi[1].checked && filho[0].checked && desejo[0].checked) {
            res.innerHTML = `Você foi convocado para servir!`
            img.setAttribute('src', 'imagens/soldado.png')
        } if (ensi[1].checked && filho[0].checked && desejo[1].checked) {
            res.innerHTML = 'Você foi Dispensado!'
            img.setAttribute('src', 'imagens/dispensado.png')
        } if (ensi[1].checked && filho[1].checked && desejo[0].checked) {
            res.innerHTML = `Você foi convocado para servir!`
            img.setAttribute('src', 'imagens/soldado.png')
        } else if (ensi[1].checked && filho[1].checked && desejo[1].checked) {
            res.innerHTML = `Você foi convocado para servir!`
            img.setAttribute('src', 'imagens/soldado.png')
        }
    } 
    nick.innerHTML = `${user_name}`
    res.style.textAlign = 'center'
}
