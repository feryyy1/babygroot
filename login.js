const { Utils } = require("@mostfeatured/dbi");
const dbi = require("./dbi");

(async () => {
  await Utils.recursiveImport("./src");
  await dbi.load();
  await dbi.login();
  await dbi.client.user.setActivity({
    name: "MostFeatured ❤️ BabyGroot"
  });
  console.log(`✅ Bot giriş yaptı: ${dbi.client.user.tag}`);
})();
