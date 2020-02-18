import Fecha from "./fecha.js"

class Main {
    probarFecha() {
        let fecha = new Fecha(17, 2, 2020);
        console.log(fecha.getAños());
    }
}

let app = new Main
app.probarFecha();