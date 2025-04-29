const { Utils } = require("@mostfeatured/dbi");
const dbi = require("./dbi");

(async () => {
  await Utils.recursiveImport("./src");
  await dbi.load();
  const client = await dbi.login();

  // client burada kesinlikle hazır
  client.user.setActivity({
    name: "MostFeatured ❤️ BabyGroot",
    type: "PLAYING"
  });

  console.log(`✅ Bot giriş yaptı: ${client.user.tag}`);
})();

