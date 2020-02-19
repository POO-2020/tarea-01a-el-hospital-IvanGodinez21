import Fecha from "./fecha.js"

class Main {
    probarFecha() {
        let dia = prompt("Ingresa el dia")
        let mes = prompt("Ingresa el mes")
        let año = prompt("Ingresa el año")
        let fecha = new Fecha(dia, mes, año);
        console.log(`<---------Fecha--------->`)
        console.log(`Han pasado ${fecha.getAños()} años desde la fecha indicada`);
        console.log(`Han pasado ${fecha.getMeses()} meses`)
    }
    probar
}

let app = new Main
app.probarFecha();