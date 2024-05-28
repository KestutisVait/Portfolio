import { Sodyba, SodybaNuoma } from "../klases/sodyba.js";
import { agentai } from "./agentai.js";
import { regionai } from "./regionai.js";

let sodybaObjektai = [
  new Sodyba({
    id: 1,
    kaina: 610000,
    aprasymas:
      "PARDUODAMA IŠSKIRTINĖ AUTENTIŠKA SODYBA SU IŠPUOSELĖTA PRIVAČIA TERITORIJA ASVEJOS REGIONINIAME PARKE PRIE ASVEJOS EŽERO. IDEALUS VARIANTAS ŽMONĖMS IEŠKANTIEMS SODYBOS BESIRIBOJANČIOS SU EŽERO PAKRANTE ATOKIAU NUO MIESTO ŠURMULIO IR VERTINANTIEMS PRIVATUMĄ.",
    adresas: {
      regionas: regionai[0].nt(),
      rajonas: "Vilniaus",
      miestas: "Vilnius",
      gatve: "Vilniaus g. 10"
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_112722757/vilniaus-r-sav-suzioniu-k.jpg",
      "https://aruodas-img.dgn.lt/object_62_112722763/vilniaus-r-sav-suzioniu-k.jpg",
      "https://aruodas-img.dgn.lt/object_62_112722761/vilniaus-r-sav-suzioniu-k.jpg",
    ],
    agentas: agentai[0],
    patalpu_plotas: "167 m²",
    aukstu_sk: 2,
    kambariu_sk: 4,
    sklypo_plotas: "106,56 a",
  }),
  new Sodyba({
    id: 2,
    kaina: 29000,
    aprasymas:
      "Parduodama tvarkinga, ramioje, jaukioje vietoje, miestelio pakraštyje, esanti sodyba, iki Viešintų ežero vos apie 500metrų, kieme erdvus ūkinis pastatas bei du garažai. Pirmame sodybos aukšte yra 3 erdvūs kambariai, virtuvė, bei plastikiniais langais įstiklina veranda. Sodyba šilta, ilgai išlaikanti šilumą viduje. Antras aukštas vasarnamio tipo, tačiau lengvai galima paversti gyvenama patalpa. Parduodama be tarpininkų. Iki Anykščių miesto vos 20km.",
    adresas: {
      regionas: regionai[6].nt(),
      rajonas: "Anykščių",
      miestas: "Viešintai",
      gatve: "Vilniaus g. 20"
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_114245132/anyksciu-r-sav-viesintu-mstl-paezerio-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_114245138/anyksciu-r-sav-viesintu-mstl-paezerio-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_109004971/anyksciu-r-sav-viesintu-mstl-paezerio-g.jpg",
    ],
    agentas: agentai[1],
    patalpu_plotas: "110 m²",
    aukstu_sk: 1,
    kambariu_sk: 4,
    sklypo_plotas: "37 a",
  }),
  new Sodyba({
    id: 3,
    kaina: 562700,
    aprasymas:
      "Parduodama išpuoselėta sodyba švenčių organizavimo verslui vystyti.",
    adresas: {
      regionas: regionai[0].nt(),
      rajonas: "Elektrėnų",
      miestas: "Elektrėnai",
      gatve: "Šiaulių g. 10"
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_114314128/elektrenu-sav-balandiskiu-k.jpg",
      "https://aruodas-img.dgn.lt/object_62_114314140/elektrenu-sav-balandiskiu-k.jpg",
      "https://aruodas-img.dgn.lt/object_62_114314146/elektrenu-sav-balandiskiu-k.jpg",
    ],
    agentas: agentai[2],
    patalpu_plotas: "469,32 m²",
    aukstu_sk: 2,
    kambariu_sk: 10,
    sklypo_plotas: "723 a"
  }),
  new Sodyba({
    id: 4,
    kaina: 83000,
    aprasymas:
      "Nuostabiame gamtos kampelyje, Gegužinės kaime, parduodama prižiūrėta sodyba su jai priklausančiais pastatais ir besiribojančiu miško sklypu. Sodyboje dominuoja privatumas, o užuovėją sukuria aplink augantys medžiai, Neries upė ir sodybos teritorijoje esantis Bošės upelis. Karštomis vasaros dienomis aplink namą įrengtos pavėsinės leis mėgautis vasariškais gamtos kvapais ir nerūpestingu poilsiu.",
    adresas: {
      regionas: regionai[5].nt(),
      rajonas: "Kaišiadorių",
      miestas: "Kaunas",
      gatve: "Jonavos g. 4"
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_111570516/kaisiadoriu-r-sav-geguzines-k-jonavos-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_111570510/kaisiadoriu-r-sav-geguzines-k-jonavos-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_111570530/kaisiadoriu-r-sav-geguzines-k-jonavos-g.jpg",
    ],
    agentas: agentai[3],
    patalpu_plotas: "75 m²",
    aukstu_sk: 1,
    kambariu_sk: 2,
    sklypo_plotas: "58,3 a"
  }),
  new Sodyba({
    id: 5,
    kaina: 95000,
    aprasymas:
      "Parduodama prižiūrėta, erdvi sodyba Klausučių gyvenvietėje, ramioje Pikčiūnų gatvėje, Jurbarko r. Asfaltuotas privažiavimas iki pat sklypo. Nuo Kauno  apie 48 km. t. y. Kauną ir Jurbarką jungiančio (vieno iš gražiausių Lietuvos kelių) pusiaukelė.",
    adresas: {
      regionas: regionai[4].nt(),
      rajonas: "Jurbarko",
      miestas: "Jurbarkas",
      gatve: "Pikčiūnų g. 10"
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_113520584/jurbarko-r-sav-klausuciu-k-pikciunu-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_113520566/jurbarko-r-sav-klausuciu-k-pikciunu-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_113649132/jurbarko-r-sav-klausuciu-k-pikciunu-g.jpg",
    ],
    agentas: agentai[4],
    patalpu_plotas: "219,03 m²",
    aukstu_sk: 2,
    kambariu_sk: 5,
    sklypo_plotas: "34,21 a"
  }),
  new SodybaNuoma({
    id: 6,
    kaina: 800,
    aprasymas:
      "Nuomojama jauki sodyba įsikūrusi gamtos apsuptyje ant Kiemento ežero kranto. Vos 35 km iki Vilniaus.",
    adresas: {
      regionas: regionai[6].nt(),
      rajonas: "Molėtų",
      miestas: "Giedraičiai",
      gatve: "Kauno g. 4"
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_97952381/moletu-r-sav-giedraiciu-mstl.jpg",
      "https://aruodas-img.dgn.lt/object_62_97953035/moletu-r-sav-giedraiciu-mstl.jpg",
      "https://aruodas-img.dgn.lt/object_62_97952965/moletu-r-sav-giedraiciu-mstl.jpg",
    ],
    agentas: agentai[5],
    patalpu_plotas: "250 m²",
    aukstu_sk: 2,
    kambariu_sk: 4,
    sklypo_plotas: "100 a"
  }),
  new SodybaNuoma({
    id: 7,
    kaina: 1200,
    aprasymas:
      "NUOMUOJAMA PUIKIAI ĮRENGTA SODYBA PRIE ASVĖJOS EŽERO. Sodyba tinka gyvenimui ir kaimo turizmui.",
    adresas: {
      regionas: regionai[6].nt(),
      rajonas: "Molėtų",
      miestas: "Molėtai",
      gatve: "Giedraičių g. 94"
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_67516099/moletu-r-sav-miezoniu-k-giedraiciu-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_67516107/moletu-r-sav-miezoniu-k-giedraiciu-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_67516065/moletu-r-sav-miezoniu-k-giedraiciu-g.jpg",
    ],
    agentas: agentai[6],
    patalpu_plotas: "156 m²",
    aukstu_sk: 2,
    kambariu_sk: 3,
    sklypo_plotas: "1350 a"
  }),
  new SodybaNuoma({
    id: 8,
    kaina: 400,
    aprasymas:
      "Miške ilgesniam laikui išnuomojama autentišką sodyba, aukštos lubos, pečiai puikiai veikia, su šaltiniuotu tvenkinių, vanduo itin skaidrus, ant jo kranto stovi svirnas 45kv, pastatų stogai betono čerpės, kaimynai už 1km, iki asfaltuoto kelio 2km, išskirtinė vieta, puikiai tinka poilsiui.",
    adresas: {
      regionas: regionai[6].nt(),
      rajonas: "Anykščių",
      miestas: "Anykščiai",
      gatve: "Grikiapelių g. 5"
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_111294753/anyksciu-r-sav-grikiapeliu-k.jpg",
      "https://aruodas-img.dgn.lt/object_62_111294699/anyksciu-r-sav-grikiapeliu-k.jpg",
      "https://aruodas-img.dgn.lt/object_62_111294701/anyksciu-r-sav-grikiapeliu-k.jpg",
    ],
    agentas: agentai[7],
    patalpu_plotas: "100 m²",
    aukstu_sk: 1,
    kambariu_sk: 2,
    sklypo_plotas: "156 a"
  }),
  new SodybaNuoma({
    id: 9,
    kaina: 4000,
    aprasymas:
      "Prestižinis namas pušyno apsuptyje Antakalnyje, šalia Sapiegų parko! Maloniai lauksime besidominčių nuomininkų, skambinkite Jums patogiu metu.",
    adresas: {
      regionas: regionai[0].nt(),
      rajonas: "Vilniaus",
      miestas: "Vilnius",
      gatve: "Liepų g. 48"
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_114044220/vilnius-antakalnis-kankliu-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_114044222/vilnius-antakalnis-kankliu-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_114044242/vilnius-antakalnis-kankliu-g.jpg",
    ],
    agentas: agentai[0],
    patalpu_plotas: "281 m²",
    aukstu_sk: 2,
    kambariu_sk: 6,
    sklypo_plotas: "18,10 a"
  }),
  new SodybaNuoma({
    id: 10,
    kaina: 725,
    aprasymas:
      "Jaukus ir šiltas 56 kv.m. sublokuotas namas Šilainiuose, strategiškai patogioje vietoje. Puikiai tiks tiems, kurie ieško ilgalaikės nuomos būsto su baldais ir visais patogumais.",
    adresas: {
      regionas: regionai[5].nt(),
      rajonas: "Kauno",
      miestas: "Kaunas",
      gatve: "Mosėdžio g. 15"
    },
    galerija: [
      "https://aruodas-img.dgn.lt/object_62_114434268/kaunas-silainiai-mosedzio-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_114434270/kaunas-silainiai-mosedzio-g.jpg",
      "https://aruodas-img.dgn.lt/object_62_114434274/kaunas-silainiai-mosedzio-g.jpg",
    ],
    agentas: agentai[2],
    patalpu_plotas: "56 m²",
    aukstu_sk: 1,
    kambariu_sk: 3,
    sklypo_plotas: "1,70 a"
  }),
];

export { sodybaObjektai };
