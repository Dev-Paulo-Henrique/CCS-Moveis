//Funções
function ind() {
  window.location.replace("./index.html")
}

//Reload
function reload(){
  window.location.reload("index2.html")
}

//cadastro
function confirme(){

  var nome = document.getElementById("cnome");
  var nomeborder = document.getElementById("nomeborder");
  var sobrenome = document.getElementById("csobrenome");
  var sobrenomeborder = document.getElementById("sobrenomeborder");
  var local = document.getElementById("clocal");
  var localborder = document.getElementById("localborder");
  var tel = document.getElementById("ctel");
  var telborder = document.getElementById("telborder");
  var email = document.getElementById("cemail");
  var emailborder = document.getElementById("emailborder");
  var senha = document.getElementById("csenha");
  var confirme = document.getElementById("cconfirme");
  var senhaborder = document.getElementById("senhaborder");
  var confirmeborder = document.getElementById("confirmeborder");
  

  if(nome.value != "" && sobrenome.value != "" && local.value != "" && tel.value != "" && senha.value.length >6 && senha.value == confirme.value && 
    email.value != "" && email.value.indexOf('@') != -1 && email.value.indexOf('.') != -1){

  

  window.localStorage.setItem("Nome:",nome.value);
  window.localStorage.setItem("Sobrenome:",sobrenome.value);
  window.localStorage.setItem("Local:",local.value);
  window.localStorage.setItem("Telefone:",tel.value);
  window.localStorage.setItem("Email:",email.value);
  window.localStorage.setItem("Senha:",senha.value);
  window.localStorage.setItem("Confirmação:",confirme.value);

  console.warn("Os dados estão armazenados no localStorage");

  nomeborder.style.border = "1px solid #79e566";
  sobrenomeborder.style.border = "1px solid #79e566";
  localborder.style.border = "1px solid #79e566";
  telborder.style.border = "1px solid #79e566";
  emailborder.style.border = "1px solid #79e566";
  senhaborder.style.border = "1px solid #79e566";
  confirmeborder.style.border = "1px solid #79e566";

  alert("Usuário salvo apenas no dispositivo");
  
  Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Tudo certo!',
  showConfirmButton: false,
  timer: 1500
})
setTimeout(function(){
  window.location.replace("index.html");
},3000)

  }else{
  nomeborder.style.border = "1px solid red";
  sobrenomeborder.style.border = "1px solid red";
  localborder.style.border = "1px solid red";
  telborder.style.border = "1px solid red";
  emailborder.style.border = "1px solid red";
  senhaborder.style.border = "1px solid red";
  confirmeborder.style.border = "1px solid red";
  navigator.vibrate(100);
  Swal.fire('Oops...','Algo está errado!','error');
}
}

//Cadastrar
function cadastrar(){
  window.location.assign("cadastro.html")
}

//Menu
function acao(){
  Swal.fire({
    title: 'Opções',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: `Chat`,
    denyButtonText: `Sair`,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.assign("https://api.whatsapp.com/send?phone=5581991871060&text=Ol%C3%A1%2C%20vim%20pelo%20app%20do%20CCS%20")
    } else if (result.isDenied) {
      window.location.replace("./index.html")
    }
  })
}

//Mostrar Senha
function mostrarSenha(){
        var tipo = document.getElementById('senha');
        var eye = document.getElementById('see');
        if(tipo.type == "password"){
          tipo.type  = "text";
        }else{
          tipo.type = "password";
        }
      }


//Agendamento
function agend(){
	var dia = document.getElementById('dia');
	var hora = document.getElementById('hora');
	var nom = localStorage.getItem("Nome:");
  var local = localStorage.getItem("Local:");
  var sobrenome = localStorage.getItem("Sobrenome:")

Swal.fire({
      title: 'Você será redirecionado',
      text: "Aguarde um pouco...",
      icon: 'warning',
      timer: 3000
});
window.location.assign(`https://api.whatsapp.com/send?phone=5581991871060&text=Seria possível uma visita em um ${dia.value} às ${hora.value} na residência de ${nom} ${sobrenome} em ${local}?`)
}

//Perfil
function perfil(){
  window.location.assign("perfil.html")
}


//Login com cadastro
function logar(){
  var email = document.getElementById("email");
  var senha = document.getElementById("senha");
  var div = document.getElementById("div10");
  var div2 = document.getElementById("div11");

  if(email.value == localStorage.getItem("Email:",email.value) && senha.value == localStorage.getItem("Senha:",senha.value)){
    setTimeout(function(){
      window.location.replace("index2.html");
    },2000);
    document.cookie = `Senha:${senha.value}`;
    div.style.border = "1px solid #79e566";
    div2.style.border = "1px solid #79e566";
    Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Bem-vindo!',
  showConfirmButton: false,
  timer: 1500
})
  }else{
    console.warn("O email ou senha está incorreto");
    navigator.vibrate(100);
    div.style.border = "1px solid red";
    div2.style.border = "1px solid red";
    Swal.fire({
      title: 'Oops...',
      text: 'Algo está errado!',
      icon: 'error',
      timer: 2000
    });
  }
}

//Apagar dados
function remove(){
  var nome = document.getElementById("cnome");
  var sobrenome = document.getElementById("csobrenome");
  var local = document.getElementById("clocal");
  var tel = document.getElementById("ctel");
  var email = document.getElementById("cemail");
  var senha = document.getElementById("csenha");
  var confirme = document.getElementById("cconfirme");

  window.location.replace("index.html");
  window.localStorage.removeItem("Nome:");
  window.localStorage.removeItem("Sobrenome:");
  window.localStorage.removeItem("Local:");
  window.localStorage.removeItem("Telefone:");
  window.localStorage.removeItem("Email:");
  window.localStorage.removeItem("Senha:");
  window.localStorage.removeItem("Confirmação:");
  Swal.fire({
      title: 'Sua conta está sendo excluída',
      text: "Aguarde um pouco...",
      icon: 'warning',
      timer: 3000
});
}

