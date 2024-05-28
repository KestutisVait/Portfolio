import { Adresas } from "../klases/adresas.js";
import { Sklypas, SklypasNuoma } from "../klases/sklypas.js";
import { agentai } from "./agentai.js";
import { regionai } from "./regionai.js"

let sklypai = [
    new Sklypas({
        id: 1,
        kaina: 25000,
        aprasymas:
          `Sklypas yra už Mikaločių dvarelio. Privažiavimas nuo Klaipėdos plento ir iš Parko gatvės. ( Google.map paieška Mikaločių dvarelis)
          Į sklypą yra atvesta elektra, yra galimybė prisijungti prie vietinio vandentiekio ir kanalizacijos.
          Jokūbavo gyvenvėtėj yra mokykla, darželis, biblioteka, kulturos centras, draugiška bendruomenė.
          Geras susisiekimas viešuoju transportu, iki Klaipėdos 17km., iki Kretingos 9km., iki automagistralės Klaipėda-Kaunas A1 11km.`,
        adresas: {
          regionas: regionai[4].nt(),
          rajonas: "Pasilio",
          miestas: "Miskenai",
          gatve: "Palaukiu 2",
          koordinates: "41.40338, 2.17403"
        },
        galerija: [
          "https://skelbiu-img.dgn.lt/1_22_3599942601/sklypai.jpg",
          "https://skelbiu-img.dgn.lt/1_22_3599942613/kaimynai.jpg",
          "https://skelbiu-img.dgn.lt/1_22_3599942637/namu-valda.jpg"
        ],
        agentas: agentai[5],
        plotas: 24,
      }),
    new Sklypas({
        id: 3,
        kaina: 60000,
        aprasymas:
          `Namų valdos sklypas nuostabiame pušyne ir naujai besikuriančioje gyvenvietėje.`,
        adresas: {
          regionas: regionai[1].nt(),
          rajonas: "Kasyklos",
          miestas: "Karjeriskes",
          gatve: "Smilties g. 2",
          koordinates: "41.40338, 2.17403"
        },
        galerija: [
          "https://aruodas-img.dgn.lt/object_67_114522813/vilnius-traku-voke-zubiskiu-g-namu-valdos.jpg",
          "https://aruodas-img.dgn.lt/object_62_114308032/vilnius-traku-voke-zubiskiu-g-namu-valdos.jpg",
          "https://aruodas-img.dgn.lt/object_62_109772161/vilnius-traku-voke-zubiskiu-g-namu-valdos.jpg",
        ],
        agentas: agentai[6],
        plotas: 50,
      }),
    new Sklypas({
        id: 4,
        kaina: 46500,
        aprasymas:
          `Vilniaus rajone, Ąžuolinės k. Tapelių g. 41, parduodamas 90 arų žemės sklypas su jame esančiais dviem pastatais.`,
        adresas: {
          regionas: regionai[3].nt(),
          rajonas: "Tragija",
          miestas: "Vardonys",
          gatve: "Butvydo g. 5",
          koordinates: "41.40338, 2.17403"
        },
        galerija: [
          "https://aruodas-img.dgn.lt/object_62_114484534/vilniaus-r-sav-azuolines-k-tapeliu-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_114484530/vilniaus-r-sav-azuolines-k-tapeliu-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_114484540/vilniaus-r-sav-azuolines-k-tapeliu-g.jpg",
        ],
        agentas: agentai[1],
        plotas: 36,
      }),
    new Sklypas({
        id: 5,
        kaina: 70000,
        aprasymas:
          `10-15 arų namų valdos sklypai Viniaus rajone šalia Europos parko ir Neries upės už gerą kainą. 
          Nepaprastai graži ir švari gamta toli nuo gamyklų ir miesto triukšmo, tyras pušyno oras -tai 
          puikus pasirinkimas ieškantiems ramybės. Išvystyta infrastruktūra - vandens, dujų, elektros tiekimas,
          4G/5G interneto ryšys, nuotekų valymo sistema, šiukšlių išvežimo paslaugos leis gyventi patogiai
          ir be papildomų rūpesčių. Šalia įsikūrusi privati Valdorfo žalioji mokykla, o už keleto kilometrų
          - naujai pastatyta valstybinė Ažulaukės mokykla. Ateityje planuojama išasfaltuoti kelius bei įrengti gatvių apšvietimą.`,
        adresas: {
          regionas: regionai[7].nt(),
          rajonas: "Prabangenai",
          miestas: "Piliskes",
          gatve: "Karunos g. 1",
          koordinates: "41.40338, 2.17403"
        },
        galerija: [
          "https://aruodas-img.dgn.lt/object_67_89991563/vilniaus-r-sav-bratoniskiu-k-stumbru-g.jpg",
          "https://aruodas-img.dgn.lt/object_67_89991571/vilniaus-r-sav-bratoniskiu-k-stumbru-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_89991591/vilniaus-r-sav-bratoniskiu-k-stumbru-g.jpg",
        ],
        agentas: agentai[3],
        plotas: 105,
      }),
    new Sklypas({
        id: 6,
        kaina: 15500,
        aprasymas:
          "Parduodamas 11,5 arų namų valdos sklypas ramioje vietoje,naujai besiformuojančioje gyvenvietėje Vilniuje, K. Bradūno gatvėje. Sklypas yra taisyklingos formos. Patogus asfaltuotas privažiavimas iki gyvenvietės, prie sklypo tik 250 metrų neasfaltuoto kelio.",
        adresas: {
          regionas: regionai[7].nt(),
          rajonas: "Nekazkonys",
          miestas: "Skurdiskenai",
          gatve: "Lauzo g. 6",
          koordinates: "41.40338, 2.17403"
        },
        galerija: [
          "https://aruodas-img.dgn.lt/object_67_110289635/vilnius-bajorai-kazio-braduno-g-namu.jpg",
          "https://aruodas-img.dgn.lt/object_67_110289641/vilnius-bajorai-kazio-braduno-g-namu.jpg0",
          "https://aruodas-img.dgn.lt/object_67_110289643/vilnius-bajorai-kazio-braduno-g-namu.jpg",
        ],
        agentas: agentai[5],
        plotas: 10,
      }),
    new SklypasNuoma({
        id: 2,
        kaina: 150,
        aprasymas:
          `Išnuomojama skalda padengta aikštelė Šilagalio kaime, 
          prieš pat Panevėžį, iš karto už viaduko jungiančiu 
          kryptis į Vilnių, Šiaulius, Panevėžį-Rygą, Kauną. 
          Aikštelės plotas apie 1,7 ha, galima derėtis dėl ploto atskyrimo. 
          Aikštelė yra sutvarkyta, pagrindas padarytas, gali užvažiuoti 
          sunkiasvoris transportas, puikiai matoma vieta, planuojama 
          įrengti tvora ir stebėjimo kameros. Aikštelėje yra namas 
          su ūkiniu pastatu, kuriame galima įrengti administracines 
          patalpas. nuomos kaina 2350 + mokesčiai`,
        adresas: {
          regionas: regionai[1].nt(),
          rajonas: "Zemdirbiai",
          miestas: "Ukininkeliai",
          gatve: "Pudymu",
          koordinates: "41.40338, 2.17403"  
        },
        galerija: [
          "https://aruodas-img.dgn.lt/object_62_113450146/panevezio-r-sav-silagalio-k-ramygalos-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_113912906/panevezio-r-sav-silagalio-k-ramygalos-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_113216508/panevezio-r-sav-silagalio-k-ramygalos-g.jpg",
        ],
        agentas: agentai[4],
        plotas: 15,
      }),
    new SklypasNuoma({
        id: 6,
        kaina: 250,
        aprasymas:
          `Išnuomojama aikštelė Mokyklos g. Galgiuose, asfaltuotas privažiavimas, 
          teritorija aptverta, apšviesta, įrengtos vaizdo stebėjimo kameros, 
          kanalizacija, Biotualetas.`,
        adresas: {
          regionas: regionai[4].nt(),
          rajonas: "Zemdirbiai",
          miestas: "Ukininkeliai",
          gatve: "Pudymu",
          koordinates: "41.40338, 2.17403"
        },
        galerija: [
          "https://skelbiu-img.dgn.lt/1_22_3597338965/aikstele-asfaltas-apsviesta-aptverta-galgiai.jpg",
          "https://skelbiu-img.dgn.lt/1_22_3597338971/aikstele-asfaltas-apsviesta-aptverta-galgiai.jpg",
          "https://skelbiu-img.dgn.lt/1_22_3597338973/aikstele-asfaltas-apsviesta-aptverta-galgiai.jpg",
        ],
        agentas: agentai[2],
        plotas: 26,
      }),
    new SklypasNuoma({
        id: 7,
        kaina: 540,
        aprasymas:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore id! Labore accusantium aspernatur molestiae ratione placeat. Iusto, quae esse!",
        adresas: {
          regionas: regionai[6].nt(),
          rajonas: "Zemdirbiai",
          miestas: "Ukininkeliai",
          gatve: "Pudymu",
          koordinates: "41.40338, 2.17403"
        },
        galerija: [
          "https://aruodas-img.dgn.lt/object_62_113295574/vilnius-naujoji-vilnia-pramones-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_113295572/vilnius-naujoji-vilnia-pramones-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_113295570/vilnius-naujoji-vilnia-pramones-g.jpg",
        ],
        agentas: agentai[4],
        plotas: 46,
      }),
    new SklypasNuoma({
        id: 8,
        kaina: 280,
        aprasymas:
        `išnuomojamas 21 aro sklypas Pelėdų gatvėje. Sklypas tinkamas vigdyti prekybos ar paslaugu veikla. sklypas gerai matomas nuo intensyvaus eismo magistralinio kelio Vilnius-Molėtai-Utena A14.
        Sklype pradėtas formuoti aikšteles pagrindas.`,
        adresas: {
          regionas: regionai[5].nt(),
          rajonas: "Zemdirbiai",
          miestas: "Ukininkeliai",
          gatve: "Pudymu",
          koordinates: "41.40338, 2.17403"
        },
        galerija: [
          "https://skelbiu-img.dgn.lt/1_22_3823495460/sklypo-nuoma.jpg",
          "https://skelbiu-img.dgn.lt/1_22_3823495478/sklypo-nuoma.jpg",
        ],
        agentas: agentai[4],
        plotas: 15,
      }),
    new SklypasNuoma({
        id: 9,
        kaina: 460,
        aprasymas:
          `Puiki vieta Jūsų verslui šalia Ukmergės plento.
          Komercinėje zonoje, prie pat Vilniaus miesto ribos 
          nuomojame komercinės paskirties sklypą: visą arba jo dalį`,
        adresas: {
          regionas: regionai[0].nt(),
          rajonas: "Zemdirbiai",
          miestas: "Ukininkeliai",
          gatve: "Pudymu",
          koordinates: "41.40338, 2.17403"
        },
        galerija: [
          "https://aruodas-img.dgn.lt/object_62_113007296/vilniaus-r-sav-bukiskio-k-nesvyziaus-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_113005112/vilniaus-r-sav-bukiskio-k-nesvyziaus-g.jpg",
          "https://aruodas-img.dgn.lt/object_62_113005120/vilniaus-r-sav-bukiskio-k-nesvyziaus-g.jpg",
        ],
        agentas: agentai[1],
        plotas: 39,
      }),
];

export { sklypai };