const { Utils } = require("@mostfeatured/dbi");
const dbi = require("./dbi");

(async () => {
  await Utils.recursiveImport("./src");
  await dbi.load();
  await dbi.login();

  dbi.events.ready(() => {
    dbi.client.user.setActivity({
      name: "MostFeatured ❤️ BabyGroot",
      type: "PLAYING"
    });

    console.log(`✅ Bot giriş yaptı: ${dbi.client.user.tag}`);
  });
})();
