
// Función que se ejecuta directamente obteniendo del json los datos para cargar en la página
  // de profesionales, los perfiles de los mismos.
$.getJSON(URLJSON, function (response, status) {
    if (status === "success") {
        let misDatos = response.professionals;
        for (const data of misDatos) {
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
        console.log("Error al abrir el archivo JSON");
    }
});