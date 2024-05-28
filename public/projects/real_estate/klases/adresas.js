import { Regionas } from "./regionas.js";

class Adresas {
  /**naudojimas:reikia sukurti atskira adresas objekta pvz.:let adresasobject3 = {
  regionas: regionai[1].nt(),
  rajonas: "Klaipėdos rajono savivaldybė",
  miestas: "Klaipėda",
  gatve: "Rožių g. 122",
  namo_nr: 122,
};
objekta reikia priskirti prie adreso klases let adresas1 = new Adresas(adresasobject1) ir priskirti prie pvz. prie namai objektu.
prie savo klasių dar prideti adreso metodus.
   * @constructor
   * @param {Object} data - The data object containing specific parameters.
   * @param {Regionas} data.regionas - The ID.
   * @param {string} data.rajonas
   * @param {string} data.miestas
   * @param {string} data.gatve
   * @param {number} data.namo_nr - sito, gali ir nebuti jei reikia galima prirasyt
   * @param {number} data.buto_nr -sito, gali ir nebuti jei reikia galima prirasyt. Butinai turi buti su namo_nr
   * @param {string} data.koordinates - sito, gali ir nebuti jei reikia galima prirasyt
   */
  constructor(data) {
    this.regionas = data.regionas;
    this.rajonas = data.rajonas;
    this.gatve = data.gatve;
    this.miestas = data.miestas;
    this.namo_nr = data.namo_nr;
    this.buto_nr = data.buto_nr;
    this.koordinates = data.koordinates;
  }
  isvedimasKoordinaciu() {
    return this.koordinates;
  }
  isvedimasPilnas() {
    let ntAdresas = document.createElement("div");
    ntAdresas.classList.add("nt-adresas");
    ntAdresas.append(this.regionas);
    ntAdresas.innerHTML += "<br>";
    ntAdresas.append(`${this.rajonas} raj.`);
    ntAdresas.innerHTML += "<br>";
    ntAdresas.append(this.miestas);
    ntAdresas.innerHTML += "<br>";
    ntAdresas.append(this.gatve);

    if (
      this.buto_nr === undefined &&
      this.namo_nr === undefined &&
      this.koordinates === undefined
    ) {
      return ntAdresas;
    } else if (this.namo_nr && this.buto_nr && this.koordinates === undefined) {
      ntAdresas.innerHTML += "<br>";
      ntAdresas.append("Namo numeris: ", this.buto_nr);
      ntAdresas.innerHTML += "<br>";
      ntAdresas.append("Buto numeris: ",this.namo_nr);
      return ntAdresas;
    } else if (
      this.namo_nr === undefined &&
      this.buto_nr === undefined &&
      this.koordinates
    ) {
      ntAdresas.innerHTML += "<br>";
      ntAdresas.append(this.koordinates);
      return ntAdresas;
    } else if (
      this.koordinates === undefined &&
      this.buto_nr === undefined &&
      this.namo_nr
    )
      ntAdresas.innerHTML += "<br>";
    ntAdresas.append("Namo numeris: ", this.namo_nr);
    return ntAdresas;
  }
  isvedimasKatalogui() {
    let adresas_katalogui = document.createElement("div");
    adresas_katalogui.classList.add("nt-adresas");
    adresas_katalogui.append(this.gatve, document.createElement("br"));
    adresas_katalogui.append(this.miestas);
    return adresas_katalogui
  }
}
export { Adresas };
