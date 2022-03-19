let modal_login = document.querySelectorAll(".modal_login")[0];
class Users{
    constructor(user, password){
        this.user = user;
        this.password = password;
    }
}

// BTN de la nav que abre el login
$('#btn_login').click((e)=> {
    e.preventDefault();
    modal_login.style.opacity = "1";
    modal_login.style.visibility = "visible";
});

// Limpia los input y cierra el login
let close_login = () => {
    $('#input_user').val("");
    $('#input_pass').val("");
    modal_login.style.opacity = "0";
    modal_login.style.visibility = "hidden";
}

// Muestra en la parte inferior del login un msj, el que recibe por parámetro
let messages = (text) => {
    $("#modal_warning").empty();
    $("#modal_warning").append(`<p id="login_msj_error" style="padding: 5px;">
                                ${text}</p>`);
        $("#login_msj_error").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).delay(1000).fadeOut(500);
}

// Observa si hay datos en ambos inputs y devuevle TRUE,
// de lo contrario da un aviso que está faltando algún dato
let check_data_inputs = () => {
    if (($('#input_user').val() != "") && ($('#input_pass').val()!="")){
        return true;
    }else{
        messages("Debe rellenar ambos campos");
        return false;
    }
}

// Clic en Ingresar, controla los datos del usuario y simula un inicio de sesión
let query_identity = () => {
    if (check_data_inputs() == true){
        let find = false;
        for (let count in (arrayUsers)){
            let text = $('#input_user').val();
            if (text == arrayUsers[count].user){
                find = true;
                if ($('#input_pass').val() == arrayUsers[count].password){
                    localStorage.setItem("session", JSON.stringify(text));
                    $('#btn_login').text(text);
                    close_login();
                }else{
                    messages("Error en el Usuario o Contraseña");
                }
            }
        }
        if (find == false){
            messages("Error en el Usuario o Contraseña");
        }
    }
}

// Clic en Crear cuenta, si no existe el usuario lo crea y lo carga en el localStorage
let create_user = () => {
    if (check_data_inputs() == true){
        let find = false;
        let text = $('#input_user').val();
        for (count in (arrayUsers)){
            if ($('#input_user').val() == arrayUsers[count].user){
                messages("El nombre de Usuario no está disponible");
                find = true;
                break;
            }
        }
        if (find == false){
            let NewUser = new Users(text, $('#input_pass').val());
            arrayUsers.push(NewUser);
            arrayUsersOfStorage.push(NewUser);
            localStorage.setItem("arrayUserStorage", JSON.stringify(arrayUsersOfStorage));
            $('#btn_login').text(text);
            localStorage.setItem("session", JSON.stringify(text))
            close_login();
        }
    }
}

// Indicamos cuál sesión se ha iniciado
console.log("json");
$('#btn_login').text(JSON.parse(localStorage.getItem("session")));
$('#btn_access').click(query_identity);
$('#input_pass').change(query_identity);
$('#btn_create_user').click(create_user);
$('#btn_modal_X').click(close_login);