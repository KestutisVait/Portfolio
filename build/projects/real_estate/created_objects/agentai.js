import { Agentas } from "../klases/agentas.js";
import { regionai } from "./regionai.js";
const foto_agentas = ["../../img/agentai/agentas_profile.jpg"];
/**
 * array with agentai objects
 */
const agentai = [];

agentai.push( new Agentas(1, "Jonas", "Jonaitis", "./img/agentai/JonasJonaitis.jpg",
                            `Jonas turi 10 metu darbo patirties nekilnojamo turto rinkoje. Jis yra 32 metu ir pasizymi itin gerais bendravimo igudziais.`,
                            regionai[0].nt())
            );
agentai.push( new Agentas(2, "Daiva", "Varniene", "./img/agentai/DaivaVarniene.jpg",
                            `Daiva puikiai gaudosi nekilnojamo turto rinkoje. Klientu atsiliepimai apie ja yra kuo puikiausi.`,
                            regionai[3].nt())
            );
agentai.push( new Agentas(3, "Vilius", "Kesminas", "./img/agentai/ViliusKesminas.jpg",
                            `Vilius baige VU verslo vadybos studijas. Vilius pardavimu virtuozas ir ja nebaisus jokie NT issukiai.`,
                            regionai[4].nt())
            );
agentai.push( new Agentas(4, "Bartas", "Simpsonas", "./img/agentai/BartasSimpsonas.jpg",
                            `Bartas daug metu dirbo uzsionio NT rinkose ir yra sukaupes labai daug patirties. Jis moka keleta uzsienio kalbu.`,
                            regionai[1].nt())
            );
agentai.push( new Agentas(5, "Birute", "Vaidilute", "./img/agentai/BiruteVaidilute.jpg",
                            `Birute yra tradiciju puoseletoja. Ji puikiai moka bendrauti su vyresnio amziaus klientais.`,
                            regionai[2].nt())
            );
agentai.push( new Agentas(6, "Linas", "Laimontas", "./img/agentai/LinasLaimontas.jpg",
                            `Linas specializuojasi pramominiu objektu rinkoje. Jis yra su kaupe ilgamete patirti  butent tokiu NT objektu srityje`,
                            regionai[5].nt())
            );
agentai.push( new Agentas(7, "Rokas", "Nejokaitis", "./img/agentai/RokasNejokaitis.jpg",
                            `Rokas yra jaunas agentas, bet tai jam netrugdo buti pirmose pozicijose pardavimu lenktynese. Rokas yra Verzlus ir ambicingas agentas. `,
                            regionai[6].nt())
            );
agentai.push( new Agentas(8, "Jolanta", "Jakyte", "./img/agentai/JolantaJakyte.jpg",
                            `Jolantos zinios apie NT rinka yra tikrai placios. Jolanta klientams visada sugeba pasiulyti kazka isskirtinio`,
                            regionai[7].nt())
            );
export {agentai}
