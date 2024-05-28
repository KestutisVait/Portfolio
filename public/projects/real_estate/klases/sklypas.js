import { NT } from "./nt.js";
/**
 * Klase skirta suformuoti Sklypo isvedima.
 */
class Sklypas extends NT {
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
   * @param {string} data.plotas - plotas
   */
  constructor(data) {
    super(data);
    this.plotas = data.plotas;
    this.koordinates = data.koordinates;
  }
  /**
   * suformuoja komponenta su pilna informacija apie sklypa
   * @returns html "div" element
   */
  isvedimasPilnas() {
    let isvedimas = document.createElement("div");
    isvedimas.className = "nt-pilnas";
    let kaina = this.kainaIsvedimas();
    let adresas = this.adresas.isvedimasPilnas();
    let nt_stats = document.createElement("div");
    nt_stats.classList.add("nt-stats");
    let nt_nouns = document.createElement("div");
    nt_nouns.classList.add("nt-nouns");
    let nt_numbers = document.createElement("div");
    nt_numbers.classList.add("nt-numbers");
    let aprasymas = document.createElement("div");
    aprasymas.classList.add("nt-aprasymas");
    let galerija = this.galerija.galerijaNT();
    let agentas = this.agentas.nt();

    nt_nouns.append(`Plotas:`);
    nt_numbers.append(`${this.plotas}a.`);
    nt_stats.append(nt_nouns, nt_numbers);
    aprasymas.append(this.aprasymas);
    isvedimas.append(kaina, adresas, nt_stats, aprasymas, galerija, agentas);

    return isvedimas;
  }
  /**
   * suformuoja komponenta su informacija apie sklypa katalogui
   * @returns html "div" element
   */
  isvedimasKatalogui() {
    let isvedimas = document.createElement("div");
    isvedimas.append(this.galerija.isvedimasKataloguiNT());
    isvedimas.append(this.kainaIsvedimas());
    isvedimas.append(this.adresas.isvedimasPilnas());
    isvedimas.append(this.agentas.nt());

    return isvedimas;
  }
}
class SklypasNuoma extends Sklypas {
  constructor(data) {
    super(data);
  }
  kainaIsvedimas() {
    let kainaDiv = document.createElement("div");
    kainaDiv.classList.add("nt-kaina");
    kainaDiv.append(`${this.kaina}€/mėn.`);
    return kainaDiv;  
  }
}
export { Sklypas, SklypasNuoma };
