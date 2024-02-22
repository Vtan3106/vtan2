module.exports.config = {
  name: "checkvar",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Văn Tân",
  description: "checkvar vdgai noprefix",
  commandCategory: "giải trí",
  usages: "checkvar",
  cooldowns: 0
};
module.exports.run = async function() {}

module.exports.handleEvent = async function ({ api, event, threads, Users }) {
  const axios = require("axios")
  let name = await Users.getNameUser(event.senderID)
  const { body } = event;
  if (body.toLowerCase() == "var" || (body.toLowerCase() == "Var") || (body.toLowerCase() == "Ben") ||  (body.toLowerCase() == "ben") ||  (body.toLowerCase() == "Checkvar") ||(body.toLowerCase() == "checkvar") ||  (body.toLowerCase() == "Check var") || (body.toLowerCase() == "check var")) {
       api.sendMessage({body: `[🍒] → Hi : ${name}\n[🥝] → Video checkvar của bạn đây\n[🫐] → Được Update Bởi Admin : Trần Văn Tân\n[🍓] → FB : https://www.facebook.com/AnhYeuEm.Tan06`,attachment: (await axios.get((await axios.get(`https://apirandom.file-bot.repl.co/checkvar`)).data.data, {
                    responseType: 'stream'
                })).data}, event.threadID);
};
}
module.exports.run = async ({ event, api, Currencies, args, utils,Users }) => {
let name = await Users.getNameUser(event.senderID)
  var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
return api.sendMessage({body:`[🥨] → Người Dùng : ${name}\n[🥖] → Dùng sai cách rồi lêu lêu\n[🐧] → Bây Giờ Là : ${time}`,attachment: (await axios.get((await axios.get(`https://apirandom.api-official.repl.co/gai`)).data.data, {
                    responseType: 'stream'
                })).data},event.threadID)

                       }