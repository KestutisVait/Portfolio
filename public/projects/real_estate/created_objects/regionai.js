import { Regionas } from "../klases/regionas.js";

const regionai = [];

const regionas1 = {
  pavadinimas: "Vilnius apskritis",
  aprasymas: `valstybinio lygmens administracinis teritorinis vienetas pietryčių Lietuvoje,
  aplink Vilniaus miestą, tiek pagal teritoriją, tiek ir pagal gyventojų skaičių didžiausia iš dešimties Lietuvos apskričių.`,
};
const regionas2 = {
  pavadinimas: "Klaipėdos apskritis",
  aprasymas: `1995-2010 m. valstybinio lygmens administracinis teritorinis vienetas Vakarų Lietuvoje,
  vienintelė, kurios krantus skalauja Baltijos jūra ir Kuršių marios.`,
};
const regionas3 = {
  pavadinimas: "Panevėžio apskritis",
  aprasymas: ` Lietuvos Respublikos administracinis teritorinis vienetas Lietuvos šiaurės rytinėje dalyje,
  abipus Nevėžio. Apskrities centras - Panevėžys.`,
};
const regionas4 = {
  pavadinimas: "Šiaulių apskritis",
  aprasymas: `Centras - Šiauliai. Apskritis šiaurėje ribojasi su Latvijos teritorija, vakaruose su Telšių apskritimi,
  pietvakariuose su Tauragės apskritimi, pietuose su Kauno apskritimi ir rytuose su Panevėžio apskritimi.`,
};
const regionas5 = {
  pavadinimas: "Tauragės apskritis ",
  aprasymas: `teritorinis vienetas vidurio vakarų Lietuvoje, į pietryčius nuo Klaipėdos. Centras - Tauragė.`,
};
const regionas6 = {
  pavadinimas: "Kauno apskritis",
  aprasymas: `Apskrities centras - Kaunas. Ribojasi su Alytaus, Vilniaus, Panevėžio, Šiaulių, Tauragės ir Marijampolės apskritimis.`,
};
const regionas7 = {
  pavadinimas: "Utenos apskritis",
  aprasymas: ` valstybinio lygmens administracinis teritorinis vienetas šiaurės rytų Lietuvoje. Centras - Utena.`,
};
const regionas8 = {
  pavadinimas: "Telšių apskritis",
  aprasymas: `Apskritis šiaurėje ribojasi su Latvijos teritorija, vakaruose su Klaipėdos apskritimi,
  rytuose su Šiaulių apskritimi, pietuose su Tauragės apskritimi.`,
};

regionai.push(new Regionas(regionas1));
regionai.push(new Regionas(regionas2));
regionai.push(new Regionas(regionas3));
regionai.push(new Regionas(regionas4));
regionai.push(new Regionas(regionas5));
regionai.push(new Regionas(regionas6));
regionai.push(new Regionas(regionas7));
regionai.push(new Regionas(regionas8));

export { regionai };
