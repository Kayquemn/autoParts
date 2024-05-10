var titulo=document.querySelector('.Titulo');
titulo.textcontent="Lista de encomendas";

var linhastabela = document.querySelectorAll(".item");

    for (var i = 0 ; i < linhastabela.length; i++){
  
        var qtde = linhastabela[i].querySelector(".quantidade").textContent;
        var unitario = linhastabela[i].querySelector(".preco-unitario").textContent;


    if(!validaQtde(qtde)){
        linhastabela[i].querySelector(".quantidade").textContent="Quantidade invalida!";
        linhastabela[i].classList.add("info-invalida");
    }else{
        if(!validaUnitario(unitario)){
            linhastabela[i].querySelector(".preco-unitario").textContent="Valor unitario é invalido!";
        }
        else{
            var unitFormat = formataValor(parseFloat(unitario));
            linhastabela[i].querySelector(".preco-unitario").textContent = unitFormat;
            linhastabela[i].querySelector(".preco-total").textContent = calculaTotal(qtde, unitario);
        }
    }



}
function calculaTotal(qtde,unitario){
    var total = 0;
    total=qtde*unitario;

    return formataValor(total);
}


/*Funçoes para formatar os valores, essa abordagem 
permite reaproveitamento do codigo*/
function validaQtde(qtde){
    if(!isNaN(qtde) && qtde >0) {
        return true;
    }else{
        return false;
    }
}
function validaUnitario(unitario){

    if(!isNaN(unitario) && unitario >0) {
        return true;
    }else{
        return false;
    }
}
function formataValor(valor){
    var valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return valor;
}
