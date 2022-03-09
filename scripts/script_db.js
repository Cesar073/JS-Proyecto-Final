// Nuestro Json representará lo que tendríamos en una base de datos.
// Así mismo, los datos nuevos que puedan generarse como reservar un turno o crear una cuenta nueva
  // se cargarán en el localStorage. Entre ambos representarían una base de datos de backend.

const URLJSON = "../db/data_base.json";
let arrayUsers = [];
let arrayUsersOfStorage = [];
const arrayProf = [];

class professional {
    constructor(professional, specialization) {
        this.professional = professional;
        this.specialization = specialization;
        this.monday = [];
        this.tuesday = [];
        this.wednesday = [];
        this.thursday = [];
        this.friday = [];
    }
    set_turns(day, hour, patient) {
        switch (day) {
            case 0:
                this.monday.push(`${hour} - ${patient}`);
                break;
            case 1:
                this.tuesday.push(`${hour} - ${patient}`);
                break;
            case 2:
                this.wednesday.push(`${hour} - ${patient}`);
                break;
            case 3:
                this.thursday.push(`${hour} - ${patient}`);
                break;
            case 4:
                this.friday.push(`${hour} - ${patient}`);
                break;
        };
    }
    get_hours(day) {
        switch (day) {
            case 0:
                return this.monday;
            case 1:
                return this.tuesday;
            case 2:
                return this.wednesday;
            case 3:
                return this.thursday;
            case 4:
                return this.friday;
            }
        }
    }

if (localStorage.length == 0){
    // Creo un array vacío para los Users y dejo el Login para indicar que no hay sesión activa.
    localStorage.setItem("arrayUserStorage",JSON.stringify(arrayUsersOfStorage));
    localStorage.setItem("session", JSON.stringify("Login"));
}else{
    arrayUsersOfStorage = JSON.parse(localStorage.getItem("arrayUserStorage"));
}

// Obtenemos los datos del JSON y localStorage
$.getJSON(URLJSON, function (response, status) {
    if (status === "success") {

        // arrayUsers JSON
        let _users = response.users;
        for (const data of _users) {
            arrayUsers.push(new Users(data.name, data.pass));
        };

        // arrayProf JSON
        let _prof = response.professionals;
        for (const data of _prof){
            arrayProf.push (new professional(data.name.toUpperCase(), data.specialization));
        }
    }else{
        console.log("Error al abrir json");
    }
    for (pos in arrayUsersOfStorage){
        arrayUsers.push(new Users(arrayUsersOfStorage[pos].user, arrayUsersOfStorage[pos].password));
    }
});
