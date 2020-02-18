export default class Fecha {
    /**
     * 
     * @param {number} dia
     * @param {number} mes
     * @param {number} año
     */
    constructor(dia, mes, año) {
        this.fecha = new Date(año, mes -1, dia);
    }

    getAños() {
        let restaAños = new Date(Date.now() - this.fecha);
        let msAño = 1000 * 60 * 60 * 24 * 365;
        let años = Math.trunc(restaAños/msAño);
        return `${años}`;
    }
}

let app = new Main
app.probarFecha();