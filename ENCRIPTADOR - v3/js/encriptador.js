// Selección de elementos //
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

// Botón de ENCRIPTAR //
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    console.log(txt);
    
    if (texto == ""){
        //aviso.style.background = "#0a3871";
        //aviso.style.color = "#ffff";
        //aviso.style.fontWeight = "800";
        // aviso.textContent = "El campo de texto no debe estar vacio";

        // setTimeout(()=>{
        //    aviso.removeAttribute("style");
        //},1500);
        Swal.fire({
            position: "center",
            icon: "error",
            title: "El campo de texto no debe estar vacio",
            color: "#f95904",
            showConfirmButton: true,
            timer: 0
        });
    }
    else if(texto !== txt){
        //aviso.style.background = "#0a3871";
        //aviso.style.color = "#ffff";
        //aviso.style.fontWeight = "800";
        //aviso.textContent = "No debe tener acentos ni caracteres especiales";

        //setTimeout(()=>{
        //    aviso.removeAttribute("style");
        //},1500);
        Swal.fire({
            position: "center",
            icon: "error", 
            title: "No debe tener acentos ni caracteres especiales",
            color: "#f95904",
            showConfirmButton: true,
            timer: 0
        });
    }

    else if(texto !==texto.toLowerCase()){
        //aviso.style.background = "#0a3871";
        //aviso.style.color = "#ffff";
        //aviso.style.fontWeight = "800";
        //aviso.textContent = "El texto debe ser todo en minúscula";

        //setTimeout(()=>{
        //    aviso.removeAttribute("style");
        //},1500);
        Swal.fire({
            position: "center",
            icon: "error",
            title: "El texto debe ser todo en minúscula",
            color: "#f95904",
            showConfirmButton: true,
            timer: 0
        });
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
})

// Botón de DESENCRIPTAR //
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    console.log(txt);
    
    if (texto == ""){
        //aviso.style.background = "#0a3871";
        //aviso.style.color = "#ffff";
        //aviso.style.fontWeight = "800";
        //aviso.textContent = "El campo de texto no debe estar vacio";

        //setTimeout(()=>{
        //    aviso.removeAttribute("style");
        //},1500);
        Swal.fire({
            position: "center",
            icon: "error",
            title: "El campo de texto no debe estar vacio",
            color: "#f95904",
            showConfirmButton: true,
            timer: 0
        });
    }
    else if(texto !== txt){
        //aviso.style.background = "#0a3871";
        //aviso.style.color = "#ffff";
        //aviso.style.fontWeight = "800";
        //aviso.textContent = "No debe tener acentos ni caracteres especiales";

        //setTimeout(()=>{
        //    aviso.removeAttribute("style");
        //},1500);
        Swal.fire({
            position: "center",
            icon: "error", 
            title: "No debe tener acentos ni caracteres especiales",
            color: "#f95904",
            showConfirmButton: true,
            timer: 0
        });
    }

    else if(texto !==texto.toLowerCase()){
        //aviso.style.background = "#0a3871";
        //aviso.style.color = "#ffff";
        //aviso.style.fontWeight = "800";
        //aviso.textContent = "El texto debe ser todo en minúscula";

        //setTimeout(()=>{
        //    aviso.removeAttribute("style");
        //},1500);
        Swal.fire({
            position: "center",
            icon: "error",
            title: "El texto debe ser todo en minúscula",
            color: "#f95904",
            showConfirmButton: true,
            timer: 0
        });
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

// Botón COPIAR //
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");

    btnCopiar.style.visibility = "inherit";
     
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Texto COPIADO",
        color: "#040ff9",
        showConfirmButton: false,
        timer: 1500
    });
});