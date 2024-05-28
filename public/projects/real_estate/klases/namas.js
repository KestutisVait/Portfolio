import { NT } from "./nt.js";
import { Adresas } from "./adresas.js";

class Namas extends NT {
  /**
   * @constructor
   * @param {Object} data - The data object containing specific parameters.
   * @param {string} data.id - The ID.
   * @param {number} data.kaina - The price
   * @param {string} data.aprasymas - The description
   * @param {Adresas} data.adresas - The address info.
   * @param {Array<string>} array array with imageURLs
   * @param {Object} data.agentas - The agent object.
   * @param {string} data.sklypo_plotas - Plotas su matavimo vienetais
   * @param {number} data.aukstu_sk - Aukstu skaicius
   * @param {number} kambariu_sk - kambariu skaicius
   * @param {string} sklypo_plotas - sklypo plotas su matavimo vienetais
   */
  constructor(data) {
    super(data);
    this.patalpu_plotas = data.patalpu_plotas;
    this.aukstu_sk = data.aukstu_sk;
    this.kambariu_sk = data.kambariu_sk;
    this.sklypo_plotas = data.sklypo_plotas;
  }
  kainaIsvedimas() {
    let kainaDiv = document.createElement("div");
    kainaDiv.classList.add("nt-kaina");
    kainaDiv.append(`${this.kaina}€`);
    return kainaDiv;
  }
  isvedimasPilnas() {
    const ntPilnas = document.createElement("div");
    ntPilnas.classList.add("nt-pilnas");
    const ntNouns = document.createElement("div");
    ntNouns.classList.add("nt-nouns");
    const ntNumbers = document.createElement("div");
    ntNumbers.classList.add("nt-numbers");
    const ntStats = document.createElement("div");
    ntStats.classList.add("nt-stats");
    const ntAprasymas = document.createElement("div");
    ntAprasymas.classList.add("nt-aprasymas");
    const ntNouns2 = document.createTextNode("Patalpų plotas:");
    const ntNouns3 = document.createTextNode("Aukstu skaičius:");
    const ntNouns4 = document.createTextNode("Kambarių skaičius:");
    const ntNouns5 = document.createTextNode("Sklypo plotas:");
    ntNouns.append(
      ntNouns2,
      document.createElement("br"),
      ntNouns3,
      document.createElement("br"),
      ntNouns4,
      document.createElement("br"),
      ntNouns5,
      document.createElement("br")
    );
    ntNumbers.append(
      this.patalpu_plotas,
      document.createElement("br"),
      this.aukstu_sk,
      document.createElement("br"),
      this.kambariu_sk,
      document.createElement("br"),
      this.sklypo_plotas,
      document.createElement("br")
    );
    ntAprasymas.append(this.aprasymas);
    ntStats.append(ntNouns);
    ntStats.append(ntNumbers);
    ntPilnas.append(
      ntStats,
      ntAprasymas,
      this.galerija.galerijaNT(),
      this.kainaIsvedimas(),
      this.adresas.isvedimasPilnas(),
      this.agentas.nt()
    );
    return ntPilnas;
  }
  isvedimasKatalogui() {
    let katalogas = document.createElement("div");
    katalogas.append(this.galerija.isvedimasKataloguiNT());
    katalogas.append(this.kainaIsvedimas());
    katalogas.append(this.adresas.isvedimasKatalogui());
    katalogas.append(this.agentas.nt());
    return katalogas;
  }
}


class NamasNuoma extends Namas {
  /**
   * @constructor
   * @param {Object} data - The data object containing specific parameters.
   * @param {string} data.id - The ID.
   * @param {number} data.kaina - The price
   * @param {string} data.aprasymas - The description
   * @param {Adresas} data.adresas - The address info.
   * @param {Array<string>} array array with imageURLs
   * @param {Object} data.agentas - The agent object.
   * @param {string} data.patalpu_plotas- Plotas su matavimo vienetais
   * @param {number} data.aukstu_sk - Aukstu skaicius
   * @param {number} data.kambariu_sk - kambariu skaicius
   * @param {string} data.sklypo_plotas - sklypo plotas su matavimo vienetais
   */
  constructor(data) {
    super(data);
  }
  kainaIsvedimas() {
    let kainaDiv = document.createElement("div");
    kainaDiv.classList.add("nt-kaina");
    kainaDiv.append(`${this.kaina} €/mėn.`);
    return kainaDiv;
  }
  isvedimasPilnas() {
    const ntPilnas = document.createElement("div");
    ntPilnas.classList.add("nt-pilnas");
    const ntNouns = document.createElement("div");
    ntNouns.classList.add("nt-nouns");
    const ntNumbers = document.createElement("div");
    ntNumbers.classList.add("nt-numbers");
    const ntStats = document.createElement("div");
    ntStats.classList.add("nt-stats");
    const ntAprasymas = document.createElement("div");
    ntAprasymas.classList.add("nt-aprasymas");
    const ntNouns2 = document.createTextNode("Patalpų plotas:");
    const ntNouns3 = document.createTextNode("Aukstu skaičius:");
    const ntNouns4 = document.createTextNode("Kambarių skaičius:");
    const ntNouns5 = document.createTextNode("Sklypo plotas:");
    ntNouns.append(
      ntNouns2,
      document.createElement("br"),
      ntNouns3,
      document.createElement("br"),
      ntNouns4,
      document.createElement("br"),
      ntNouns5,
      document.createElement("br")
    );
    ntNumbers.append(
      this.patalpu_plotas,
      document.createElement("br"),
      this.aukstu_sk,
      document.createElement("br"),
      this.kambariu_sk,
      document.createElement("br"),
      this.sklypo_plotas,
      document.createElement("br")
    );
    ntAprasymas.append(this.aprasymas);
    ntStats.append(ntNouns);
    ntStats.append(ntNumbers);
    ntPilnas.append(
      ntStats,
      ntAprasymas,
      this.galerija.galerijaNT(),
      this.kainaIsvedimas(),
      this.adresas.isvedimasPilnas(),
      this.agentas.nt()
    );
    return ntPilnas;
  }
  isvedimasKatalogui() {
    let katalogas = document.createElement("div");
    katalogas.append(this.galerija.isvedimasKataloguiNT());
    katalogas.append(this.kainaIsvedimas());
    katalogas.append(this.adresas.isvedimasKatalogui());
    katalogas.append(this.agentas.nt());
    return katalogas;
  }
}
export {Namas, NamasNuoma};