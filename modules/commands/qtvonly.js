module.exports.config = {
    name: "qtvonly",
    version: "1.0",
    hasPermssion: 1,
    credits: "D-Jukie fix Kadeer",
    description: "Quản lý admin bot",
    commandCategory: "Admin",
    usages: "qtvonly",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function ({ api, event, args }) {
const { threadID, messageID, mentions } = event;

        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
       var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
      const res = await axios.get(` https://apirandom.api-official.repl.co/thinh`);
      var vtan = res.data.data;
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage({body:`[🍍] → Tắt thành công chế độ qtvonly\n[😼] → Tất cả mọi người đều có thể sử dụng bot\n[⏰] → Vào Lúc : ${time}\n[💓] → Thính : ${vtan}`,attachment: (await axios.get((await axios.get(`https://api.uchihaobito.site/ig`)).data.url, {
                    responseType: 'stream'
                })).data
}, event.threadID, threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage({body:`[🍒] → Bật thành công chế độ qtvonly\n[💦] → Chỉ admin với qtv box mới có thể sử dụng bot\n[⏰] → Vào Lúc : ${time}\n[💓] → Thính : ${vtan}`,attachment: (await axios.get((await axios.get(`https://api.uchihaobito.site/ig`)).data.url, {
                    responseType: 'stream'
                })).data
}, event.threadID, threadID, messageID);
        }
}