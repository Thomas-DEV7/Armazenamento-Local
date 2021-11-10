// This is a JavaScript file

var valor = 0;
$(document).on("click", "#salvar", function(){
  var dados = {nome : $("#nome").val(), end: $("#endereco").val()}
  localStorage.setItem(valor, JSON.stringify(dados));
  valor++;
});

$(document).on("click", "#buscar", function(){
  var pessoa = JSON.parse(localStorage.getItem($("#id").val()));
  $("#nomeBusca").val(pessoa.nome);
  $("#enderecoBusca").val(pessoa.end);
});

$(document).on("click", "#limpar", function(){
  localStorage.clear();
  limparCampos();
});
$(document).on("click", "#remover", function(){
  localStorage.removeItem($("#id").val());
  limparCampos();
});

function limparCampos(){
  $("#nome").val("");
  $("#endereco").val("");
  $("#nomeBusca").val("");
  $("#enderecoBusca").val("");
  $("#id").val("");
}