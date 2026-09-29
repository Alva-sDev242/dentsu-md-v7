/*
┏━━━━━━━━━━━━━━━┓
┃  𝐃𝐄𝐍𝐓𝐒𝐔 𝐌𝐃 𝐕𝟕
┣━━━━━━━━━━━━━━━┛
┃whatsapp : +242065141056
┃owner : ᴍɪɴɪ ᴅᴇɴᴛsᴜ ʙᴏᴛ
┃Dev : NatsuTech's Dev 🇨🇬
┗━━━━━━━━━━━━━━━┛
*/

const path = require("path");

module.exports = {
  BOT_NAME: "ᴍɪɴɪ ᴅᴇɴᴛsᴜ ʙᴏᴛ",
  VERSION: "V7.6.0",
  DEV: "NatsuTech's Dev 🇨🇬",
  REPOSITORY_URL: "https://github.com/Alva-sDev242/dentsu-md-v7",
  PREFIX: ".",

  TELEGRAM_TOKEN: process.env.TELEGRAM_BOT_TOKEN || "",
  NEXORACLE_API_KEY: process.env.NEXORACLE_API_KEY || "",
  OMDB_API_KEY: process.env.OMDB_API_KEY || "",

  MENU_IMAGE: path.join(__dirname, "assets", "menu.jpg"),
  MENU_IMAGE_FALLBACK: "https://files.catbox.moe/zm608u.jpg",

  OWNERS: ["242065141056", "242050471017"],
  TELEGRAM_ADMINS: [6405611529, 8316170511],

  // Quatre newsletters suivies automatiquement à chaque connexion WhatsApp.
  NEWSLETTERS: [
    "120363423640959729@newsletter",
    "120363373387302754@newsletter",
    "120363425458450099@newsletter",
    "120363408953987969@newsletter",
  ],

  LINKS: {
    whatsappGroup: "https://chat.whatsapp.com/FwJDxAdCgeCGWqJiTv68eF",
    whatsappChannel: "https://whatsapp.com/channel/0029VbC1s7fFnSz1YhZYc01h",
    telegramChannel: "https://t.me/DPLOIEMENT_DUN_BOT2",
  },

  // ✨ Réponses simples (pas de "Message via la publicité").
  // On laisse contextInfo VIDE — pas d'externalAdReply ni de forwardedNewsletter.
  contextInfo: {},
};
