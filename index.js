const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode");
const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.toString(qr, { type: "terminal", small: true }, (err, url) => {
    console.log(url);
  });
  // Generate and scan this code with your phone
  console.log("QR RECEIVED", qr);
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (msg) => {
  //   console.log(msg);
  //   if (msg.body == "!ping") {
  //     msg.reply("pong");
  //   }
});

client.on("message_create", (msg) => {
  if (msg.body === "/test") {
    client.sendMessage(msg.to, "this is testing message please don't reply.");
  }
  console.log(msg);
});

client.initialize();
