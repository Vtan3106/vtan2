module.exports.config = {
    "name": "tachnen",
    "version": "1.1.1",
    "hasPermssion": 0,
    "credits": "nnl",
    "description": "adu",
    "commandCategory": "game",
    "usages": "reply ảnh bot sẽ tự tảch nền cho bạn",
    "cooldowns": 2,
    "dependencies": {
        "form-data": "",
        "image-downloader": ""
    }
};
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs-extra');
const path = require('path');
const {image} = require('image-downloader');
module.exports.run = async function({
    api, event, args,Users
}){
  let name = await Users.getNameUser(event.senderID)
  const tvt = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY");
    try {
        var nnl = `🖼️=== [ 𝗧𝗔́𝗖𝗛 𝗕𝗔𝗖𝗞𝗚𝗥𝗢𝗨𝗡𝗗 ] ===🖼️
━━━━━━━━━━━━━━━
[🍎] → 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗗𝘂̀𝗻𝗴 : ${name}
[🍐] → 𝗧𝗮́𝗰𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗻𝗲̂̀𝗻 𝗰𝘂̉𝗮 𝗮̉𝗻𝗵 𝗯𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗿𝗲𝗽𝗹𝘆
[🍒] → 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀ : ${tvt}
━━━━━━━━━━━━━━━
[🍉] → 𝗖𝗵𝘂́𝗰 𝗕𝗮̣𝗻 𝗗𝘂̀𝗻𝗴 𝗕𝗼𝘁 𝗩𝘂𝗶 𝗩𝗲̉\n[🌐] → 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗔𝗗𝗠𝗜𝗡 : https://www.facebook.com/AnhYeuEm.Tan06`
        if (event.type !== "message_reply") return api.sendMessage("Bạn phải reply một ảnh nào đó", event.threadID, event.messageID);
        if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("Bạn phải reply một ảnh nào đó", event.threadID, event.messageID);
        if (event.messageReply.attachments[0].type != "photo") return api.sendMessage("Đây không phải là image", event.threadID, event.messageID);
 
        const content = (event.type == "message_reply") ? event.messageReply.attachments[0].url : args.join(" ");
        const KeyApi = ["s9kSjxSYhz1uAiCz2ibynLXz","wBeEL6htGj9iWZz1qAfda9Qs","zsHhRdRUXPbPsLrAVx1Js3yx"] //// hết reg nha 
        const inputPath = path.resolve(__dirname, 'cache', `photo.png`);
         await image({
        url: content, dest: inputPath
    });
        const formData = new FormData();
        formData.append('size', 'auto');
        formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));
        axios({
            method: 'post',
            url: 'https://api.remove.bg/v1.0/removebg',
            data: formData,
            responseType: 'arraybuffer',
            headers: {
                ...formData.getHeaders(),
                'X-Api-Key': KeyApi[Math.floor(Math.random() * KeyApi.length)],
            },
            encoding: null
        })
            .then((response) => {
                if (response.status != 200) return console.error('Error:', response.status, response.statusText);
                fs.writeFileSync(inputPath, response.data);
                return api.sendMessage({body:nnl, attachment: fs.createReadStream(inputPath) }, event.threadID, () => fs.unlinkSync(inputPath));
            })
            .catch((error) => {
                return console.error('Request failed:', error);
            });
    } catch (e) {
        console.log(e)
        return api.sendMessage(`có cái nịt`, event.threadID, event.messageID);
    }
};
