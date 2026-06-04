<div align="center">

# ⚡ NUEL-INSTALLER Bot

**Bot Telegram untuk manajemen VPS, Panel Pterodactyl, dan hosting**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![Telegram Bot API](https://img.shields.io/badge/Telegram-Bot%20API-blue)](https://core.telegram.org/bots/api)

</div>

---

## 📋 Fitur

- 🖥️ **VPS Management** — Buat, kelola, dan monitor VPS DigitalOcean langsung dari Telegram
- 🦅 **Panel Pterodactyl** — Full management panel hosting (server, user, node, dll)
- 🔒 **Guard System** — Anti-spam, auto-mute, word filter untuk grup
- 🌐 **DNS Management** — Kelola subdomain via Cloudflare API
- 🤖 **Auto-Add Member** — Tambah member ke grup secara otomatis
- ⚙️ **Automation** — Jadwalkan task berulang
- 🎮 **RPG System** — Fitur RPG lengkap (shop, quest, guild, leaderboard)
- 💻 **SSH Terminal** — Akses terminal VPS langsung dari Telegram
- 📊 **CPU Monitor** — Monitor CPU usage VPS secara real-time
- 🔄 **Auto-Update** — Update bot dari GitHub otomatis
- 🎫 **Redeem Code** — Sistem kode redeem untuk user
- 👑 **Multi-Owner** — Support multiple admin/owner

---

## 🚀 Cara Install

### Prasyarat

- Node.js 18+
- npm
- VPS/server untuk hosting bot

### 1. Clone Repository

```bash
git clone https://github.com/NinoNeoxus/nuel-installer-bot.git
cd nuel-installer-bot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi

Salin file konfigurasi contoh:

```bash
cp config.js config.js.bak  # opsional, untuk backup
```

Edit file `config.js` dan isi dengan data kamu:

```javascript
const settings = {
  token: 'TOKEN_BOT_TELEGRAM_KAMU',  // dari @BotFather
  ownerId: 123456789,                 // User ID kamu (dari @userinfobot)
  dev: 'username_kamu',              // Username Telegram kamu
  
  // ... isi semua field lainnya
};
```

Edit file `config.secret.js` dan isi dengan data rahasia:

```javascript
const _DEFAULT_CONFIG = {
  _ghp: 'GITHUB_PERSONAL_ACCESS_TOKEN_KAMU',  // dari github.com/settings/tokens
  _repo: 'username/nama-repo',                 // repo GitHub bot kamu
  // ...
};

const _DEV_IDS = ['TELEGRAM_USER_ID_KAMU'];
```

### 4. Setup Database

Database disimpan di folder `db/`. File-file JSON akan dibuat otomatis saat bot pertama kali dijalankan. Tidak perlu setup manual.

Jika mau mulai dari awal, pastikan folder `db/` ada:

```bash
mkdir -p db/users/version db/rpg
```

### 5. Jalankan Bot

```bash
npm start
```

Atau pakai nodemon untuk development:

```bash
npm run dev
```

---

## ⚙️ Konfigurasi Lengkap

### `config.js` — Konfigurasi Utama

| Key | Deskripsi |
|-----|-----------|
| `token` | Token bot dari @BotFather |
| `ownerId` | Telegram User ID owner utama |
| `dev` | Username Telegram dev (tanpa @) |
| `dana` | Nomor DANA untuk pembayaran |
| `cfApiToken` | API Token Cloudflare |
| `cfZoneId` | Zone ID domain di Cloudflare |
| `apiDigitalOcean` | API Key DigitalOcean |
| `eggs` | Default eggs Pterodactyl |
| `loc` | Default location ID Pterodactyl |

### `config.secret.js` — Konfigurasi Rahasia

| Key | Deskripsi |
|-----|-----------|
| `_DEV_IDS` | Array Telegram User ID developer |
| `_ghp` | GitHub Personal Access Token |
| `_repo` | Repository GitHub untuk bot |
| `_updateRepo` | Repository untuk auto-update |

---

## 📁 Struktur Folder

```
nuel-installer-bot/
├── nuel-installer.js    # Entry point utama
├── start.js             # Sistem & handler awal
├── config.js            # Konfigurasi utama (edit ini!)
├── config.secret.js     # Konfigurasi rahasia (edit ini juga!)
├── package.json
├── menu/                # Semua modul fitur
│   ├── install.js       # Fitur install panel/domain
│   ├── panel.js         # Panel management
│   ├── guard.js         # Sistem guard grup
│   ├── rpg/             # Modul RPG
│   └── ...
├── lib/                 # Library helper
│   ├── function.js      # Helper functions
│   ├── license.js       # License system
│   └── ...
└── db/                  # Database JSON (auto-generated)
    ├── users/           # Data user
    └── ...
```

---

## 🤖 Perintah Bot

### Owner Commands
- `/menu` — Menu utama owner
- `/addprem <id>` — Tambah user premium
- `/delprem <id>` — Hapus user premium
- `/addowner <id>` — Tambah admin
- `/listuser` — List semua user
- `/settoken <token>` — Set token GitHub
- `/broadcast <pesan>` — Broadcast ke semua user

### VPS Commands
- `/addvps <ip> <pass>` — Tambah VPS
- `/listvps` — List semua VPS
- `/delvps <ip>` — Hapus VPS
- `/srvinfo <ip>` — Info server
- `/terminal <ip>` — SSH terminal

### Panel Commands
- `/panel` — Dashboard panel
- `/panelservers` — List server
- `/panelusers` — List user panel
- `/addserver` — Tambah server baru

### DNS Commands
- `/adddomain <subdomain>` — Tambah subdomain
- `/deldomain <subdomain>` — Hapus subdomain
- `/listdomain` — List subdomain

### RPG Commands
- `/rpg` — Menu RPG
- `/shop` — Toko item
- `/quest` — Daftar quest
- `/guild` — Info guild
- `/leaderboard` — Papan peringkat

---

## 🔧 Troubleshooting

**Bot tidak mau start:**
- Pastikan token bot di `config.js` benar
- Cek apakah Node.js sudah terinstall: `node --version`

**Error "cannot find module":**
```bash
npm install
```

**Error GitHub verification:**
- Isi `_ghp` di `config.secret.js` dengan GitHub token yang valid
- Atau edit `nuel-installer.js` untuk skip verifikasi (uncomment bagian yang diperlukan)

---

## 📝 Lisensi

MIT License — bebas digunakan, dimodifikasi, dan didistribusikan. Lihat [LICENSE](LICENSE) untuk detail.

---

## 👨‍💻 Author

**@schnufle** — Original Developer

---

<div align="center">
⭐ Kalau project ini berguna, jangan lupa kasih star ya!
</div>
