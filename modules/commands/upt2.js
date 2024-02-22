module.exports.config={
  name: "upt2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Văn Tân",//thay cre cái db
  description: "kiểm tra thời gian bot onl noprefix",
  commandCategory: "tiện ích",
  cooldowns: 5,
    usages: "onl",
  dependencies: {}
};
module.exports.run = async function() {}

module.exports.handleEvent = async function ({ api, event, threads, Users }) {
  const axios = require("axios")
  const { body } = event;
  if (body.toLowerCase() == "upt2" || (body.toLowerCase() == "onl")) {
    const dcm = process.uptime(); 
      var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vtan = Math.floor(dcm % 60);
    api.sendMessage(`${anh}:${la}:${vtan}`,event.threadID);
};
}
module.exports.run = async ({ event, api, Currencies, args, utils,Users }) => {
let name = await Users.getNameUser(event.senderID)
  var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
return api.sendMessage({body:`[🥨] → Người Dùng : ${name}\n[🥖] → Dùng sai cách rồi lêu lêu\n[🐧] → Bây Giờ Là : ${time}`,attachment: (await axios.get((await axios.get(`https://api.uchihaobito.site/ig`)).data.data, {
                    responseType: 'stream'
                })).data},event.threadID)

                       }