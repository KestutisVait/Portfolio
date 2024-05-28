import {
  Galerija
} from "./galerija.js";
import {
  Adresas
} from "./adresas.js";
class NT {
  /**
   * NT Class Constructor.
   * @constructor
   * @param {Object} data - The data object containing specific parameters.
   * @param {string} data.id - The ID.
   * @param {number} data.kaina - The price
   * @param {string} data.aprasymas - The description
   * @param {Adresas} data.adresas - The address info.
   * @param {Array<string>} galerija array with imageURLs
   * @param {Agentas} data.agentas - The agent object.
   */
  constructor(data) {
    this.id = data.id;
    this.kaina = data.kaina;
    this.aprasymas = data.aprasymas;
    this.adresas = new Adresas(data.adresas);
    this.galerija = new Galerija(data.galerija);
    this.agentas = data.agentas;
  }
  kainaIsvedimas() {
    let kainaDiv = document.createElement("div");
    kainaDiv.classList.add("nt-kaina");
    kainaDiv.append(`${this.kaina}€`);
    return kainaDiv;
  }
}

export {
  NT
};

