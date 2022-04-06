function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);
  var select = document.getElementById("opcoes");
  var valorEmReais = document.getElementById("valorEmReais");
  var simbolos = document.querySelector(".txtvalor");
  var img = document.querySelector("#imagens");
  var caixaresultado = document.querySelector("#resultado");
  

  if (valorElemento.value.length == 0) {
    window.alert("Insira um valor por favor!")
  } else if (select[0].selected) {
    window.alert("Selecione a moeda por favor!")
  } else {

      caixaresultado.style = 'opacity: 1;'

    if (select[1].selected) {
      //Dólar Americano R$5.34
      let valorConverter = valorNumerico * 5.34;
      simbolos.innerHTML = '&#65284;'
      valorEmReais.innerHTML = `${valorConverter.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
      valorEmReais.style = 'font-size: 1.5em;';
      img.src = 'imagens/bandeira-americana.png'
      
      
    } else if (select[2].selected) {
      //Dólar Canadense R$4.22
      let valorConverter = valorNumerico * 4.22;
      simbolos.innerHTML = 'C&#65284;'
      valorEmReais.innerHTML = `${valorConverter.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
      valorEmReais.style = 'font-size: 1.5em;';
      img.src = 'imagens/bandeira-canada.png'

    } else if (select[3].selected) {
      //Dólar Australiano R$3.87
      let valorConverter = valorNumerico * 3.87;
      simbolos.innerHTML = 'A&#65284;'
      valorEmReais.innerHTML = `${valorConverter.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
      valorEmReais.style = 'font-size: 1.5em;';
      img.src = 'imagens/bandeira-australia.jpg'

    } else if (select[4].selected) {
      //Libra esterlina R$7.29
      let valorConverter = valorNumerico * 7.30;
      simbolos.innerHTML = '&#163;'
      valorEmReais.innerHTML = `${valorConverter.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
      valorEmReais.style = 'font-size: 1.5em;';
      img.src = 'imagens/bandeira-reinounido.png'

    } else if (select[5].selected) {
      //Euro R$6.26
      let valorConverter = valorNumerico * 6.25;
      simbolos.innerHTML = '&#8364;'
      valorEmReais.innerHTML = `${valorConverter.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
      valorEmReais.style = 'font-size: 1.5em;';
      img.src = 'imagens/bandeira-da-uniao-europeia.jpg'

    } else if (select[6].selected) {
      //Iene R$0.048
      let valorConverter = valorNumerico * 0.048;
      simbolos.innerHTML = '&#165;'
      valorEmReais.innerHTML = `${valorConverter.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
      valorEmReais.style = 'font-size: 1.5em;';
      img.src = 'imagens/bandeira-japao.jpg'

    } else if (select[7].selected) {
      //Franco suíço R$5.77
      let valorConverter = valorNumerico * 5.78;
      simbolos.innerHTML = 'CHF'
      valorEmReais.innerHTML = `${valorConverter.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
      valorEmReais.style = 'font-size: 1.5em;';
      img.src = 'imagens/bandeira-suica.jpg'

    } else if (select[8].selected) {
      //1g de Ouro vale R$301 - O valor é calculado em gramas
      let valorConverter = valorNumerico * 308;
      simbolos.innerHTML = ''
      valorEmReais.innerHTML = `${valorNumerico}g vale ${valorConverter.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`;
      valorEmReais.style = 'font-size: 1em;';
      img.src = 'imagens/moeda-de-ouro.png'
    }
  }   
}