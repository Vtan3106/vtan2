module.exports.config = {
  name: "vdanime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Văn Tân",
  description: "video anime",
  commandCategory: "giải trí",
  usages: "anime",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var thơ = (await axios.get("https://api.apibot.repl.co/thinh")).data.url;
  axios.get('https://api.apibot.repl.co/vdanime').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body: `=======𝐕𝐃𝐀𝐍𝐈𝐌𝐄=======\n\n━━━━━━━━━━━━━━━━━━\n\n『⏰』→ 𝐋𝐢𝐧𝐤: ${res.data.url}\n\n『🍑』→ 𝐓𝐡𝐢́𝐧𝐡: ${thơ}\n\n━━━━━━━━━━━━━━━━━━\n\n『🎀』→ 𝐔𝐩𝐝𝐚𝐭𝐞: 𝗩𝗮̆𝗻 𝗧𝗮̂𝗻\n\n『🌐』→ 𝐋𝐢𝐧𝐤 𝐀𝐝𝐦𝐢𝐧: https://www.facebook.com/TanUocCoEm\n\n『❤️』➝ 𝐂𝐡𝐮́𝐜 𝐂𝐚́𝐜 𝐁𝐚̣𝐧 𝐗𝐞𝐦 𝐕𝐢𝐝𝐞𝐨 𝐕𝐮𝐢 𝐕𝐞̉`,
            attachment: fs.createReadStream(__dirname + `/cache/dạ.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dạ.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/dạ.${ext}`)).on("close", callback);
      })
    }