import { NTSvetaine } from "./klases/NTSvetaine.js";
NTSvetaine.menu();
NTSvetaine.titulinis();
NTSvetaine.agentai();

import {
  KomercinesPatalpos,
  KomercinesPatalposNuoma,
  Garazas,
  GarazasNuoma,
  GamybinePatalpa,
  GamybinePatalpaNuoma,
} from "./klases/komercinepatalpa.js";
import { Sklypas, SklypasNuoma } from "./klases/sklypas.js";
import { Agentas } from "./klases/agentas.js";

let agentai = [
  new Agentas("James", "Bond", "https://picsum.photos/id/69/150"),
  new Agentas("Mister", "Holmes", "https://picsum.photos/id/72/150"),
  new Agentas("Ninja", "Shredder", "https://picsum.photos/id/73/150"),
];
let adresasData = {
  regionas: "Regionas Placeholder",
  rajonas: "Rajonas",
  miestas: "Miestas",
  gatve: "gatviu g. 19",
};
let objektai = [
  new KomercinesPatalpos({
    id: 1,
    kaina: 1000,
    aprasymas:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: "Regionas Placeholder",
      rajonas: "Rajonas",
      miestas: "Miestas",
      gatve: "gatviu g. 19",
    },
    galerija: [
      "https://picsum.photos/id/20/500",
      "https://picsum.photos/id/21/500",
      "https://picsum.photos/id/22/500",
    ],
    agentas: agentai[0],
    plotas: 100,
  }),
  new KomercinesPatalpos({
    id: 2,
    kaina: 3000,
    aprasymas:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: "Regionas Placeholder",
      rajonas: "Kazkur",
      miestas: "Klaipeda",
      gatve: "Miela gatve",
    },
    galerija: [
      "https://picsum.photos/id/23/500",
      "https://picsum.photos/id/21/500",
      "https://picsum.photos/id/22/500",
    ],
    agentas: agentai[0],
    plotas: 100,
  }),
  new KomercinesPatalpos({
    id: 3,
    kaina: 3000,
    aprasymas:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: "Regionas Placeholder",
      rajonas: "Moon",
      miestas: "Newyork",
      gatve: "spiderman",
    },
    galerija: [
      "https://picsum.photos/id/25/500",
      "https://picsum.photos/id/21/500",
      "https://picsum.photos/id/22/500",
    ],
    agentas: agentai[1],
    plotas: 55100,
  }),
  new KomercinesPatalposNuoma({
    id: 2,
    kaina: 390,
    aprasymas:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: "Regionas Placeholder",
      rajonas: "Weee",
      miestas: "Newyork",
      gatve: "Miles Morales",
    },
    galerija: [
      "https://picsum.photos/id/43/500",
      "https://picsum.photos/id/21/500",
      "https://picsum.photos/id/22/500",
    ],
    agentas: agentai[0],
    plotas: 200,
  }),
  new KomercinesPatalposNuoma({
    id: 5,
    kaina: 555,
    aprasymas:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: "Regionas Placeholder",
      rajonas: "Weee",
      miestas: "Turkey",
      gatve: "Miles Morales",
    },
    galerija: [
      "https://picsum.photos/id/33/500",
      "https://picsum.photos/id/21/500",
      "https://picsum.photos/id/22/500",
    ],
    agentas: agentai[2],
    plotas: 200,
  }),
  new Garazas({
    id: 2,
    kaina: 666,
    aprasymas:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: "Regionas Placeholder",
      rajonas: "Weee",
      miestas: "Sun",
      gatve: "Miles Morales",
    },
    galerija: [
      "https://picsum.photos/id/83/500",
      "https://picsum.photos/id/21/500",
      "https://picsum.photos/id/22/500",
    ],
    agentas: agentai[2],
    plotas: 200,
  }),
  new Garazas({
    id: 2,
    kaina: 5000000,
    aprasymas:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: "Regionas Placeholder",
      rajonas: "Weee",
      miestas: "Sweden",
      gatve: "Miles Morales",
    },
    galerija: [
      "https://picsum.photos/id/203/500",
      "https://picsum.photos/id/21/500",
      "https://picsum.photos/id/22/500",
    ],
    agentas: agentai[0],
    plotas: 200,
  }),
  new GarazasNuoma({
    id: 2,
    kaina: 2,
    aprasymas:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: "Regionas Placeholder",
      rajonas: "Weee",
      miestas: "Solar System",
      gatve: "Miles Morales",
    },
    galerija: [
      "https://picsum.photos/id/193/500",
      "https://picsum.photos/id/21/500",
      "https://picsum.photos/id/22/500",
    ],
    agentas: agentai[1],
    plotas: 200,
  }),
  new GamybinePatalpa({
    id: 2,
    kaina: 999,
    aprasymas:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: "Regionas Placeholder",
      rajonas: "Weee",
      miestas: "OoOoOoOooo",
      gatve: "Miles Morales",
    },
    galerija: [
      "https://picsum.photos/id/113/500",
      "https://picsum.photos/id/21/500",
      "https://picsum.photos/id/22/500",
    ],
    agentas: agentai[2],
    plotas: 300,
  }),
  new GamybinePatalpaNuoma({
    id: 2,
    kaina: 123,
    aprasymas:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: "Regionas Placeholder",
      rajonas: "Weee",
      miestas: "Mooooo",
      gatve: "Miles Morales",
    },
    galerija: [
      "https://picsum.photos/id/222/500",
      "https://picsum.photos/id/21/500",
      "https://picsum.photos/id/22/500",
    ],
    agentas: agentai[2],
    plotas: 200,
  }),
  new Sklypas({
    id: 1,
    kaina: 20000,
    aprasymas:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: "Regionas Placeholder",
      rajonas: "Miskininkai",
      miestas: "Laukymiskes",
      gatve: "Pievu 5",
    },
    galerija: [
      "https://picsum.photos/id/222/500",
      "https://picsum.photos/id/21/500",
      "https://picsum.photos/id/22/500",
    ],
    agentas: agentai[0],
    plotas: 40,
  })
];
export { objektai };
