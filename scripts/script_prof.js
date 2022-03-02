const URLJSON = "../db/data_base.json";
//Agregamos un botón con jQuery
//$("body").prepend('<button id="btn1">GET</button>');
//Escuchamos el evento click del botón agregado
//$("#btn1").click(() => {
$.getJSON(URLJSON, function (response, status) {
    console.log(`ESTE ES EL STATUS: ${status}`);
    console.log(`ESTE ES EL RESPONSE: ${response}`);
    if (status === "success") {
        let misDatos = response.professionals;
        console.log(`ESTE ES EL misDatos: ${misDatos}`);
        for (const data of misDatos) {
            console.log(`ESTE ES EL DATO: ${data.name}`);
            $("#prof_list").prepend(`<article class="prof">
            <div class="prof_img">
              <img src="${data.path_img}" alt="" />
            </div>
            <div class="prof_text">
              <h2>${data.name}</h2>
              <h3>${data.specialization}</h3>
              <p>
              ${data.description}
              </p>
              <div class="div_btn_turn">
                <button class="btn_turn">Pedir turno</button>
              </div>
            </div>
          </article>`);
            }
    }else{
        console.log("No se pudo abrir")
    }
});
//});