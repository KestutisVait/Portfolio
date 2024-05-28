// Nezinau kaip kitaip objektus sitai statinei klasei rasti
import { Agentas } from "./agentas.js";
import { agentai } from "../created_objects/agentai.js";
import { objektai } from "../created_objects/objektai.js";
import { regionai } from "../created_objects/regionai.js";

const main = document.getElementById("main");
const mainHTML = `<div class="side-buttons">
                    <div class='list-buttons' id="agentaiButton">Agentai</div>
                    <div class='list-buttons' id="regionaiButton">Regionai</div>
                    <div class='object-buttons'>Namai</div>
                    <div class='object-buttons'>Butai</div>
                    <div class='object-buttons'>Sklypai</div>
                    <div class='object-buttons'>Sodybos</div>
                    <div class='object-buttons'>Komercines</div>
                    <div class='object-buttons'>Gamybines</div>
                    <div class='object-buttons'>Garažai</div>
                  </div>
                  <div class="right-side">
                    <div class="pirkti-nuoma">
                      <div id="pirkti-button">Pirkti</div>
                      <div id="nuomai-button">Nuomai</div>
                    </div>
                    <div class="isvedimai"></div>
                  </div>
                  <div id="token" style="display:none">Neliesti</div>`;

/**
 * Reikalingi globalus array: objektai, agentai, regionai
 * Reikalingas div puslapyje su id="main"
 */
class NTSvetaine {
  constructor() {}
  static menu() {
    main.innerHTML = mainHTML;
    leftButtonObjectEvents();
    pirkti_nuoma_buttonEvents();
    document.getElementById("regionaiButton").addEventListener("click", () => {
    NTSvetaine.regionai();
    });
  }
  static agentai() {
    agentuSarasoIsvedimas();
  }
  static agentas(id) {
    return -1;
  }
  static regionai() {
    const isvedimaiDiv = document.querySelector('.isvedimai');
    isvedimaiDiv.innerHTML = '';
  
    for (const regionas of regionai) {
      const regionoIsvedimas = regionas.isvedimas();
      const agentsInRegion = regionas.agentai(agentai);
  
      const regionContainer = document.createElement('div');
      regionContainer.classList.add('regionai');
      regionContainer.appendChild(regionoIsvedimas);
  
      if (agentsInRegion.length > 0) {
        const agentsDiv = document.createElement('div');
        agentsDiv.classList.add('agentai-regione');
        agentsDiv.innerHTML = `<strong>Agentai šiame regione:</strong><br>`;
        
        for (const agentas of agentsInRegion) {
          agentsDiv.innerHTML += `Agentas: ${agentas.vardas}<br>`;
        }
  
        regionContainer.appendChild(agentsDiv);
      } else {
        regionContainer.innerHTML += `Nera agentų regione`;
      }
  
      isvedimaiDiv.appendChild(regionContainer);
    }
  
    hidePirktiNuomaButtons(true);
  }
  /**
   * Grazina masyva kazkokio NT pilnasIsrasimas() divus
   * @param {string} Klase galimi: Namas, Butas, Sklypas, Sodyba, KomercinesPatalpos, GamybinePatalpa, Garazas... Nuomom: NamasNuomai etc.
   * @param {number} kiekis 0 = visus isvesti(default)
   */
  static objektai(klase, kiekis = 0, clear = true) {
    if (clear) {
      // clean isvedimai before adding
      document.getElementsByClassName("isvedimai")[0].innerHTML = "";
    }
    let filteredObjects = filterObjects(klase);
    insertObjects(filteredObjects, kiekis);
  }
  static objektas(id) {
    return -1;
  }
  static titulinis() {
    let klases = [
      "Namas",
      "Butas",
      "Sklypas",
      "Sodyba",
      "KomercinesPatalpos",
      "GamybinePatalpa",
      "Garazas",
    ];
    for (let klase of klases) {
      this.objektai(klase, 5, false);
      this.objektai(klase + "Nuoma", 5, false);
    }
  }
}

function insertObjects(array, amount) {
  let isvedimai = document.getElementsByClassName("isvedimai")[0];
  let objectDiv;
  if (
    document.getElementsByClassName("objektu-katalogu-isvedimas").length == 0
  ) {
    objectDiv = document.createElement("div"); // idetas nes noriu stilius uzdeti katalogams, kad nepaveiktu kitu stiliu
    objectDiv.classList.add("objektu-katalogu-isvedimas");
  } else {
    objectDiv = document.getElementsByClassName(
      "objektu-katalogu-isvedimas"
    )[0];
  }
  let index = 0;
  if (amount == 0) {
    index = -Infinity;
  }
  for (let obj of array) {
    if (index >= amount) break;
    let div = obj.isvedimasKatalogui();
    div.classList.add("nt-katalogui");
    let objectButton = document.createElement("button"); // apsilankymo mygtukas
    objectButton.innerText = "Apsilankyti";
    objectButton.addEventListener("click", objectPilnasIsvedimasEvent(obj));
    addObjectClassNameToAddress(div, obj.constructor.name);
    div.append(objectButton);
    objectDiv.append(div);
    index++;
  }
  isvedimai.append(objectDiv);
}
// Prijungs klases pavadinima pvz Namas virs adreso kad aiskiau butu
function addObjectClassNameToAddress(obj, className) {
  let adresasDiv = obj.getElementsByClassName("nt-adresas")[0];
  let classNameDiv = document.createElement("p");
  classNameDiv.classList.add("katalogas-class-name");
  classNameDiv.append(removeNuomaFromName(className));
  let hr = document.createElement("hr");
  adresasDiv.prepend(hr);
  adresasDiv.prepend(classNameDiv);
}

function removeNuomaFromName(className) {
  let possibleNames = [
    "NamasNuoma",
    "ButasNuoma",
    "SklypasNuoma",
    "SodybaNuoma",
    "KomercinesPatalposNuoma",
    "GamybinePatalpaNuoma",
    "GarazasNuoma",
  ];
  for (let name of possibleNames){
    if (className == name){
      return className.slice(0,className.length-5)
    }
  }
  return className;
}

function objectPilnasIsvedimasEvent(obj) {
  return () => {
    let isvedimai = document.getElementsByClassName("isvedimai")[0];
    isvedimai.innerHTML = "";
    isvedimai.append(obj.isvedimasPilnas());
    hidePirktiNuomaButtons();
  };
}
// Returns array of objects fully filtered
function filterObjects(className) {
  let filteredObjects = [];
  // uses global objektai array
  for (let obj of objektai) {
    if (obj.constructor.name == className) {
      filteredObjects.push(obj);
    }
  }
  if (filteredObjects.length == 0) {
    console.log("No objects with this name: " + className);
  }
  return filteredObjects;
}
// leftButtonObjectEvents()
function leftButtonObjectEvents() {
  let buttons = document.getElementsByClassName("object-buttons");
  let classNames = [
    "Namas",
    "Butas",
    "Sklypas",
    "Sodyba",
    "KomercinesPatalpos",
    "GamybinePatalpa",
    "Garazas",
  ];
  for (let i = 0; i < classNames.length; i++) {
    buttons[i].addEventListener("click", () => {
      NTSvetaine.objektai(classNames[i]);
      NTSvetaine.objektai(classNames[i] + "Nuoma", 0, false);
      document.getElementById("token").innerHTML = classNames[i];
      hidePirktiNuomaButtons(false);
    });
  }
}
function pirkti_nuoma_buttonEvents() {
  let pirkti = document.getElementById("pirkti-button");
  let nuomai = document.getElementById("nuomai-button");
  pirkti.addEventListener("click", () => {
    if (token.innerHTML != "Neliesti") {
      NTSvetaine.objektai(token.innerHTML, 0);
    }
  });
  nuomai.addEventListener("click", () => {
    if (token.innerHTML != "Neliesti") {
      NTSvetaine.objektai(token.innerHTML + "Nuoma", 0);
    }
  });
}
function hidePirktiNuomaButtons(hide = true) {
  let buttons = document.getElementsByClassName("pirkti-nuoma")[0];
  if (hide) {
    buttons.style.display = "none";
  } else {
    buttons.style.display = "flex";
  }
}
//function for displaiyng list of short profile agentai 
function agentuSarasoIsvedimas() {
  let button = document.getElementById("agentaiButton");
  button.addEventListener("click", () => {
    document.getElementsByClassName("isvedimai")[0].innerHTML =
      Agentas.isvedimasVisiAgentai(agentai).innerHTML;
    agentoProfilioIsvedimas();
    hidePirktiNuomaButtons(true);
  });
}
//function for displaiyng a ful profile on agentas
function agentoProfilioIsvedimas() {
  let buttons = document.getElementsByClassName("profilis-btn");
  for (let b = 0; b < buttons.length; b++) {
    buttons[b].addEventListener("click", (event) => {
      let number = event.currentTarget.getAttribute("num");
      for (let agentas of agentai) {
        if (agentas.id == number) {
          let div = document.createElement("div");
          div.append(agentas.isvedimasPilnas());
          document.getElementsByClassName("isvedimai")[0].innerHTML = div.innerHTML;
        }
      }
    });
  }
}

NTSvetaine.menu();
NTSvetaine.titulinis();

export { NTSvetaine };
