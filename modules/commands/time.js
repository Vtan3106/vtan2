module.exports.config = {
	name: "time",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Xem bây giờ là mấy giờ",
	commandCategory: "Other", 
	usages: "time", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users }) {
	const moment = require("moment-timezone");
   var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
	//let data = await api.getUserInfo(event.senderID);
    //let name = await data[event.senderID].name
	var name = (await Users.getData(event.senderID)).name;
    return api.sendMessage(`🎀─── •𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻 • ───🎀\n👋 Hi ${name} Chúc bạn 1 ngày tốt lành\nBây giờ là: ${gio} 😘\n🎀─── •𝗩𝗮̆𝗻 𝗧𝗵𝗶𝗲̣̂𝗻 • ───🎀`, event.threadID, event.messageID)
                                     }