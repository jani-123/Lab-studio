$(document).ready(function () {
  var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
  $("#btnContacto").click(function () {
    $(".error").remove();
    if ($("#nombre").val() == "") {
      $("#nombre").focus().after("<span class='error'>Ingrese su Nombre</span>");
      return false;
    } else if ($("#correo").val() == "" ) {
      $("#correo").focus().after("<span class='error'>Ingrese un Correo Valido</span>");
      return false;
    } else if ($("#telefono").val() == "") {
      $("#telefono").focus().after("<span class='error'>Ingrese su Telefono</span>");
      return false;
    } else if ($("#comentario").val() == "") {
      $("#comentario").focus().after("<span class='error'>Ingrese un Comentario</span>");
      return false;
    }
  });
  $("#nombre, #comentario ,#telefono").keyup(function () {
    if ($(this).val() != "") {
      $(".error").fadeOut();
      return false;
    }
  });
  $("#correo").keyup(function () {
    if ($(this).val() != "" && emailreg.test($(this).val())) {
      $(".error").fadeOut();
      return false;
    }
  });
});
