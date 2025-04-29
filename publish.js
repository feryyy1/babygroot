const dbi = require("./dbi");

(async () => {
  await dbi.load();
  await dbi.publish();
  console.log("✅ Slash komutları yüklendi.");
})();
