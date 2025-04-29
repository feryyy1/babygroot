const { createDBI } = require("@mostfeatured/dbi");

const dbi = createDBI("babygroot", {
  strict: true,
  discord: {
    token: process.env.TOKEN,
    options: {
      intents: ["Guilds", "GuildMessages", "MessageContent"]
    }
  },
  defaults: {
    locale: { name: "tr" },
    directMessages: false
  },
  messageCommands: {
    prefixes: ["!", "."]
  }
});

module.exports = dbi;
