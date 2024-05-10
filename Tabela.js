document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector("#Adicionar");

    button.addEventListener("click", function(event) {
        event.preventDefault();

        var form = document.querySelector("#product-form");
        var encomenda = obtemEncomenda(form);

        var erros = validaEncomenda(encomenda);

        if (erros.length > 0) {
            console.log(erros);
        } else {
            addEncomenda(encomenda);
            form.reset();
        }
    });

    function obtemEncomenda(dadosForm) {
        var encomenda = {
            nome: dadosForm.querySelector("#nome").value,
            quantity: parseInt(dadosForm.querySelector("#quanti").value),
            product: dadosForm.querySelector("#product").value,
            unitPrice: parseFloat(dadosForm.querySelector("#Valor_unit").value)
        };

        return encomenda;
    }

    function addEncomenda(novaEncomenda) {
        var tabela = document.querySelector("#tabela_pedidos tbody");
        var novaLinha = montaTR(novaEncomenda);
        tabela.appendChild(novaLinha);

         // Usando o evento listener para a nova linha  
         novaLinha.addEventListener("dblclick", function() {
            this.remove(); // Remove a linha clicada
        });


    }

    function montaTD(dado) {
        var td = document.createElement("td");
        td.textContent = dado;
        return td;
    }

    function montaTR(novaEncomenda) {
        var tr = document.createElement("tr");
        tr.appendChild(montaTD(novaEncomenda.nome));
        tr.appendChild(montaTD(novaEncomenda.product));
        tr.appendChild(montaTD(novaEncomenda.quantity));
        tr.appendChild(montaTD(novaEncomenda.unitPrice.toFixed(2)));
        tr.appendChild(montaTD((novaEncomenda.quantity * novaEncomenda.unitPrice).toFixed(2)));
        return tr;
    }

    function validaEncomenda(encomenda) {
        var erros = [];

        if (encomenda.nome === "") {
            erros.push("O nome não pode ser vazio!");
        }

        if (encomenda.quantity <= 0 || isNaN(encomenda.quantity)) {
            erros.push("A quantidade deve ser numérica e maior que 0.");
        }

        if (encomenda.unitPrice <= 0 || isNaN(encomenda.unitPrice)) {
            erros.push("O valor unitário deve ser numérico e maior que 0.");
        }

        return erros;
    }
   // adiciona o listner para todas a linhas da tabela 
   var linhasTabela = document.querySelectorAll(".item");
   linhasTabela.forEach(function(linha) {
       linha.addEventListener("dblclick", function() {
           this.remove(); // Remove a linha clicada
       });
   });
});
