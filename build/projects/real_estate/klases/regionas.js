
class Regionas {
  /**
   *
   * @constructor
   * @param {string} data.pavadinimas
   * @param {string} data.aprasymas
   */
  constructor(data) {
    this.pavadinimas = data.pavadinimas;
    this.aprasymas = data.aprasymas;
  }
  nt() {
    return this.pavadinimas;
  }
  isvedimas() {
    const regionas_katalogui = document.createElement("div");
    regionas_katalogui.classList.add("regionas-katalogui");
    regionas_katalogui.append(
      this.pavadinimas,
      document.createElement("br"),
      this.aprasymas
    );
    return regionas_katalogui;
  }
  /**
   * 
   * @param {Array} agentai 
   * @returns agentus pasirinktame regione
   * isfiltruoja is agentai array visus agentus,kurie dirba pasirinktame regione
   */  
  agentai(agentai) {
    const agentsInRegion = agentai.filter(agentas => agentas.regionas === this.pavadinimas);
    return agentsInRegion;
  }
}


export { Regionas };
