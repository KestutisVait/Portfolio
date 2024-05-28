import {
  KomercinesPatalpos,
  KomercinesPatalposNuoma,
  Garazas,
  GarazasNuoma,
  GamybinePatalpa,
  GamybinePatalpaNuoma,
} from "../klases/komercinepatalpa.js";
import { regionai } from "./regionai.js"
import { agentai } from "./agentai.js";
let komerciniaiObjektai = [
  new KomercinesPatalpos({
    id: 1,
    kaina: 80000,
    aprasymas:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum ipsam numquam culpa dolorum dicta fuga eaque, hic illo nemo nulla aspernatur, mollitia velit deleniti? Dolores quo, repudiandae illo quaerat magni possimus natus nulla, veritatis tempore libero quibusdam perspiciatis nam, aut dolorum quis dolor. Nam, aliquid dicta. Voluptate, voluptatum quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: regionai[4].nt(),
      rajonas: "Blynu",
      miestas: "Paukstiena",
      gatve: "Gatvininku g.",
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_113771774/vilniaus-r-sav-skaidiskiu-k-sodu-g.jpg",
      "https://static.domoplius.lt/domoplius/images/anns/domoplius/2/81789/67/parduodamos-biuro-prekybos-ir-paslaugu-kita-patalpos-klaipedoje-centre-minijos-_4378301_big.jpg",
      "https://static.domoplius.lt/domoplius/images/anns/domoplius/2/81789/67/parduodamos-biuro-prekybos-ir-paslaugu-kita-patalpos-klaipedoje-centre-minijos-_4378402_big.jpg",
    ],
    agentas: agentai[0],
    plotas: 100,
  }),
  new KomercinesPatalpos({
    id: 2,
    kaina: 334000,
    aprasymas:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum ipsam numquam culpa dolorum dicta fuga eaque, hic illo nemo nulla aspernatur, mollitia velit deleniti? Dolores quo, repudiandae illo quaerat magni possimus natus nulla, veritatis tempore libero quibusdam perspiciatis nam, aut dolorum quis dolor. Nam, aliquid dicta. Voluptate, voluptatum quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: regionai[5].nt(),
      rajonas: "Pietų rajonas",
      miestas: "Utena",
      gatve: "Miela g.",
    },
    galerija: [
      "https://static.domoplius.lt/domoplius/images/anns/domoplius/2/81789/67/parduodamos-biuro-prekybos-ir-paslaugu-kita-patalpos-klaipedoje-centre-minijos-_4378402_big.jpg",
      "https://static.domoplius.lt/domoplius/images/anns/domoplius/2/81531/76/biuro-prekybos-ir-paslaugu-maitinimo-patalpu-nuoma-klaipedoje-centre-danes-_7542011_big.jpg",
      "https://static.domoplius.lt/domoplius/images/anns/domoplius/2/81531/76/biuro-prekybos-ir-paslaugu-maitinimo-patalpu-nuoma-klaipedoje-centre-danes-_7542142_big.jpg",
    ],
    agentas: agentai[0],
    plotas: 100,
  }),
  new KomercinesPatalpos({
    id: 3,
    kaina: 28000,
    aprasymas:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum ipsam numquam culpa dolorum dicta fuga eaque, hic illo nemo nulla aspernatur, mollitia velit deleniti? Dolores quo, repudiandae illo quaerat magni possimus natus nulla, veritatis tempore libero quibusdam perspiciatis nam, aut dolorum quis dolor. Nam, aliquid dicta. Voluptate, voluptatum quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum ipsam numquam culpa dolorum dicta fuga eaque, hic illo nemo nulla aspernatur, mollitia velit deleniti? Dolores quo, repudiandae illo quaerat magni possimus natus nulla, veritatis tempore libero quibusdam perspiciatis nam, aut dolorum quis dolor. Nam, aliquid dicta. Voluptate, voluptatum quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum ipsam numquam culpa dolorum dicta fuga eaque, hic illo nemo nulla aspernatur, mollitia velit deleniti? Dolores quo, repudiandae illo quaerat magni possimus natus nulla, veritatis tempore libero quibusdam perspiciatis nam, aut dolorum quis dolor. Nam, aliquid dicta. Voluptate, voluptatum quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum ipsam numquam culpa dolorum dicta fuga eaque, hic illo nemo nulla aspernatur, mollitia velit deleniti? Dolores quo, repudiandae illo quaerat magni possimus natus nulla, veritatis tempore libero quibusdam perspiciatis nam, aut dolorum quis dolor. Nam, aliquid dicta. Voluptate, voluptatum quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: regionai[3].nt(),
      rajonas: "Šiaurės rajonas",
      miestas: "Tauragė",
      gatve: "Ramygalos g.",
    },
    galerija: [
      "https://static.domoplius.lt/domoplius/images/anns/domoplius/2/81531/79/parduodamos-biuro-prekybos-ir-paslaugu-patalpos-klaipedoje-debrecene-taikos-p_7543601_big.jpg",
      "https://static.domoplius.lt/domoplius/images/anns/domoplius/2/81531/76/biuro-prekybos-ir-paslaugu-maitinimo-patalpu-nuoma-klaipedoje-centre-danes-_7542142_big.jpg",
    ],
    agentas: agentai[1],
    plotas: 55100,
  }),
  new KomercinesPatalposNuoma({
    id: 4,
    kaina: 666,
    aprasymas:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: regionai[2].nt(),
      rajonas: "Pjuvio rajonas",
      miestas: "Vilnius",
      gatve: "Hepingo g.",
    },
    galerija: [
      "https://static.domoplius.lt/domoplius/images/anns/domoplius/2/81431/17/biuro-prekybos-ir-paslaugu-kita-patalpu-nuoma-klaipedoje-centre-m-mazvydo-a_6739500_big.jpg",
      "https://static.domoplius.lt/domoplius/images/anns/domoplius/2/81431/17/biuro-prekybos-ir-paslaugu-kita-patalpu-nuoma-klaipedoje-centre-m-mazvydo-a_6739641_big.jpg",
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
      regionas: regionai[6].nt(),
      rajonas: "Jūros rajonas",
      miestas: "Klaipėda",
      gatve: "Belo g.",
    },
    galerija: [
      "https://static.domoplius.lt/domoplius/images/anns/domoplius/2/81403/93/biuro-patalpu-nuoma-telsiu-rajono-sav-telsiuose-sedos-_3893600_medium.jpg",
      "https://static.domoplius.lt/domoplius/images/anns/domoplius/2/81403/93/biuro-patalpu-nuoma-telsiu-rajono-sav-telsiuose-sedos-_3893691_big.jpg",
      "https://static.domoplius.lt/domoplius/images/anns/domoplius/2/81403/93/biuro-patalpu-nuoma-telsiu-rajono-sav-telsiuose-sedos-_3893822_big.jpg",
    ],
    agentas: agentai[2],
    plotas: 200,
  }),
  new Garazas({
    id: 6,
    kaina: 80000,
    aprasymas:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum ipsam numquam culpa dolorum dicta fuga eaque, hic illo nemo nulla aspernatur, mollitia velit deleniti? Dolores quo, repudiandae illo quaerat magni possimus natus nulla, veritatis tempore libero quibusdam perspiciatis nam, aut dolorum quis dolor. Nam, aliquid dicta. Voluptate, voluptatum quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: regionai[6].nt(),
      rajonas: "Bombastic",
      miestas: "Taurage",
      gatve: "Spider-Man g.",
    },
    galerija: [
      "https://skelbiu-img.dgn.lt/1_18_3738147767/parduodu-garaza-adresu-laisves-pr-77a-c-30.jpg",
      "https://skelbiu-img.dgn.lt/1_18_3738147765/parduodu-garaza-adresu-laisves-pr-77a-c-30.jpg",
      "https://skelbiu-img.dgn.lt/1_18_3738147763/parduodu-garaza-adresu-laisves-pr-77a-c-30.jpg",
    ],
    agentas: agentai[2],
    plotas: 200,
  }),
  new Garazas({
    id: 7,
    kaina: 12001,
    aprasymas:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum ipsam numquam culpa dolorum dicta fuga eaque, hic illo nemo nulla aspernatur, mollitia velit deleniti? Dolores quo, repudiandae illo quaerat magni possimus natus nulla, veritatis tempore libero quibusdam perspiciatis nam, aut dolorum quis dolor. Nam, aliquid dicta. Voluptate, voluptatum quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: regionai[5].nt(),
      rajonas: "Centrinis rajonas",
      miestas: "Panevėžys",
      gatve: "Eglės g.",
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_114420296/vilnius-verkiai-verkiu-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_113486056/vilnius-verkiai-verkiu-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_114419238/vilnius-verkiai-verkiu-g.jpg",
    ],
    agentas: agentai[0],
    plotas: 200,
  }),
  new Garazas({
    id: 8,
    kaina: 7000,
    aprasymas:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum ipsam numquam culpa dolorum dicta fuga eaque, hic illo nemo nulla aspernatur, mollitia velit deleniti? Dolores quo, repudiandae illo quaerat magni possimus natus nulla, veritatis tempore libero quibusdam perspiciatis nam, aut dolorum quis dolor. Nam, aliquid dicta. Voluptate, voluptatum quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: regionai[7].nt(),
      rajonas: "Pietų rajonas",
      miestas: "Šiauliai",
      gatve: "Aušros g.",
    },
    galerija: [
      "https://skelbiu-img.dgn.lt/1_18_3738147357/parduodu-garaza-adresu-laisves-pr-77a-c-30.jpg",
      "https://skelbiu-img.dgn.lt/1_18_3738147415/parduodu-garaza-adresu-laisves-pr-77a-c-30.jpg",
      "https://skelbiu-img.dgn.lt/1_18_3738147631/parduodu-garaza-adresu-laisves-pr-77a-c-30.jpg",
    ],
    agentas: agentai[0],
    plotas: 200,
  }),
  new GarazasNuoma({
    id: 9,
    kaina: 50,
    aprasymas:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum ipsam numquam culpa dolorum dicta fuga eaque, hic illo nemo nulla aspernatur, mollitia velit deleniti? Dolores quo, repudiandae illo quaerat magni possimus natus nulla, veritatis tempore libero quibusdam perspiciatis nam, aut dolorum quis dolor. Nam, aliquid dicta. Voluptate, voluptatum quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: regionai[1].nt(),
      rajonas: "Rytų rajonas",
      miestas: "Marijampolė",
      gatve: "Liepų g.",
    },
    galerija: [
      "https://skelbiu-img.dgn.lt/1_18_3819573368/garazas-su-duobe.jpg",
      "https://skelbiu-img.dgn.lt/1_18_3819573368/garazas-su-duobe.jpg",
      "https://skelbiu-img.dgn.lt/1_18_3819573366/garazas-su-duobe.jpg",
    ],
    agentas: agentai[1],
    plotas: 200,
  }),
  new GamybinePatalpa({
    id: 10,
    kaina: 340000,
    aprasymas:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum ipsam numquam culpa dolorum dicta fuga eaque, hic illo nemo nulla aspernatur, mollitia velit deleniti? Dolores quo, repudiandae illo quaerat magni possimus natus nulla, veritatis tempore libero quibusdam perspiciatis nam, aut dolorum quis dolor. Nam, aliquid dicta. Voluptate, voluptatum quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: regionai[5].nt(),
      rajonas: "Vakarų rajonas",
      miestas: "Alytus",
      gatve: "Beržo g.",
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_113771776/vilniaus-r-sav-skaidiskiu-k-sodu-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_113771768/vilniaus-r-sav-skaidiskiu-k-sodu-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_113771774/vilniaus-r-sav-skaidiskiu-k-sodu-g.jpg",
    ],
    agentas: agentai[2],
    plotas: 300,
  }),
  new GamybinePatalpaNuoma({
    id: 11,
    kaina: 500,
    aprasymas:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum ipsam numquam culpa dolorum dicta fuga eaque, hic illo nemo nulla aspernatur, mollitia velit deleniti? Dolores quo, repudiandae illo quaerat magni possimus natus nulla, veritatis tempore libero quibusdam perspiciatis nam, aut dolorum quis dolor. Nam, aliquid dicta. Voluptate, voluptatum quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: regionai[4].nt(),
      rajonas: "Vidurio rajonas",
      miestas: "Molėtai",
      gatve: "Pušyno g.",
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_67_113680558/kaunas-aleksotas-europos-pr.jpg",
      "https://aruodas-img.dgn.lt/object_62_113680560/kaunas-aleksotas-europos-pr.jpg",
      "https://aruodas-img.dgn.lt/object_62_113680564/kaunas-aleksotas-europos-pr.jpg",
    ],
    agentas: agentai[2],
    plotas: 200,
  }),
  new GamybinePatalpaNuoma({
    id: 12,
    kaina: 560,
    aprasymas:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum ipsam numquam culpa dolorum dicta fuga eaque, hic illo nemo nulla aspernatur, mollitia velit deleniti? Dolores quo, repudiandae illo quaerat magni possimus natus nulla, veritatis tempore libero quibusdam perspiciatis nam, aut dolorum quis dolor. Nam, aliquid dicta. Voluptate, voluptatum quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: regionai[4].nt(),
      rajonas: "Rytu rajonas",
      miestas: "Molėtai",
      gatve: "Duobyno g.",
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_114424672/kauno-r-sav-giraites-k-aido-g.jpg",
      "https://aruodas-img.dgn.lt/object_67_114424664/kauno-r-sav-giraites-k-aido-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_114424662/kauno-r-sav-giraites-k-aido-g.jpg",
    ],
    agentas: agentai[2],
    plotas: 200,
  }),
  new GamybinePatalpaNuoma({
    id: 13,
    kaina: 690,
    aprasymas:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum ipsam numquam culpa dolorum dicta fuga eaque, hic illo nemo nulla aspernatur, mollitia velit deleniti? Dolores quo, repudiandae illo quaerat magni possimus natus nulla, veritatis tempore libero quibusdam perspiciatis nam, aut dolorum quis dolor. Nam, aliquid dicta. Voluptate, voluptatum quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
    adresas: {
      regionas: regionai[4].nt(),
      rajonas: "Kairiojo rajonas",
      miestas: "Molėtai",
      gatve: "Eglynu g.",
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_114120330/vilnius-naujamiestis-svitrigailos-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_114120300/vilnius-naujamiestis-svitrigailos-g.jpg",
    ],
    agentas: agentai[2],
    plotas: 200,
  }),
];
export { komerciniaiObjektai };
