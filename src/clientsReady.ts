import dbi from "../../dbi";
import { Client } from "discord.js";

export default {
  name: "clientsReady",
  async execute() {
    const client = dbi.client as Client;

    client.user?.setActivity({
      name: "MostFeatured ❤️ BabyGroot",
      type: "PLAYING"
    });

    console.log(`✅ Bot hazır: ${client.user?.tag}`);
  }
};
