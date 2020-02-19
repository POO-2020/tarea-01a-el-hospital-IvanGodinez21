import Fecha from "./fecha.js"

class Main {
    probarFecha() {
        let dia = prompt("Ingresa el dia")
        let mes = prompt("Ingresa el mes")
        let año = prompt("Ingresa el año")
        let fecha = new Fecha(dia, mes, año);
        console.log(`<---------Fecha--------->`)
        console.log(`La fecha indicada es: ${fecha.getFecha()}`)
        console.log(`El día fue: ${fecha.getDiaFecha()}`)
        console.log(`Han pasado ${fecha.getAños()} años`);
        console.log(`Han pasado ${fecha.getMeses()} meses`)
        console.log(`Han pasado ${fecha.getSemanas()} semanas`)
        console.log(`Han pasado ${fecha.getDias()} días`)

    }
}

let app = new Main
app.probarFecha();