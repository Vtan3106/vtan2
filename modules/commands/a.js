const fs = require("fs-extra");
module.exports ={
	config: {
		name: 'a',
		commandCategory: 'Tiện ích',
		hasPermssion: 1,
		credits: 'Trần Văn Tân',
		usages: 'resset data checktt của nhóm',
		description: 'resset data checktt của nhóm',
		cooldowns: 0
	},
run: async function({ api, event, args, Users }) {
const { threadID, messageID } = event;
const name = await Users.getNameUser(event.senderID)
let uid = event.senderID;
var vtan = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
 const dcm = process.uptime(); 
  var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var tvt = Math.floor(dcm % 60);
const t = args[0] || threadID;
fs.unlinkSync(__dirname + '/-checktt/'+ t + '.json')
return api.sendMessage({body:`===== [ 𝗥𝗲𝘀𝗲𝘁 𝗧𝗧 𝗕𝗢𝗫 ] =====\n━━━━━━━━━━━━━━━━━━\n[🥦] → Người Dùng : ${name}\n[🍆] → Đã reset tin nhắn của nhóm: ${t}\n[⏰] → Vào Lúc : ${vtan}\n━━━━━━━━━━━━━━━━━━\n[🍠] → Bot Đã Onl Được : ${anh} : ${la} : ${tvt}`,attachment: (await axios.get((await axios.get(`https://api.uchihaobito.site/ig`)).data.url, {
                    responseType: 'stream'
                })).data
}, event.threadID, threadID,messageID)
  if (args[0] == 'all') {
fs.unlinkSync(__dirname + '/-checktt/')
return api.sendMessage(`Đã reset tin nhắn của all nhóm`,threadID,messageID) 
  }
  }
}