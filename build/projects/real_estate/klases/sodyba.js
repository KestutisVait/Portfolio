import { Namas, NamasNuoma } from "./namas.js";

class Sodyba extends Namas {
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
  }
}
class SodybaNuoma extends NamasNuoma {
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
}
export { Sodyba, SodybaNuoma };
