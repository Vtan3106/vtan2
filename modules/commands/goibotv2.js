module.exports.config = {
    name: 'goibotv2',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',//mod thêm by tpk
    description: 'Trò truyện cùng simi chat',
    commandCategory: 'Giải trí',
    usages: '[hey simi]',
    cooldowns: 2,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "goibot.jpg")) request("https://imgur.com/mpd1oOK.jpg").pipe(fs.createWriteStream(dirMaterial +"goibot.jpg"));
}
const {
    post
} = require('axios');
const CN = `https://api-van-tan.fca-tan.repl.co/simi/get`
module.exports.run = () => {};
module.exports.handleEvent = function( {
    api, event
}) { 
  const fs = require("fs");
  const axios = require('axios');
  var tpk = ['[👋🏻] → 𝗖𝗵𝗮̀𝗼 𝗯𝗮̣𝗻, 𝘁𝗼̂𝗶 𝗹𝗮̀ 𝗯𝗼𝘁 𝗰𝘂̉𝗮 𝗩𝗮̆𝗻 𝗧𝗮̂𝗻\n[💓] → 𝗕𝗮̣𝗻 𝗵𝗮̃𝘆 𝗱𝘂̀𝗻𝗴 .𝗵𝗲𝗹𝗽 đ𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 đ𝗮𝗻𝗴 𝗰𝗼́ 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗵𝗼𝗮̣̆𝗰 𝗰𝗮́𝗰𝗵 𝗱𝘂̀𝗻𝗴 𝗻𝗵𝗮\n[💟] → 𝗡𝗲̂́𝘂 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗵𝗼̛𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘁 𝘁𝗵𝗶̀ 𝗱𝘂̀𝗻𝗴 .𝘁𝘁 𝗻𝗵𝗮\n[💝] → 𝗖𝗮̉𝗺 𝗼̛𝗻 𝗯𝗮̣𝗻 đ𝗮̃ 𝘁𝗶𝗻 𝘁𝘂̛𝗼̛̉𝗻𝗴 𝘃𝗮̀ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁 𝗰𝘂̉𝗮 𝗺𝗶̀𝗻𝗵\n[😘] → 𝗖𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝗰𝗼́ 𝗺𝗼̣̂𝘁 𝗻𝗴𝗮̀𝘆 𝘁𝗵𝗮̣̂𝘁 𝘃𝘂𝗶 𝘃𝗲̉'];
  const a = tpk[Math.floor(Math.random()*tpk.length)];
    if (['@Trần Văn Tân','tvt','anh Tân','Bot','anh tân','hi bot','bot đâu','bot off','bot ơi','bot xịn','kêu mọi người lên tương tác đi bot','Chào bot','hello bot','sim','sim ơi','bot'].includes(event.body.toLowerCase())) {
       api.sendMessage({body:`🤖 === [ 𝗠𝗜𝗥𝗔𝗜 𝗕𝗢𝗧 ] === 🤖\n━━━━━━━━━━━━━━━━━━\n${a}\n━━━━━━━━━━━━━━━━━━
👉 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘃𝗼̛́𝗶 𝗯𝗼𝘁`, attachment: fs.createReadStream(__dirname + `/noprefix/goibot.jpg`)}, event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
    };
};
module.exports.handleReply = async function({
    handleReply: $, api, event
}) {
    const res = await post(`${CN}`, {
        ask: event.body
    });
   if (res.data.status != 201) return api.sendMessage(`${res.data.message}`, event.threadID, (err, data) => global.client.hhandleReply.push({
       name: this.config.name,
       messageID: data.messageID,
       ask: event.body
   }), event.messageID); else api.sendMessage({body: `🤖==[ 𝗦𝗜𝗠 𝗦𝗜𝗠 𝗥𝗘𝗣𝗟𝗬 ]==🤖\n━━━━━━━━━━━━━━━━━━\n[💬] → 𝗕𝗼𝘁 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶: ${res.data.answer}\n━━━━━━━━━━━━━━━━━━\n👉 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗲̂́𝗽 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗲̂́𝗽`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.uchihaobito.site/ig')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
};