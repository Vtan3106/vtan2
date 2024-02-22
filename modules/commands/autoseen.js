const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autoseen.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  
module.exports.config = {
	name: "autoseen",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Vtan",//vui lòng đéo thay credits
	description: "Bật/tắt tự động seen khi có tin nhắn mới",
	commandCategory: "admin",
	usages: "on/off",
	cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, args, Users }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true')
    api.markAsReadAll(() => {});
};
module.exports. run = async ({ api, event, args, Users }) => {
  try {
    const name = await Users.getNameUser(event.senderID)
    let uid = event.senderID;
    var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
const dcm = process.uptime(); 
      var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vtan = Math.floor(dcm % 60);
	if (args[0] == 'on') {
	  fs.writeFileSync(pathFile, 'true');
	  api.sendMessage({body:`===== [ 𝗔𝗨𝗧𝗢𝗦𝗘𝗘𝗡 ] =====\n━━━━━━━━━━━━━━━━\n[🧀] → Người Dùng : ${name}\n[🍒] → Đã bật chế độ tự động seen khi có tin nhắn mới\n[🥨] → Vào Lúc : ${time}\n[⏳] → Thời Gian Onl : ${anh} giờ ${la} phút ${vtan} giây\n━━━━━━━━━━━━━━━━`,attachment: (await axios.get((await axios.get(`https://api.uchihaobito.site/ig`)).data.data, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);
	}
	else if (args[0] == 'off') {
	  fs.writeFileSync(pathFile, 'false');
	  api.sendMessage({body:`===== [ 𝗔𝗨𝗧𝗢𝗦𝗘𝗘𝗡 ] =====\n━━━━━━━━━━━━━━━━\n[🧀] → Người Dùng : ${name}\n[🍓] → Đã tắt chế độ tự động seen khi có tin nhắn mới\n[🥥] → Vào Lúc : ${time}\n[⏳] → Thời Gian Onl : ${anh} giờ ${la} phút ${vtan} giây\n━━━━━━━━━━━━━━━━`, attachment: (await axios.get((await axios.get(`https://api.uchihaobito.site/ig`)).data.data, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);
	}
	else {
	  api.sendMessage({body:`===== [ 𝗔𝗨𝗧𝗢𝗦𝗘𝗘𝗡 ] =====\n━━━━━━━━━━━━━━━━\n[🧀] → Người Dùng : ${name}\n[🍒] →  Dùng sai cú pháp\n[🐧] → Vui lòng chọn : on hoặc off\n[🧭] → Bây Giờ Là : ${time}\n[🕰] → Bot đã onl được : ${anh} giờ ${la} phút ${vtan} giây\n━━━━━━━━━━━━━━━━`, attachment: (await axios.get((await axios.get(`https://api.uchihaobito.site/ig`)).data.data, {
                    responseType: 'stream'
                })).data},event.threadID, event.messageID);
	}
  }
  catch(e) {
    console.log(e);
  }
};