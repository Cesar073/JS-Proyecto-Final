// Rellenamos el valor del los elementos select en la pagina: Turnos


$(document).ready(function(){
    let textProf;
    let textEsp;
    for (let count in (arrayProf)){
        textProf = `<option value="${count}">${arrayProf[count].professional}</option>`;
        textEsp = `<option value="${count}">${arrayProf[count].specialization}</option>`;
        $('#select_prof').append(`${textProf}`);
        $('#select_esp').append(textEsp);
        count += 1;
    }
})

class turns {
    constructor(professional, date, hour, patient) {
        this.professional = professional;
        this.date = date;
        this.hour = hour;
        this.patient = patient;
    }

    get_turn() {
        return `Consulta: turno para ${this.client} con el/la professional ${this.professional}, el día ${this.date} a las ${this.hour}.`;
    }
}

function search_prof(prof) {
    for (pos in arrayProf){
        let _professional = arrayProf[pos].professional.indexOf(prof);
        console.log(`position = ${position}`);
        if (position >= 0) {
            console.log("Posición 0");
            fill_data(0);
            return true;
        } else {
            position = prof1.professional.indexOf(prof);
            if (position >= 0) {
                console.log("Posición 1");
                fill_data(1);
                return true;
            } else {
                position = prof2.professional.indexOf(prof);
                if (position >= 0) {
                    console.log("Posición 2");
                    fill_data(2);
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
}