document.addEventListener("DOMContentLoaded", () => {
  setForm();
});

function setForm() {
  $(document).ready(function () {
    $(".contact-form").bind("submit", function (e) {
      e.preventDefault();

      $.ajax({
        type: $(this).attr("method"),
        url: $(this).attr("action"),
        data: $(this).serialize(),
        success: function () {
          enviarEmail();
        },
        error: function () {
          //    showErrorToast('No se pudo enviar el mensaje. Compruebe los campos y su conexión a internet e intente de nuevo.');
        },
      });
    });
  });

  // init form fileds
  const nombre = document.querySelector("#nombre");
  const email = document.querySelector("#email");
  const asunto = document.querySelector("#asunto");
  const mensaje = document.querySelector("#mensaje");
  const btnEnviar = document.querySelector("#submit");

  // init views
  const formularioEnviar = document.querySelector(".contact-form");
  const sendedContainer = document.querySelector(".sended-container");
  const sendedMessage = document.querySelector(".sended-message");
  const loading = document.querySelector(".send-overlay");

  eventListeners();

  function eventListeners() {
    setDisabled(true);
    onEnableState();

    // Campos del formulario
    nombre.addEventListener("blur", validarCampo);
    email.addEventListener("blur", validarCampo);
    asunto.addEventListener("blur", validarCampo);
    mensaje.addEventListener("blur", validarCampo);

    // Boton de enviar en el submit
    formularioEnviar.addEventListener("submit", enviarEmail);
  }

  function setDisabled(isDisabled) {
    if (isDisabled == true) {
      btnEnviar.disabled = true;
      btnEnviar.classList.add("disabled");
      btnEnviar.classList.add("disabledState");
      disableHover(btnEnviar, "hoverState", "disabledState");
    } else {
      btnEnviar.disabled = false;
      btnEnviar.classList.remove("disabled");
      btnEnviar.classList.remove("disabledState");
    }
  }

  function disableHover(elem, removeThis, addThis) {
    elem.classList.remove(removeThis);
    elem.classList.add(addThis);
  }

  // Valida que el campo tengo algo escrito

  function validarCampo() {
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);

    switch (this.type) {
      case "nombre":
        validarCampo();
        break;
      case "email":
        validarEmail(this);
        break;
      case "asunto":
        validarCampo();
        break;
      case "mensaje":
        validarCampo();
        break;
      default:
        break;
    }

    if (nombre.value !== "" && email.value !== "" && asunto.value !== "") {
      setDisabled(false);
    }
  }

  function enviarEmail() {
    loading.classList.add("showLoading");
    setTimeout(function () {
      loading.classList.remove("showLoading");
      formularioEnviar.classList.add("ocult");
      formularioEnviar.reset();
      setTimeout(function () {
        sendedContainer.classList.remove("ocult");
      }, 1000);
      setTimeout(function () {
        sendedContainer.classList.add("ocult");
        formularioEnviar.classList.remove("ocult");
      }, 5000);
    }, 3000);
  }
  // // Verifica la longitud del texto en los campos
  function validarLongitud(campo) {
    if (campo.value.length > 0) {
      showError(false, ".errorMensaje");
    } else {
      showError(true, ".errorMensaje");
    }
  }

  function validarEmail(campo) {
    const mensaje = campo.value;
    if (mensaje.indexOf("@") !== -1) {
      showError(false, ".errorEmail");
    } else {
      showError(true, ".errorEmail");
    }
  }

  function showErrorToast(errorMessage) {
    var toastErrorHTML =
      '</span><button class="btn-flat toast-action no-back" onclick="closeToast()"><i class="material-icons white-text close-toast">clear</i></button>';
    M.toast({
      html: "<span>" + errorMessage + toastErrorHTML,
      classes: "red noBorder",
      displayLength: 8000,
    });
  }

  function showError(isShowing, type) {
    var typeError = document.querySelector(type);
    if (isShowing) {
      $(typeError).addClass("errorShow");
    } else {
      $(typeError).removeClass("errorShow");
    }
  }

  function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!");
  }

  function formError() {
    $("#contactForm")
      .removeClass()
      .addClass("shake animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          $(this).removeClass();
        }
      );
  }

  function submitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h3 text-center tada animated text-success";
    } else {
      var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
  }

  function onEnableState() {
    btnEnviar.addEventListener("click", () => {
      //if(btnEnviar.disabled == false) {
      setTimeout(function () {
        const dontClick = `<p>Debes llenar los campos anteriores</p>`;
        const dontClickMessage = document.querySelector(".help-submit");
        dontClickMessage.innerHTML = dontClick;
      }, 4000);
      //}
    });
  }
}

//   function sendedMessage() {
//     // se oculta formulario
//     // poner clase para ocultarlo
//     formularioEnviar.classList.add("hide");
//     setTimeout(function () {
//       // aparece mensaje
//       sendedContainer.classList.remove("ocult");
//       // setTimeout(function () {
//       //   $(".en-breve").addClass("backOnHex-x");
//       // }, 200);
//       setTimeout(function () {
//         sendedContainer.classList.add("ocult");
//       }, 4000);
//       formularioEnviar.classList.add("hide");
//     }, 1000);
//   }

//   // // Verifica la longitud del texto en los campos
//   function validarLongitud(campo) {
//     if (campo.value.length > 0) {
//       showError(false, ".errorMensaje");
//     } else {
//       showError(true, ".errorMensaje");
//     }
//   }

//   function validarEmail(campo) {
//     const mensaje = campo.value;
//     if (mensaje.indexOf("@") !== -1) {
//       showError(false, ".errorEmail");
//     } else {
//       showError(true, ".errorEmail");
//     }
//   }

//   function showError(isShowing, type) {
//     var typeError = document.querySelector(type);
//     if (isShowing) {
//       $(typeError).addClass("errorShow");
//     } else {
//       $(typeError).removeClass("errorShow");
//     }
//   }
// }
