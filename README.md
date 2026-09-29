# DENTSU MINI BOT

> WhatsApp × Telegram assistant bot — **by NatsuTech's Dev 🇨🇬**

[![License: MIT](https://img.shields.io/badge/License-MIT-pink.svg)](./LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E=20-brightgreen.svg)](https://nodejs.org)
[![Baileys](https://img.shields.io/badge/Baileys-7.0.0--rc14-blue.svg)](https://github.com/WhiskeySockets/Baileys)
[![Dev](https://img.shields.io/badge/Dev-NatsuTech's%20Dev-ff69b4.svg)](https://github.com/Alva-sDev242)

A feminine, fast WhatsApp bot with 400+ commands, paired and managed from Telegram.

## ✨ Features

- 🔗 Pair WhatsApp accounts via Telegram `/pair`
- 💬 400+ WhatsApp commands (download, AI, group, sticker, fun, +18, tools)
- 👮 Anti-link (`delete` / `kick` modes), anti-spam, welcome, goodbye
- 💕 Built-in love-words commands (FR + EN) — she's a bébé bot 🥹
- 🚫 Telegram `/ban` & `/broadcast` for admins
- ⁉️ Reacts to unknown commands so you always know it heard you

## 🚀 Quick start

```bash
npm install
TELEGRAM_BOT_TOKEN=xxxxx npm start
```

Then on Telegram → `/start` → `/pair <your number>`.

## 🚀 Deploy on Render

This bot uses `@whiskeysockets/baileys` 7.0.0-rc14 and runs as a
**Background Worker**, not as a web service. The included
`render.yaml` creates the worker and mounts persistent storage for the
WhatsApp sessions in `auth_info/`.

Required Render environment variables:

- `TELEGRAM_BOT_TOKEN` — token from BotFather.
- `NEXORACLE_API_KEY` — optional, used by the `gfx` logo commands.

The persistent disk is important: without it, a Render restart removes the
WhatsApp pairing sessions and the accounts must be paired again. The disk plan
may incur a Render charge.

## 📜 License

[MIT](./LICENSE) — © NatsuTech's Dev

## 🧑‍💻 Dev

- WhatsApp : +242 06 514 10 56 / +242 05 047 10 17
- Telegram : [Dploiement d'un bot](https://t.me/DPLOIEMENT_DUN_BOT2)
- GitHub   : [Alva-sDev242/dentsu-mini-bot](https://github.com/Alva-sDev242/dentsu-mini-bot)

---

> _Made with 💕 by NatsuTech's Dev_
