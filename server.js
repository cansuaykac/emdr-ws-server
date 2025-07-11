const WebSocket = require("ws");
const PORT = process.env.PORT || 3000;
const server = require("http").createServer();
const wss = new WebSocket.Server({ server });

const clients = new Map();

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    let msg;
    try { msg = JSON.parse(data); } catch { return; }
    const { session, type } = msg;
    if (!session) return;

    if (!clients.has(session)) clients.set(session, []);
    const sessionClients = clients.get(session);
    if (!sessionClients.includes(ws)) sessionClients.push(ws);

    sessionClients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(msg));
      }
    });
  });

  ws.on("close", () => {
    for (let [session, sockets] of clients.entries()) {
      clients.set(session, sockets.filter((s) => s !== ws));
    }
  });
});

server.listen(PORT, "0.0.0.0", () => console.log(`WebSocket sunucusu ${PORT} portunda çalışıyor`));