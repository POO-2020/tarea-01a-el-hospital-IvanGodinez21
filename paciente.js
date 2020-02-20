export default class Paciente {
    /**
     * @param {string} nombre
     * @param {number} fecha
     * @param {string} numero
     */
     constructor(nombre, fecha, numero) {
         this.nombre = nombre
         this.fecha = fecha
         this.numero = numero
     }
     getPerfil() {
        return `${this.nombre}, ${this.fecha}, ${this.numero}`
     }
}