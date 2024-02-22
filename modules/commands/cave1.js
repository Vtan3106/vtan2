module.exports.config = {
  name: "cave1",
  version: "1.0.0",
  hasPermssion: 0,
  credit: "Văn Tân",
  description: "hi gửi sticker",
  commandCategory: "Tiện ích",
  usages: "[text]",
  image: [
    "https://i.imgur.com/QI1PjzT.jpeg",
    "https://i.imgur.com/xzvsEwU.jpeg"
  ],
  cooldowns: 5
}
module.exports.run = async ({ event, api, Threads, getText, args }) => {
  let { threadID, messageID } = event;
  const fs = require('fs');
  const axios = require('axios');
  const request = require('request');
  //const axios = require('axios');
  api.sendMessage(`🖥️ =====『 cave 』===== 🖥️
  ━━━━━━━━━━━━━━━━━━━━━━━━━
  1. 😆 - 👍 cave quán bar
  ━━━━━━━━━━━━━━━━━━━━━━━━━
  🕊️ Thả cảm xúc vào tin nhắn để làm việc `, event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name,
      messageID: info.messageID,
      author: event.senderID,
    })
  }, event.messageID);
}
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users }) => {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const { threadID, reaction, messageID, userID } = event;
  if (reaction == '😆' || reaction == '👍') {
    var tvt =
      [
        "1", "2", "3"
      ];
    const hi = tvt[Math.floor(Math.random() * tvt.length)];
    var title = ['12%', '21%', '5%', '8%', '2%', '10%', '50%', '83%', '100%', '76'];
    var tl = title[Math.floor(Math.random() * title.length)];
    const fs = require("fs-extra");
    const request = require("request");
    const axios = require('axios');
    const res = await axios.get(`https://73263801-66c8-43d3-b9d1-b1e54aab6105-00-3lucvohfxpnbo.pike.replit.dev/cavebar?apikey=TVT06&id=${hi}`);
    var a = res.data.data1;
    var mn = res.data.money;
    let data = (await Currencies.getData(userID)).data || {};
    Currencies.increaseMoney(userID, parseInt(mn));
    const path = __dirname + '/cache/cavequanbar.png';
    if ("https://imgur.com/61NNzS3.png") {
      await global.utils.downloadFile("https://imgur.com/61NNzS3.png", path);
    }
    api.sendMessage({ body: "Chờ tí nho đang tiến hành phục vụ khách với tỉ lệ là: " + tl, attachment: fs.createReadStream(path) }, event.threadID, event.messageID)
    const name = await Users.getNameUser(userID)
    api.unsendMessage(handleReaction.messageID);
    let callback = function() {
      api.sendMessage({
        body: ` ==『 Cave Quán Bar 』== 
  ━━━━━━━━━━━━━━━━━━━━━
   Bóp Vai Cho Khách : ${res.data.name}
   Người Làm : ${name}
   Cảm Giác : ${res.data.please}
              ${res.data.des}
  ━━━━━━━━━━━━━━━━━━━━━
  💸 Money : ${mn}`, attachment: fs.createReadStream(__dirname + `/cache/tvt.png`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tvt.png`), event.messageID);
    };
    request(encodeURI(a)).pipe(fs.createWriteStream(__dirname + `/cache/tvt.png`)).on("close", callback);
  }
}