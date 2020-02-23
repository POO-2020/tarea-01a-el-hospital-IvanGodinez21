export default class Paciente {
    /**
     * @param {string} nombre
     * @param {number} fecha
     * @param {number} numero
     */
     constructor(nombre, fecha, numero) {
         this.nombre = nombre
         this.fecha = fecha
         this.numero = numero
     }
     getPerfil() {
        return `${this.nombre}\nFecha de registro: ${this.fecha}\nNúmero de Teléfono: ${this.numero}`
     }
}