module.exports.config = {
  name: "ad",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "Võ Nhật Hoàng",
  description: "xem thông tin ad",
  commandCategory: "THÀNH VIÊN",
  cooldowns: 5
};
module.exports.onLoad = () => {
  const fs = require("fs-extra");
  const request = require("request");
  const dirMaterial = __dirname + `/noprefix/`;
  if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "ad.gif")) request("https://i.imgur.com/h03Z8AY.gif").pipe(fs.createWriteStream(dirMaterial + "ad.gif"));
}
module.exports.run = async ({ event, api, args, Currencies }) => {
  const request = require("request");
  const fs = require("fs");

  const { threadID, messageID, senderID } = event;

  if (!args[0]) {
    var msg = `==== [ 𝗠𝗘𝗡𝗨 𝗔𝗗𝗠𝗜𝗡 ] ====
━━━━━━━━━━━━━━━━━━\n𝟭. 𝐕𝐚̆𝐧 𝐓𝐚̂𝐧 ( 𝗮𝗱𝗺𝗶𝗻 𝗰𝗵𝗶́𝗻𝗵 ) 💓\n𝟮. 𝗛𝗮̀ Đ𝘂̛́𝗰 𝗤𝘂𝗮̂𝗻 🍏\n𝟯. 𝙋𝙝𝙪̀𝙣𝙜 𝙌𝙪𝙤̂́𝙘 𝘿𝙪̛𝙤̛𝙣𝙜 🐸\n𝟰. 𝐂𝐡𝐮̛𝐚 𝐂𝐨́ 🐢\n𝟱. 𝐂𝐡𝐮̛𝐚 𝐂𝐨́ 🐺\n━━━━━━━━━━━━━━━━━━\n👉 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗮𝗱𝗺𝗶𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺`

    return api.sendMessage({ body: msg,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apirandom.api-official.repl.co/du')).data.url,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, (error, info) => {

      global.client.handleReply.push({
        type: "choosee",
        name: this.config.name,
        author: event.senderID,
        messageID: info.messageID
      })
    })
  }
}
module.exports.handleReply = async function({
  args,
  event,
  Users,
  api,
  handleReply,
  Currencies,
  __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
  api.sendMessage(`𝗫𝗶𝗻 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 đ𝗼̛̣𝗶 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘅𝘂̛̉ 𝗹𝘆́ !`, event.threadID, (err, info) =>
    setTimeout(() => { api.unsendMessage(info.messageID) }, 100000));
  const request = require("request");
  const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;


  switch (handleReply.type) {
    case "choosee": {
      switch (event.body) {
        case "ad vtan":
        case "vtan":
        case "1": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
          return api.sendMessage({
            body: `=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ====\n━━━━━━━━━━━━━━━━━━
[🙈] ➝ 𝐓𝐞̂𝐧: 𝐓𝐫𝐚̂̀𝐧 𝐕𝐚̆𝐧 𝐓𝐚̂𝐧
[💮] ➝ 𝐁𝐢𝐞̣̂𝐭 𝐃𝐚𝐧𝐡: 𝐕𝐓𝐚𝐧 🌷 
[🛸] ➝ 𝐓𝐮𝐨̂̉𝐢: 𝟏𝟕 𝐓𝐮𝐨̂̉𝐢
[👤] ➝ 𝐆𝐢𝐨̛́𝐢 𝐓𝐢́𝐧𝐡: 𝐍𝐚𝐦
[💫] ➝ 𝐂𝐡𝐢𝐞̂̀𝐮 𝐂𝐚𝐨 𝐂𝐚̂𝐧 𝐍𝐚̣̆𝐧𝐠:  𝟏𝐦𝟱𝐱 𝐱 𝟓𝟏𝐊𝐠
━━━━━━━━━━━━━━━━━━
[💘] ➝ 𝐌𝐨̂́𝐢 𝐐𝐮𝐚𝐧 𝐇𝐞̣̂: 𝑳𝒂̀𝒎 𝑮𝒊̀ 𝑪𝒐́ 𝑵𝒀
[🌎] ➝ 𝐐𝐮𝐞̂ 𝐐𝐮𝐚́𝐧: 𝐇𝐚̉𝐢 𝐃𝐮̛𝐨̛𝐧𝐠
[👫] ➝ 𝐆𝐮: 𝐕𝐓 𝐌𝐓
[🌸] ➝ 𝐓𝐢́𝐧𝐡 𝐂𝐚́𝐜𝐡: 𝐇𝐮̛𝐨̛́𝐧𝐠 𝐍𝐎̣̂𝐢
[🌀] ➝ 𝐒𝐨̛̉ 𝐓𝐡𝐢́𝐜𝐡:  𝐂𝐡𝐨̛𝐢 𝐆𝐚𝐦𝐞 , 𝐂𝐡𝐨̛𝐢 𝐊𝐄
━━━━━━━━━━━━━━━━━━
💻𝐂𝐨𝐧𝐭𝐚𝐜𝐭💻
[☎] ➝ 𝐒đ𝐭&𝐙𝐚𝐥𝐨: 𝟎𝟑𝟖𝟒𝟏𝟗𝟎𝟎𝟔𝟐
[🌐] ➝ 𝐅𝐛:https://www.facebook.com/AnhYeuEm.Tan06
[✉️] ➝ 𝐄𝐦𝐚𝐢𝐥: tranvantan006@gmail.com 
━━━━━━━━━━━━━━━━━━
[🛸] ➝ 𝐃𝐨𝐧𝐚𝐭𝐞:
[💳] ➝ 𝐕𝐂𝐁: 𝐂𝐡𝐮̛𝐚 𝐋𝐚̀𝐦:(
[💳] ➝ 𝐌𝐁: 𝟎𝟑𝟖𝟒𝟏𝟗𝟎𝟎𝟔𝟐
[📲] ➝ 𝐌𝐎𝐌𝐎: 𝟎𝟑𝟖𝟒𝟏𝟗𝟎𝟎𝟔𝟐`, attachment: (await global.nodemodule["axios"]({
              url: (await global.nodemodule["axios"]('https://apirandom.file-bot.repl.co/vdgaisexy')).data.url,
              method: "GET",
              responseType: "stream"
            })).data
          }, event.threadID, event.messageID)
        }
        case "Đức Quân":
        case "Quân":
        case "admin 2":
        case "2": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
          return api.sendMessage({
            body: `━━━━━━━━━━━━━━━━━━
=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
━━━━━━━━━━━━━━━━━━
👤] ➝ 𝗧𝗲̂𝗻: Hà Đức Quân
[🎟️] ➝ 𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵: Baby shark
[🌹] ➝ 𝗧𝘂𝗼̂̉𝗶: 15
[👫] ➝ 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: Nam 
[🗓️] ➝ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 19/09/2008
[🌟] ➝ 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼 : 1m60
[💓] ➝ 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂: Không có gì hết 
[🎊] ➝ 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: Yên lập –phú thọ
[🏠] ➝ 𝗡𝗼̛𝗶 𝗼̛̉: Yên lập
[💞] ➝ 𝗖𝘂𝗻𝗴: Không 
[💐] ➝ 𝗚𝘂: Không 
[🎀] ➝ 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: Không 
[🌐] ➝ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/profile.php?id=100028342031687
━━━━━━━━━━━━━━━━━━
 [👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: 
➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁
➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́
➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅
➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><
➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵
=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 <3 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́ <3`, attachment: (await global.nodemodule["axios"]({
              url: (await global.nodemodule["axios"]('https://apirandom.api-official.repl.co/vdgai')).data.url,
              method: "GET",
              responseType: "stream"
            })).data
          }, event.threadID, event.messageID)
        }
        case "𝙋𝙝𝙪̀𝙣𝙜 𝙌𝙪𝙤̂́𝙘 𝘿𝙪̛𝙤̛𝙣𝙜":
        case "𝘿𝙪𝙤𝙣𝙜𝙊𝙣𝙞":
        case "admin 3":
        case "3": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
          return api.sendMessage({
            body: `━━━━━━━━━━━━━━━━━━
=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
━━━━━━━━━━━━━━━━━━
👤] ➝ 𝗧𝗲̂𝗻: 𝙋𝙝𝙪̀𝙣𝙜 𝙌𝙪𝙤̂́𝙘 𝘿𝙪̛𝙤̛𝙣𝙜
[🎟️] ➝ 𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵: 𝘿𝙪𝙤𝙣𝙜𝙊𝙣𝙞
[🌹] ➝ 𝗧𝘂𝗼̂̉𝗶: 𝟭𝟱𝗧
[👫] ➝ 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 𝙉𝙖𝙢 
[🗓️] ➝ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 𝟮/𝟱/𝟮𝟬𝟬𝟴
[🌟] ➝ 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼 𝟭𝗺𝟳
[💓] ➝ 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂: 𝙁𝙖 𝙣𝙖̣̆𝙣𝙜
[🎊] ➝ 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: 𝙃𝙖̉𝙞 𝘿𝙪̛𝙤̛𝙣𝙜
[🏠] ➝ 𝗡𝗼̛𝗶 𝗼̛̉: 𝙑𝙞̃𝙣𝙝 𝙋𝙝𝙪́𝙘
[💞] ➝ 𝗖𝘂𝗻𝗴: 𝙩𝙤𝙧𝙤
[💐] ➝ 𝗚𝘂: 𝙇𝙤𝙡𝙞
[🎀] ➝ 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: 𝙃𝙤𝙖̀ đ𝙤̂̀𝙣𝙜 𝙩𝙝𝙖̂𝙣 𝙩𝙝𝙞𝙚̣̂𝙣 𝙡𝙪𝙤̂𝙣 𝙩𝙤𝙭𝙞𝙘
[🌐] ➝ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/PQD.UserFacebook.Creative?mibextid=LQQJ4d
━━━━━━━━━━━━━━━━━━
[🛸] ➝ 𝐃𝐨𝐧𝐚𝐭𝐞:
[💳] ➝ 𝐕𝐂𝐁: 𝐂𝐡𝐮̛𝐚 𝐋𝐚̀𝐦:(
[💳] ➝ 𝐌𝐁: 𝟬𝟵𝟳𝟲𝟮𝟬𝟯𝟲𝟵𝟳
[📲] ➝ 𝐌𝐎𝐌𝐎: 𝟬𝟵𝟳𝟲𝟮𝟬𝟯𝟲𝟵𝟳
━━━━━━━━━━━━━━━━━━
 [👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: 
➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁
➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́
➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅
➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><
➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵
=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 <3 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́ <3`, attachment: (await global.nodemodule["axios"]({
              url: (await global.nodemodule["axios"]('https://apirandom.api-official.repl.co/vdgai')).data.url,
              method: "GET",
              responseType: "stream"
            })).data
          }, event.threadID, event.messageID)
        }
        case "chx cs":
        case "chx cs":
        case "admin 4":
        case "4": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
          return api.sendMessage({
            body: `=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
━━━━━━━━━━━━━━━━━━
[👤] ➝ 𝗧𝗲̂𝗻: 
[🎟️] ➝ 𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵: 
[🌹] ➝ 𝗧𝘂𝗼̂̉𝗶: 
[👫] ➝ 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵:  
[🗓️] ➝ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 
[🌟] ➝ 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼 
[💓] ➝ 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂:
[🎊] ➝ 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: 
[🏠] ➝ 𝗡𝗼̛𝗶 𝗼̛̉: 
[💞] ➝ 𝗖𝘂𝗻𝗴: 
[💐] ➝ 𝗚𝘂: 
[🎀] ➝ 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: 
[🌐] ➝ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: 
━━━━━━━━━━━━━━━━━━
 [👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: 
➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁
➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́
➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅
➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><
➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵
=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 <3 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́ <3`, attachment: (await global.nodemodule["axios"]({
              url: (await global.nodemodule["axios"]('https://apirandom.api-official.repl.co/vdgai')).data.url,
              method: "GET",
              responseType: "stream"
            })).data
          }, event.threadID, event.messageID)
        }
          case "chx cs":
        case "chx cs":
        case "admin 5":
        case "5": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
          return api.sendMessage({
            body: `=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
━━━━━━━━━━━━━━━━━━
👤] ➝ 𝗧𝗲̂𝗻: 
[🎟️] ➝ 𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵: 
[🌹] ➝ 𝗧𝘂𝗼̂̉𝗶: 
[👫] ➝ 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵:  
[🗓️] ➝ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 
[🌟] ➝ 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼 
[💓] ➝ 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂:
[🎊] ➝ 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: 
[🏠] ➝ 𝗡𝗼̛𝗶 𝗼̛̉: 
[💞] ➝ 𝗖𝘂𝗻𝗴: 
[💐] ➝ 𝗚𝘂: 
[🎀] ➝ 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: 
[🌐] ➝ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: 
━━━━━━━━━━━━━━━━━━
 [👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: 
➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁
➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́
➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅
➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><
➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵
=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 <3 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́ <3`, attachment: (await global.nodemodule["axios"]({
              url: (await global.nodemodule["axios"]('https://apirandom.api-official.repl.co/vdgai')).data.url,
              method: "GET",
              responseType: "stream"
            })).data
          }, event.threadID, event.messageID)
        }
          break;
        default:
          const choose = parseInt(event.body);
          if (isNaN(event.body)) return api.sendMessage("𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
          if (choose > 3 || choose < 1) return api.sendMessage("𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID);
      }
    }
  }
}