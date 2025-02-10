fetch("https://restcountries.com/v3.1/all")
    .then(response => {
        return response.json();
    })
    .then(data => {
        // Retrasamos la ocultación del indicador de carga
        setTimeout(() => {
            $("#cargando").hide(); // Ocultamos el indicador de carga
        }, 2000); // Aquí 2000 ms = 2 segundos de retraso

        let banderas = document.getElementById("banderas");
        for (let i = 0; i < data.length; i++) {
            let img = document.createElement("img");
            img.src = data[i].flags.png;
            img.className ="bandera";
            img.alt = data[i].name.common;
            banderas.appendChild(img);
        }
        $(".bandera").click(function() {
            alert("Has hecho clic en la bandera de " + $(this).attr("alt"));
        });
    })
    .catch(error => console.error(error));
