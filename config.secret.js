/**
 * ═══════════════════════════════════════════════════════════════════════════════════════
 *  🔐 NUEL-INSTALLER BOT - SECRET CONFIGURATION v1.0
 *  
 *  File ini berisi konfigurasi rahasia bot.
 *  Salin file ini ke config.secret.js dan isi dengan nilai yang benar.
 *  JANGAN commit config.secret.js ke Git!
 *  
 *  @author @NUEL-INSTALLER
 *  @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════════════════
 */

const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════════════════════════
// DEV IDS - Isi dengan Telegram User ID kamu
// ═══════════════════════════════════════════════════════════════════════════════
const _DEV_IDS = [
    'YOUR_TELEGRAM_USER_ID'  // Ganti dengan user ID kamu (get dari @userinfobot)
];

// ═══════════════════════════════════════════════════════════════════════════════
// DEFAULT CONFIG
// ═══════════════════════════════════════════════════════════════════════════════
const _DEFAULT_CONFIG = {
    // GitHub Personal Access Token (untuk auto-update dari repo kamu)
    // Buat di: https://github.com/settings/tokens
    _ghp: 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN',

    // GitHub Repository untuk update bot
    // Format: 'username/nama-repo'
    _repo: 'YOUR_GITHUB_USERNAME/YOUR_REPO_NAME',

    // Path file token di dalam repo (jika pakai sistem validasi)
    _path: 'token',

    // Raw GitHub URL base (jangan diubah)
    _raw: 'https://raw.githubusercontent.com',

    // Update repository (bisa sama dengan _repo)
    _updateRepo: 'YOUR_GITHUB_USERNAME/YOUR_REPO_NAME',

    // License check interval (ms) - default 1 jam
    _checkInterval: 3600000,

    // Encryption key untuk fitur premium (ganti dengan string random kamu)
    _encKey: 'YOUR_RANDOM_ENCRYPTION_KEY_HERE',

    // Version signature
    _sig: 'v1.0-nuel-installer'
};

// ═══════════════════════════════════════════════════════════════════════════════
// DYNAMIC CONFIG FILE (bisa diubah via /dev menu)
// ═══════════════════════════════════════════════════════════════════════════════
const _CONFIG_FILE = path.join(__dirname, 'db', '.dev_config.json');

function _loadConfig() {
    try {
        if (fs.existsSync(_CONFIG_FILE)) {
            const saved = JSON.parse(fs.readFileSync(_CONFIG_FILE, 'utf8'));
            return { ..._DEFAULT_CONFIG, ...saved };
        }
    } catch (e) {
        console.log('[SECRET] Error loading config, using defaults');
    }
    return { ..._DEFAULT_CONFIG };
}

function _saveConfig(newConfig) {
    try {
        const dirPath = path.dirname(_CONFIG_FILE);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        const toSave = {};
        for (const key in newConfig) {
            if (newConfig[key] !== _DEFAULT_CONFIG[key]) {
                toSave[key] = newConfig[key];
            }
        }

        fs.writeFileSync(_CONFIG_FILE, JSON.stringify(toSave, null, 2));
        return true;
    } catch (e) {
        console.error('[SECRET] Error saving config:', e.message);
        return false;
    }
}

function isDev(userId) {
    return _DEV_IDS.includes(String(userId));
}

function getDevIds() {
    return [..._DEV_IDS];
}

function getToken() {
    const config = _loadConfig();
    return config._ghp;
}

function setToken(newToken) {
    const config = _loadConfig();
    config._ghp = newToken;
    return _saveConfig(config);
}

function getRepo() {
    const config = _loadConfig();
    return config._repo;
}

function setRepo(newRepo) {
    const config = _loadConfig();
    config._repo = newRepo;
    return _saveConfig(config);
}

function getPath() {
    const config = _loadConfig();
    return config._path;
}

function setPath(newPath) {
    const config = _loadConfig();
    config._path = newPath;
    return _saveConfig(config);
}

function getRawUrl() {
    const config = _loadConfig();
    return config._raw;
}

function setRawUrl(newUrl) {
    const config = _loadConfig();
    config._raw = newUrl;
    return _saveConfig(config);
}

function getUpdateRepo() {
    const config = _loadConfig();
    return config._updateRepo;
}

function setUpdateRepo(newRepo) {
    const config = _loadConfig();
    config._updateRepo = newRepo;
    return _saveConfig(config);
}

function getAllConfig() {
    return _loadConfig();
}

function resetConfig() {
    try {
        if (fs.existsSync(_CONFIG_FILE)) {
            fs.unlinkSync(_CONFIG_FILE);
        }
        return true;
    } catch (e) {
        return false;
    }
}

function getLicense() {
    const config = _loadConfig();
    return {
        githubToken: config._ghp,
        githubRepo: config._repo,
        githubPath: config._path
    };
}

module.exports = {
    isDev,
    getDevIds,
    getToken,
    setToken,
    getLicense,
    getRepo,
    setRepo,
    getPath,
    setPath,
    getRawUrl,
    setRawUrl,
    getUpdateRepo,
    setUpdateRepo,
    getAllConfig,
    resetConfig
};
