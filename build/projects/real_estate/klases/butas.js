import {
    NT
} from "./nt.js";

// @class
// @constructor
// @param {number} kaina specific
// @param {Adresas} adresas imported
// @param {Galerija} galerija imported
// @param {Object} agentas imported
// @param {number} patalpu_plotas 
// @param {number} aukstas
// @param {number} kambariu_sk
// @param {string} aprasymas
// @param {Array<string>} imageURLs

class Butas extends NT {
  /**
   * Butas Class Constructor.
   * @constructor
   * @param {Object} data - The data object containing specific parameters.
    * @param {string} data.id - The ID.
    * @param {number} data.kaina - The price
    * @param {string} data.aprasymas - The description
    * @param {Adresas} data.adresas - The address info.
    * @param {Array<string>} galerija array with imageURLs
    * @param {Agentas} data.agentas - The agent object.
    * @param {number} patalpu_plotas
    * @param {number} aukstas
    * @param {number} kambariu_sk
   */
    constructor(objektas) {
        super(objektas)
        this.patalpu_plotas = objektas.patalpu_plotas;
        this.aukstas = objektas.aukstas;
        this.kambariu_sk = objektas.kambariu_sk;
    }
    isvedimasPilnas() {
        const ntPilnas = document.createElement("div");
        ntPilnas.classList.add("nt-pilnas");
        const ntKaina = this.kainaIsvedimas();
        const ntAprasymas = document.createElement("div");
        ntAprasymas.classList.add("nt-aprasymas");
        const ntNumbers = document.createElement("div");
        ntNumbers.classList.add("nt-numbers");
        const ntNouns = document.createElement("div");
        ntNouns.classList.add("nt-nouns");
        const ntStats = document.createElement("div");
        ntStats.classList.add("nt-stats");
        const ntAdresas = this.adresas.isvedimasPilnas();
        const ntGalerija = this.galerija.galerijaNT();
        const ntAgentas = this.agentas.nt();

        ntNouns.append("Plotas:");
        ntNouns.innerHTML += "<br>";
        ntNumbers.append(`${this.patalpu_plotas}m²`);
        ntNumbers.innerHTML += "<br>";

        ntNouns.append("Aukštas:");
        ntNouns.innerHTML += "<br>";
        ntNumbers.append(`${this.aukstas}`);
        ntNumbers.innerHTML += "<br>";

        ntNouns.append("Kambarių skaičius:");
        ntNouns.innerHTML += "<br>";
        ntNumbers.append(`${this.kambariu_sk}`);
        ntNumbers.innerHTML += "<br>";

        ntAprasymas.append(this.aprasymas);
        ntStats.append(ntNouns, ntNumbers);
        ntPilnas.append(
            ntKaina,
            ntAprasymas,
            ntStats,
            ntAdresas,
            ntGalerija,
            ntAgentas
        );
        return ntPilnas;
    }
    isvedimasKatalogui() {
        let div = document.createElement("div");
        div.append(this.galerija.isvedimasKataloguiNT());
        div.append(this.kainaIsvedimas());
        div.append(this.adresas.isvedimasKatalogui());
        div.append(this.agentas.nt());
        return div;
    }
}

class ButasNuoma extends Butas {
    constructor(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas, aukstas, kambariu_sk) {
        super(id, kaina, aprasymas, adresas, galerija, agentas, patalpu_plotas, aukstas, kambariu_sk)
    }
    kainaIsvedimas() {
        return `${this.kaina}€/mėn.`
    }
}

export {
    Butas,
    ButasNuoma
};