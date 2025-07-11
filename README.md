# EMDR WebSocket Server

Bu sunucu, EMDR terapisi sırasında terapist ve danışan arasında gerçek zamanlı bilateral uyarım komutlarını WebSocket üzerinden iletmek için tasarlanmıştır.

## Nasıl Kurulur?

### 1. GitHub'a yükle
- `server.js` ve `package.json` dosyalarını bir GitHub reposuna yükleyin

### 2. [https://render.com](https://render.com)'a giriş yapın
- "New Web Service" → "Deploy from GitHub"
- Repository'nizi seçin

### 3. Ayarlar
- Build Command: (boş bırak)
- Start Command: `node server.js`

### 4. Yayın adresiniz
Render size şu formatta bir adres verir:
`wss://your-app-name.onrender.com`

Bu adresi uzantılara yazın. Hepsi bu kadar!