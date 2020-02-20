import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Paciente from "./Paciente.js";

class Main {
    probarFecha() {
        console.log(`<---------Fecha--------->`);
        //let dia = prompt("Ingresa el dia")
        //let mes = prompt("Ingresa el mes")
        //let año = prompt("Ingresa el año")
        //let fecha = new Fecha(dia, mes, año);
        let fecha = new Fecha(19, 2, 2000);
        console.log(`La fecha indicada es: ${fecha.getFecha()}`);
        console.log(`El día fue: ${fecha.getDiaFecha()}`);
        console.log(`Han pasado ${fecha.getAños()} años`);
        console.log(`Han pasado ${fecha.getMeses()} meses`);
        console.log(`Han pasado ${fecha.getSemanas()} semanas`);
        console.log(`Han pasado ${fecha.getDias()} días`);
    }
    probarTiempo() {
        console.log(`<---------Tiempo--------->`);
        let tiempo = new Tiempo(11, 11, "PM");
        console.log(`La hora en el formato 24HRS es: ${tiempo.getFormato24()}`);
        console.log(`La hora en el formato AM/PM es: ${tiempo.getFormato12()}`);
    }
    probarNombre() {
        console.log(`<---------Nombres--------->`)
        let nombre = new Nombre("Jesus Ivan", "Godinez", "Martinez");
        console.log(`Nombre completo: ${nombre.getNombreCompleto()}`);
        console.log(`Nombre completo por apellidos: ${nombre.getApellidoNombre()}`);
        console.log(`Iniciales: ${nombre.getIniciales()}`);
    }
    probarPaciente() {
        console.log(`<---------Pacientes--------->`)
        let fecha = new Fecha(19, 2 , 2000);
        let paciente = new Paciente("Juan Perez", fecha.getFecha(), "3121205971");
        console.log(`${paciente.getPerfil()}`);
    }
}

let app = new Main
app.probarFecha();
app.probarTiempo();
app.probarNombre();
app.probarPaciente();