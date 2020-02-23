import Doctor from "./doctor.js";
export default class Hospital {
    /**
     * 
     * @param {string} doctor 
     * @param {string} listadocs 
     * @param {string} cita 
     * @param {string} listacita 
     */
    constructor (doctor, listadocs, cita, listacita) {
        this.doctor = doctor
        this.listadocs = new Array()
        this.cita = cita
        this.listacita = new Array()
    }
    registrarDoctor(doctor) {
        this.listadocs.push(doctor)
    }
    listarDoctores() {
        console.log("Doctores")
        this.listadocs.forEach((doctor, i) => {
            console.log(`(${i+1}) ${doctor.getPerfildoc()}`)
        })
    }
    registrarCita(cita) {
        this.listacita.push(cita)
    }
    listarCitas() {
        console.log("Citas")
        this.listacita.forEach((cita, i) => {
            console.log(`(${i+1}) ${cita.getCita()}`)
        })
    }
}