// RELATIVO A LA PAGINA DE TURNOS

// Rellenamos el valor del los elementos select en la pagina: Turnos
let textProf;
let textEsp;

$(document).ready(function(){
  console.log(arrayProf.length);
  console.log(arrayProf[0]);
  console.log(arrayProf);




  for (let count in (arrayProf)){
    console.log(`count: ${count}`);
    textProf += `<option value="${count}">${arrayProf[count].professional}</option>`;
    textEsp += `<option value="${count}">${arrayProf[count].specialization}</option>`;
    $('#select_prof').append(`<select name="" id="select_esp">
                            ${textProf}
                            </select>`);
    $('#select_esp').append(textEsp);
    count += 1;
  }
})

console.log("Fin bucle");
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

button_hours_monday = [];
button_hours_tuesday = [];
button_hours_wednesday = [];
button_hours_thursday = [];
button_hours_friday = [];

let row_hor_m = document.getElementById("row__hor_m");
let row_hor_tu = document.getElementById("row__hor_tu");
let row_hor_w = document.getElementById("row__hor_w");
let row_hor_th = document.getElementById("row__hor_th");
let row_hor_f = document.getElementById("row__hor_f");

arrayTurns = [];
arrayTurnsProf = [];

function search_prof(prof) {
  let position = prof0.professional.indexOf(prof);
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

function fill_data(prof) {
  let _search_prof;
  switch (prof) {
    case 0:
      _search_prof = prof0;
      break;
    case 1:
      _search_prof = prof1;
      break;
    case 2:
      _search_prof = prof2;
      break;
  }
  let grid = document.getElementById("row__hor");
  //Limpiamos los horarios anteriores si es que hay
  clear_hours(grid);

  let insert_div_day;
  let texto = "";
  let partial_name = 0;
  let name;
  let p;
  let name_id;

  for (let count = 0; count < 5; count++) {
    // ELIMINAR
    console.log(`Profesional buscado = ${_search_prof.professional}`);
    console.log(`Chusmeando si el prof tiene turnos: ${prof1.monday}`);

    insert_div_day = document.createElement("div");
    name_id = `id_div_day_${count}`;
    insert_div_day.id = name_id;
    partial_name = 0;
    texto = "";

    // ELIMINAR
    console.log(`Nombre del id div day: ${name_id}`);

    for (let i of arrayHours) {
      switch (count) {
        case 0:
          if (_search_prof.monday.includes(i) == true) {
            name = `m_${partial_name}`;
            texto += `<p id="${name}" class="schedule_available">${i}</p>`;
          } else {
            texto += `<p class="schedule_not_available">${i}</p>`;
          }
          // ELIMINAR
          console.log(`este es el array: ${_search_prof.monday}`);
          break;
        case 1:
          if (_search_prof.tuesday.includes(i) == true) {
            name = `tu_${partial_name}`;
            texto += `<p id="${name}" class="schedule_available">${i}</p>`;
          } else {
            texto += `<p class="schedule_not_available">${i}</p>`;
          }
          break;
        case 2:
          if (_search_prof.wednesday.includes(i) == true) {
            name = `w_${partial_name}`;
            texto += `<p id="${name}" class="schedule_available">${i}</p>`;
          } else {
            texto += `<p class="schedule_not_available">${i}</p>`;
          }
          break;
        case 3:
          if (_search_prof.thursday.includes(i) == true) {
            name = `th_${partial_name}`;
            texto += `<p id="${name}" class="schedule_available">${i}</p>`;
          } else {
            texto += `<p class="schedule_not_available">${i}</p>`;
          }
          break;
        case 4:
          if (_search_prof.friday.includes(i) == true) {
            name = `f_${partial_name}`;
            texto += `<p id="${name}" class="schedule_available">${i}</p>`;
          } else {
            texto += `<p class="schedule_not_available">${i}</p>`;
          }
          break;
      }
      partial_name += 1;
      insert_div_day.innerHTML = texto;
      grid.appendChild(insert_div_day);
    }
  }
  const schedules = document.getElementsByClassName("schedule_available");
  for (let btn_text of schedules) {
    // ELIMINAR
    // console.log(`valor del array: ${schedules};
    //             valor de btn_text: ${btn_text}`);
    btn_text.addEventListener("click", function () {
      reserve_turn(_search_prof, btn_text.id, btn_text.innerHTML);
    });
  }
}

function clear_hours(grid) {
  if (!!document.getElementById("id_div_day_0") == true) {
    let eliminar = document.getElementById("id_div_day_0");
    grid.removeChild(eliminar);
    eliminar = document.getElementById("id_div_day_1");
    grid.removeChild(eliminar);
    eliminar = document.getElementById("id_div_day_2");
    grid.removeChild(eliminar);
    eliminar = document.getElementById("id_div_day_3");
    grid.removeChild(eliminar);
    eliminar = document.getElementById("id_div_day_4");
    grid.removeChild(eliminar);
  }
}

function evento_change_input_0() {
  let value = $("#input_professional").val();
  console.log(`Paso 1: value = ${value}`);
  if (value != "") {
    let retorno = search_prof(value);
    console.log(`Paso 2: ${retorno}`);

    if (retorno == false) {
      alert("No se encontró el valor buscado");
    }
  }
}

function evento_change_input_1() {
  let value = document.getElementById("input_day").value;
  console.log(`Paso 1: value = ${value}`);
  if (value != "") {
    alert("En construcción");
  }
}

function evento_change_input_2() {
  let value = document.getElementById("input_specialization").value;
  console.log(`Paso 1: value = ${value}`);
  if (value != "") {
    alert("En construcción");
  }
}

function reserve_turn(prof, day, hours) {
  let array_days;
  switch (day.slice(0, 2)) {
    case "m_":
      day = "lunes";
      array_days = prof.monday;
      break;
    case "tu":
      day = "martes";
      array_days = prof.tuesday;
      break;
    case "w_":
      day = "miércoles";
      array_days = prof.wednesday;
      break;
    case "th":
      day = "jueves";
      array_days = prof.thursday;
      break;
    case "f_":
      day = "viernes";
      array_days = prof.friday;
      break;
  }
  _result = confirm(
    `Confirmar turno para el día ${day} a las ${hours} con el doctor ${prof.professional}`
  );
  array_days.push(hours);
  // ELIMINAR
  console.log(`Este es el array_days: ${array_days}`);
}
