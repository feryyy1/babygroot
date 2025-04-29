const { Utils } = require("@mostfeatured/dbi");
const dbi = require("./dbi");

(async () => {
  await Utils.recursiveImport("./src"); // src/ klasöründeki tüm komut ve eventleri yükler
  await dbi.load(); // botu yükler
  await dbi.login(); // botu Discord'a bağlar
})();
