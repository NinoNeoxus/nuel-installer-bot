const settings = {
  token: 'YOUR_TELEGRAM_BOT_TOKEN', // token dari @BotFather

  ownerId: 123456789, // user id kamu (get dari @userinfobot)
  dev: 'your_username', // wajib username tele (tanpa @)

  dana: '08XXXXXXXXX', // nomer dana kamu
  namaDana: 'Nama Kamu', // nama akun dana

  chUsn: '@your_channel', // username channel tele kamu

  exPGroupId: "-100XXXXXXXXXX", // id group premium
  exGroupId: "-100XXXXXXXXXX", // id group biasa

  hostname: "vps", // hostname vps default
  cfApiToken: "YOUR_CLOUDFLARE_API_TOKEN", // api token cloudflare
  cfZoneId: "YOUR_CLOUDFLARE_ZONE_ID", // zone id domain cf

  apiDigitalOcean: "YOUR_DIGITALOCEAN_API_KEY", // apikey do utama

  apiDigitalOcean2: "-", // apikey do 2 (optional)

  apiDigitalOcean3: "-", // apikey do 3 (optional)

  pp: 'https://your-image-url.jpg', // url foto profil bot (dari catbox/imgbb dll)
  ppVid: 'https://your-video-url.mp4', // url video profil bot
  panel: 'https://your-panel-image.jpg', // url foto panel

  qris: 'https://your-qris-image.jpg', // url foto qris

  eggs: 15, // default eggs pterodactyl
  loc: 1,   // default location id pterodactyl
};

module.exports = settings;