/*
┏━━━━━━━━━━━━━━━┓
┃  DENTSU MINI BOT
┣━━━━━━━━━━━━━━━┛
┃whatsapp : +242065141056
┃owner : DENTSU MINI BOT
┃Dev : NatsuTech's Dev 🇨🇬
┗━━━━━━━━━━━━━━━┛
*/

const config = require("./config");

function uptime(sec) {
  sec = Math.floor(sec);
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return `${h}h ${m}m ${s}s`;
}

// ── Sections du menu WhatsApp ──────────────────────────────────
const SECTIONS = [
  { icon: "👑💕", name: "OWNER", items: [
    "setpp","owner","repo","ban","unban","block","unblock","alive","pair",
    "ping","speed","runtime","self","public","approveall","rejectall",
  ]},
  { icon: "📥🌸", name: "DOWNLOAD", items: [
    "play","play2","song","vv","vv2","tiktok","tt","toimg","ytsearch","yts",
    "spotify","movie","tomp3","tomp4","tourl","url","apk","mediafire",
    "pdftotext","qrcode","shorturl","say","bible","fb","facebook",
    "ytmp4","ytmp3","video","instagram","ig","gitclone","aiimg",
  ]},
  { icon: "👥💖", name: "GROUP", items: [
    "hidetag","htag","tagall","demote","promote","mute","unmute","open","close",
    "join","kick","left","add","creategroup","resetlink","pair","tag",
    "listadmins","listonline","closetime","opentime","antilink","grouplink",
    "kickadmins","kickall","welcome","hijack",
  ]},
  { icon: "🖼🌷", name: "EPHOTO", items: [
    "glitchtext","writetext","advancedglow","typographytext","pixelglitch",
    "neonglitch","flagtext","flag3dtext","deletingtext","blackpinkstyle",
    "glowingtext","underwatertext","logomaker","cartoonstyle","papercutstyle",
    "watercolortext","effectclouds","blackpinklogo","gradienttext","summerbeach",
    "luxurygold","multicoloredneon","sandsummer","galaxywallpaper","style1917",
    "makingneon","royaltext","freecreate","galaxystyle","createlogo","lighteffects",
  ]},
  { icon: "🌸💗", name: "STICKER", items: [
    "sticker","cry","kill","hug","happy","dance","handhold","highfive","slap",
    "kiss","blush","bite","cuddle","furbrat","shinobu","bonk","pat","nom",
  ]},
  { icon: "🎨🌹", name: "LOGO", items: [
    "gfx","gfx2","gfx3","gfx4","gfx5","gfx6","gfx7","gfx8","gfx9","gfx10","gfx11","gfx12",
  ]},
  { icon: "🤖💞", name: "AI", items: [
    "ai","gpt","gpt4","openai","xxai","chatgpt","bot","ask","natsu",
  ]},
  { icon: "🎮🌺", name: "PLAYER", items: [
    "rps","guess","coin","dice","hangman","tictactoe",
  ]},
  { icon: "🗣️💕", name: "VOICE", items: [
    "bass","blown","earrape","deep","fast","nightcore","reverse","robot","slow","smooth","squirrel",
  ]},
  { icon: "🌻💛", name: "ADVER", items: [
    "8ball","trivia","joke","truth","dare","meme","advice","urban","moviequote",
    "funfact","dog","cat","fact","coffee",
  ]},
  { icon: "🔞❤️‍🔥", name: "+18", items: [
    "hentai","waifu","neko","trap","blowjob","paptt",
  ]},
  { icon: "ℹ️🌼", name: "TOOL / HELP", items: [
    "idch","react-ch","jid","dictionary","getpp","wiki","aiimg","qc","readqr",
    "genpass","myip","iplookup","currency","time","recipe","horoscope","book",
    "remind","mathfact","sciencefact","calculate","weather",
  ]},
];

// ── Sections du menu TELEGRAM (ordonnées proprement) ───────────
const TG_SECTIONS = [
  { icon: "💞", name: "ᴡʜᴀᴛsᴀᴘᴘ ᴄᴏɴɴᴇᴄᴛɪᴏɴ", items: [
    "/pair 242xxxxxx",
    "/delpair 242xxxxxx",
    "/howtouse",
    "/checkdevice",
  ]},
  { icon: "🌷", name: "INFO", items: [
    "/ping",
    "/runtime",
    "/getmyid",
    "/owner",
  ]},
  { icon: "👑", name: "ADMIN", items: [
    "/ban 242xxxx [n]",
    "/broadcast <msg>",
    "/listpair",
  ]},

];

// ── Fusionne SECTIONS statiques + REGISTRY dynamique ───────────
// Toutes les commandes du REGISTRY (commands.js + commands_extra.js)
// sont ajoutées automatiquement dans la bonne catégorie pour que
// le menu WhatsApp liste les 400+ commandes sans rien oublier.
const CATEGORY_TO_SECTION = {
  OWNER: "OWNER", DOWNLOAD: "DOWNLOAD", GROUP: "GROUP",
  EPHOTO: "EPHOTO", STICKER: "STICKER", LOGO: "LOGO",
  AI: "AI", PLAYER: "PLAYER", VOIX: "VOICE", VOICE: "VOICE",
  ADVER: "ADVER", "+18": "+18", TOOL: "TOOL / HELP",
  LOVE: "LOVE",
};
function mergedSections() {
  let CATS = {};
  let REG = {};
  try { CATS = require("./commands").CATEGORIES || {}; REG = require("./commands").REGISTRY || {}; } catch {}
  try { require("./commands_extra"); CATS = require("./commands").CATEGORIES || CATS; REG = require("./commands").REGISTRY || REG; } catch {}
  const BUILTIN = new Set([
    "menu","help","list","ping","alive","runtime","uptime","infobot","owner",
    "play","song","ytmp3","video","ytmp4","tiktok","facebook","instagram","twitter",
    "ai","gpt","gemini","img","wallpaper","sticker","s","getpp",
    "tagall","hidetag","tagadmin","getalladmins","groupinfo",
    "promote","demote","kick","mute","unmute","open","close","grouplink",
    "weather","translate","lyrics","broadcast","bc","join","leave","block","unblock",
  ]);
  const REAL = (name) => BUILTIN.has(name) || !!REG[name];
  const out = SECTIONS.map((s) => ({ ...s, items: s.items.filter(REAL) }));
  for (const [cat, cmds] of Object.entries(CATS)) {
    const sectionName = CATEGORY_TO_SECTION[cat] || cat;
    const sec = out.find((s) => s.name === sectionName);
    if (!sec) { out.push({ icon: "🌸", name: sectionName, items: [...new Set(cmds)] }); continue; }
    const seen = new Set(sec.items);
    for (const c of cmds) if (!seen.has(c)) { sec.items.push(c); seen.add(c); }
  }
  // Global dedupe: a command appears in only ONE section (first occurrence wins)
  // and is sorted alphabetically inside its section.
  const seenGlobal = new Set();
  for (const s of out) {
    const uniq = [];
    for (const c of s.items) {
      if (seenGlobal.has(c)) continue;
      seenGlobal.add(c);
      uniq.push(c);
    }
    s.items = uniq.sort((a, b) => a.localeCompare(b));
  }
  return out.filter((s) => s.items.length > 0);
}

function totalCommands() {
  const set = new Set();
  for (const s of mergedSections()) for (const c of s.items) set.add(c);
  return set.size;
}

function buildTelegramMenu() {
  const head =
`╔══✦ 🌸 ᴅᴇɴᴛsᴜ ᴍɪɴɪ ʙᴏᴛ 🌸 ✦══╗
║ 👨‍💻 Dev  : N̷a̷t̷s̷u̷ T̷e̷c̷h̷
║ 💖 Mode  : Public
╚══════════════════════╝`;

  const body = TG_SECTIONS.map((s) => {
    const lines = s.items.map((c) => `│ ✦ ${c}`).join("\n");
    return `╭─❒ 「 ${s.icon} ${s.name} 」 ❒─╮\n${lines}\n╰──────────────────╯`;
  }).join("\n\n");

  return `${head}\n\n${body}\n\n💕 .`;
}

// WhatsApp menu — vertical layout (1 command per line, "debout pas couché"),
// chunked to respect WhatsApp's ~4096 char message limit.
function buildWaMenu({ user = "User" } = {}) {
  const date = new Date().toLocaleString("en-US", { timeZone: "Africa/Brazzaville" });
  const platform = process.platform === "linux" ? "Linux" : process.platform;
  const header =
`╔══✦ ᴅᴇɴᴛsᴜ ᴍɪɴɪ ʙᴏᴛ  ✦══╗
║ 🌹 *ᴜsᴇʀ*     : ${user}
║ ⚡ *ᴍᴏᴅᴇ*     : Public 
║ 📡 *ᴘʟᴀᴛғᴏʀᴍ* : ${platform}
║ ⚙️ *ᴘʀᴇғɪx*   : Multi prfix
║ 👨‍💻 *ᴅᴇᴠ*      : N̷a̷t̷s̷u̷ T̷e̷c̷h̷
║ ⏱️ *ᴜᴘᴛɪᴍᴇ*   : ${uptime(process.uptime())}
║ 📅 *ᴅᴀᴛᴇ*     : ${date}
╚══════════════════════╝`;

  const footer = `\n\n💕 © Developed by ${config.DEV}`;

  // Render every section as a vertical list (one command per line).
  const blocks = mergedSections().map((s) => {
    const lines = s.items.map((c) => `┃ ✦ ${config.PREFIX}${c}`).join("\n");
    return `╭━━〔 ${s.icon} *${s.name}* 〕━━╮\n${lines}\n╰━━━━━━━━━━━━━━╯`;
  });

  // SINGLE message: image + full caption, no pagination, no split.
  return header + "\n\n" + blocks.join("\n\n") + footer;
}

module.exports = { buildTelegramMenu, buildWaMenu, uptime, SECTIONS: mergedSections() };
