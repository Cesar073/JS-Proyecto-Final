// Rellenamos el valor del los elementos select en la pagina: Turnos

window.document.title = 'Turnos';
$(document).ready(function(){
    let textProf;
    let textEsp;
    textProf = `<option disabled selected>Seleccione un profesional</option>`;
    textEsp = `<option disabled selected>Selecciona una especialización</option>`;
    $('#select_prof').append(textProf);
    $('#select_esp').append(textEsp);
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



let fill_data = () => {
    prof = $('#select_prof').val();
    if (prof == null){return};

    for (let i = 0; i<5 ; i++){
        $(`#row__hor_${i}`).empty();
    }
    let texto = "";
    let name;
    let arrayHours = [
        "08:30hs","09:00hs","09:30hs","10:00hs","10:30hs","11:00hs","11:30hs","12:00hs","16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"
    ]
    arrayButtons = [];
    arrayNames = [];

    for (let count = 0; count < 5; count++){
        for (let i of arrayHours){
            name = `day_${count}_hour_${i}`;
            switch(count){
                case 0:
                    if (arrayProf[prof].monday.includes(i) == true){
                        texto = `<p id="${name}" class="schedule_not_available">${i}</p>`;
                        $(`#row__hor_${count}`).append(texto);
                    }else{
                        texto = `<p id="${name}" class="schedule_available">${i}</p>`;
                        $(`#row__hor_${count}`).append(texto);
                        arrayButtons.push(document.getElementById(`${name}`));
                        arrayNames.push(name);
                    }
                    break;
                case 1:
                    if (arrayProf[prof].tuesday.includes(i) == true){
                        texto = `<p id="${name}" class="schedule_not_available">${i}</p>`;
                        $(`#row__hor_${count}`).append(texto);
                    }else{
                        texto = `<p id="${name}" class="schedule_available">${i}</p>`;
                        $(`#row__hor_${count}`).append(texto);
                        arrayButtons.push(document.getElementById(`${name}`));
                        arrayNames.push(name);
                    }
                    break;
                case 2:
                    if (arrayProf[prof].wednesday.includes(i) == true){
                        texto = `<p id="${name}" class="schedule_not_available">${i}</p>`;
                        $(`#row__hor_${count}`).append(texto);
                    }else{
                        texto = `<p id="${name}" class="schedule_available">${i}</p>`;
                        $(`#row__hor_${count}`).append(texto);
                        arrayButtons.push(document.getElementById(`${name}`));
                        arrayNames.push(name);
                    }
                    break;
                case 3:
                    if (arrayProf[prof].thursday.includes(i) == true){
                        texto = `<p id="${name}" class="schedule_not_available">${i}</p>`;
                        $(`#row__hor_${count}`).append(texto);
                    }else{
                        texto = `<p id="${name}" class="schedule_available">${i}</p>`;
                        $(`#row__hor_${count}`).append(texto);
                        arrayButtons.push(document.getElementById(`${name}`));
                        arrayNames.push(name);
                    }
                    break;
                case 4:
                    if (arrayProf[prof].friday.includes(i) == true){
                        texto = `<p id="${name}" class="schedule_not_available">${i}</p>`;
                        $(`#row__hor_${count}`).append(texto);
                    }else{
                        texto = `<p id="${name}" class="schedule_available">${i}</p>`;
                        $(`#row__hor_${count}`).append(texto);
                        arrayButtons.push(document.getElementById(`${name}`));
                        arrayNames.push(name);
                    }
                    break;
            }
        }
    }
    for (let pos in arrayButtons) {
        arrayButtons[pos].addEventListener("click", function () {
            seleccion(arrayNames[pos]);
        });
    }
    $("#id_references").css("visibility","visible");
};

function seleccion(name){
    let _hour = name.slice(11);
    let pos_prof = $("#select_prof").val();
    let _doctor = arrayProf[pos_prof].professional;
    let _day =name.slice(4,5);
    switch(_day){
        case "0":
            _day = "lunes";
            break;
        case "1":
            _day = "martes";
            break;
        case "2":
            _day = "miércoles";
            break;
        case "3":
            _day = "jueves";
            break;
        case "4":
            _day = "viernes";
            break;
    }
    
    rta = confirm(`Desea reservar turno con el/la doctor/a ${_doctor} el día ${_day} a la hora ${_hour}?`);
    if (rta == true){
        switch(_day){
            case "lunes":
                arrayProf[pos_prof].monday.push(_hour);
                alert("Turno reservado");
                fill_data();
                break;
            case "martes":
                arrayProf[pos_prof].tuesday.push(_hour);
                alert("Turno reservado");
                fill_data();
                break;
            case "miércoles":
                arrayProf[pos_prof].wednesday.push(_hour);
                alert("Turno reservado");
                fill_data();
                break;
            case "jueves":
                arrayProf[pos_prof].thursday.push(_hour);
                alert("Turno reservado");
                fill_data();
                break;
            case "viernes":
                arrayProf[pos_prof].friday.push(_hour);
                alert("Turno reservado");
                fill_data();
                break;
        }
        
    }else{
        alert("CANCELADO");
    }
}

$('#select_prof').change(fill_data);