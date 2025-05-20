const obtenerFecha = ()=>{
const fecha = new Date

const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
const mes = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

const parrafoDia = document.getElementById("dia")
const parrafoHora = document.getElementById("hora")

/*parrafoDia.textContent =  `${dias[fecha.getDay()]} ${fecha.getDate()} de ${mes[fecha.getMonth()]} del ${fecha.getFullYear()}`
if(fecha.getHours()<13){
   parrafoHora.textContent = `${fecha.getHours()}:${fecha.getMinutes()} AM`
}else{
    parrafoHora.textContent = `${fecha.getHours()-12}:${fecha.getMinutes()}:${fecha.getSeconds()} PM`
}*/
parrafoDia.textContent =  `${dias[fecha.getDay()]} ${fecha.getDate()} de ${mes[fecha.getMonth()]} del ${fecha.getFullYear()}`
if(fecha.getHours()<13){
   if(fecha.getHours()<10){
    parrafoHora.textContent =`0${fecha.getHours()}:`
   }else{
    parrafoHora.textContent =`${fecha.getHours()}:`
   }
   if(fecha.getMinutes()<10){
    parrafoHora.textContent +=`0${fecha.getMinutes()}:`
   }else{
    parrafoHora.textContent +=`${fecha.getMinutes()}:`
   }
   if(fecha.getSeconds()<10){
    parrafoHora.textContent +=`0${fecha.getSeconds()} AM`
   }else{
    parrafoHora.textContent +=`${fecha.getSeconds()} AM`
   }
}else{
    if(fecha.getHours()-12<10){
        parrafoHora.textContent =`0${fecha.getHours()-12}:`
       }else{
        parrafoHora.textContent =`${fecha.getHours()-12}:`
       }
       if(fecha.getMinutes()<10){
        parrafoHora.textContent +=`0${fecha.getMinutes()}:`
       }else{
        parrafoHora.textContent +=`${fecha.getMinutes()}:`
       }
       if(fecha.getSeconds()<10){
        parrafoHora.textContent +=`0${fecha.getSeconds()} PM`
       }else{
        parrafoHora.textContent +=`${fecha.getSeconds()} PM`
       }
}
}
setInterval(obtenerFecha,1000)