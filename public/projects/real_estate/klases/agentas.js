import { Galerija } from "./galerija.js";
// import { agentai} from "../created_objects/agentai.js"
class Agentas {
  /**
   *
   * @param {string} vardas
   * @param {string} pavarde
   * @param {string} nuotraukaURL pvz "https://picsum.photos/id/15/500"
   * @param {string} aprasas 
   * @param {Regionai}  Regionai object
   * 
   */
  constructor(id, vardas, pavarde, nuotraukaURL=[], aprasas, regionas) {

    this.id = id;
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.galerija = new Galerija([nuotraukaURL]);
    this.aprasas = aprasas;
    this.regionas = regionas;
  }
  nt() {
    const ntAgentas = document.createElement("div");
    ntAgentas.classList.add("nt-agentas")
    const vardas = document.createElement("p");

    vardas.append(`${this.vardas} ${this.pavarde}`);     
    ntAgentas.append(this.galerija.isvedimasKataloguiAgento(), vardas);
   
    return ntAgentas;
  };
  isvedimasPilnas(){
    const ntAgentas = document.createElement("div");
    ntAgentas.classList.add("pilnas-agentas");
    const vardas = document.createElement("p");
    vardas.className = "agent_vardas";
    const pavarde = document.createElement("p");
    pavarde.className = "agent_pavarde";
    const aprasas = document.createElement("p");
    aprasas.className = "agent_aprasas";
    const foto = document.createElement("div");
    foto.className = "agent_foto";
    const regionas = document.createElement("div");
    regionas.className = "agent_regionas";

    vardas.append(this.vardas);
    pavarde.append(this.pavarde);
    aprasas.append(this.aprasas);
    foto.append(this.galerija.isvdeimasProfilis());
    regionas.append(`Prižiūrimas regionas: ${this.regionas}`);
    ntAgentas.append(foto, vardas, pavarde, regionas, aprasas);

    return ntAgentas
  };
  isvedimasNTKatalogui(){
    const ntAgentas = document.createElement("div");
    ntAgentas.classList.add("katalogas-agentas");
    ntAgentas.append(`${this.vardas} ${this.pavarde}`);

    return ntAgentas
  };
  isvedimasAgentuSarasui(){
    let div = document.createElement("div");
    div.classList.add("agentas");
    const foto = document.createElement("img");
    foto.setAttribute("src", this.galerija.imageArray[0]);
    const vardas = document.createElement("p");
    vardas.classList.add("vardas");
    const pavarde = document.createElement("p");
    pavarde.classList.add("pavarde");
    const regionai = document.createElement("div");
    regionai.classList.add("regionas");
    
    let profilis_btn = document.createElement("div");
    profilis_btn.classList.add("profilis-btn");
    profilis_btn.setAttribute("num", this.id )

    vardas.append(this.vardas);
    pavarde.append(this.pavarde);
    regionai.append(`Regionas: ${this.regionas}`);
    profilis_btn.append("Profilis");
    
    //rezervuota kodui kuris pasakys kiek objektu turi agentas.
    //kodas pereis per visus nt objektus ir grazins tuos objektus kur yra jo vardas(arba ju suma arba sarasa (ul list))
    //gali buti ir kazkoks statinis klases metodas kuris tai padarys. mes gi objekti mokomes :))

    div.append(foto, vardas, pavarde, regionai, profilis_btn);

    return div;
  }

  /**
   * 
   * @param {array} agentai 
   * @returns container div with multiple divs containing info on agentas.
   */
  static isvedimasVisiAgentai(agentai){
    const sarasas = document.createElement("div");
    sarasas.classList.add("agentu-sarasas");
    for(let agentas of agentai){
      sarasas.append(agentas.isvedimasAgentuSarasui());
    }
    return sarasas
  }
}


export { Agentas };
