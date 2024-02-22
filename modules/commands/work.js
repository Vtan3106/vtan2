module.exports.config = {
  name: "work",
  version: "1.0.0",
  hasPermssion: 0,
  credit: "Sam",
  description: "hi gửi sticker",
  commandCategory: "Tiện ích",
  usages: "[text]",
  image: [
    "https://i.imgur.com/QI1PjzT.jpeg",
    "https://i.imgur.com/xzvsEwU.jpeg"
    ],
  cooldowns: 5
}
module.exports.run = async ({ event, api, Threads, getText ,args}) => {
  let { threadID, messageID } = event;
  const fs = require('fs');
  const axios = require('axios');
  const request = require('request');
  //const axios = require('axios');
if (args[0] == "listthu") {
          const fs = require('fs');
  const axios = require('axios');
  const request = require('request');
  let res = await axios.get(`http://api.uchihaobito.site/listthu`),
        attachment = [],
        body = '🦌『 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗧𝗛𝗨́ 』🦌\n';
    for (const el of res.data) {
        body += `\n🔢 𝗦𝗧𝗧: ${el.ID}\n🦁 𝗡𝗮𝗺𝗲: ${el.name}\n💸 𝗠𝗼𝗻𝗲𝘆: ${el.money}\n🔎 𝗧𝘆𝗽𝗲: ${el.type}\n☢️ 𝗟𝗲𝘃𝗲𝗹: ${el.level}\n━━━━━━━━━━━━━━━━━━━━━━`;
        const stream = (await axios.get(el.data2, {
            responseType: "stream"
        })).data;
        attachment.push(stream);
    };
    api.sendMessage({body, attachment},event.threadID);
}
    if (args[0] == "listca") {
          const fs = require('fs');
  const axios = require('axios');
  const request = require('request');
  let res = await axios.get(`http://api.uchihaobito.site/listca`),
        attachment = [],
        body = '🐟 『 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗙𝗜𝗦𝗛 』🐟\n';
    for (const el of res.data) {
        body += `\n💳 𝗡𝗮𝗺𝗲: ${el.name}\n💵 𝗠𝗼𝗻𝗲𝘆: ${el.money}\n🕵️ 𝗟𝗼𝗮̣𝗶 𝗰𝗮́: ${el.rarity}\n🌸 𝗚𝗶𝗼̛́𝗶 𝘁𝗵𝗶𝗲̣̂𝘂: ${el.des}\n━━━━━━━━━━━━━━━━━━━━━━`;
        const stream = (await axios.get(el.data1, {
            responseType: "stream"
        })).data;
        attachment.push(stream);
    };
    api.sendMessage({body, attachment},event.threadID);
  }
if (args[0] == "listrong") {
          const fs = require('fs');
  const axios = require('axios');
  const request = require('request');
  let res = await axios.get(`http://api.uchihaobito.site/listrong`),
        attachment = [],
        body = '🐉『 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗥𝗢̂̀𝗡𝗚  』🐉\n';
    for (const el of res.data) {
        body += `\n💳 𝗡𝗮𝗺𝗲: ${el.name}\n💵 𝗠𝗼𝗻𝗲𝘆: ${el.money}\n━━━━━━━━━━━━━━━━━━━━━━`;
        const stream = (await axios.get(el.data1, {
            responseType: "stream"
        })).data;
        attachment.push(stream);
    };
    api.sendMessage({body, attachment},event.threadID);
                     }
  if (args[0] == "listan") {
          const fs = require('fs');
  const axios = require('axios');
  const request = require('request');
  let res = await axios.get(`http://api.uchihaobito.site/listan`),
        attachment = [],
        body = '🍳『 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗘𝗔𝗧 』🍳\n';
    for (const el of res.data) {
        body += `\n💳 𝗡𝗮𝗺𝗲: ${el.name}\n💵 𝗠𝗼𝗻𝗲𝘆: ${el.money}\n━━━━━━━━━━━━━━━━━━━━━━`;
        const stream = (await axios.get(el.data1, {
            responseType: "stream"
        })).data;
        attachment.push(stream);
    };
    api.sendMessage({body, attachment},event.threadID);
  }
    if (args[0] == "listcho") {
          const fs = require('fs');
  const axios = require('axios');
  const request = require('request');
  let res = await axios.get(`http://api.uchihaobito.site/listcho`),
        attachment = [],
        body = '🐶『 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗗𝗢𝗚 』🐶\n';
    for (const el of res.data) {
        body += `\n💳 𝗡𝗮𝗺𝗲: ${el.name}\n💵 𝗠𝗼𝗻𝗲𝘆: ${el.money}\n━━━━━━━━━━━━━━━━━━━━━━`;
        const stream = (await axios.get(el.data1, {
            responseType: "stream"
        })).data;
        attachment.push(stream);
    };
    api.sendMessage({body, attachment},event.threadID);
    }
  if (args[0] == "listchim") {
          const fs = require('fs');
  const axios = require('axios');
  const request = require('request');
  let res = await axios.get(`http://api.uchihaobito.site/listchim`),
        attachment = [],
        body = '🦅『 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗖𝗛𝗜𝗠 』🦅\n';
    for (const el of res.data) {
        body += `\n💳 𝗡𝗮𝗺𝗲: ${el.name}\n💵 𝗠𝗼𝗻𝗲𝘆: ${el.money}\n━━━━━━━━━━━━━━━━━━━━━━`;
        const stream = (await axios.get(el.data1, {
            responseType: "stream"
        })).data;
        attachment.push(stream);
    };
    api.sendMessage({body, attachment},event.threadID);
  }
  api.sendMessage({body:`🖥️ =====『 𝗟𝗔̀𝗠 𝗩𝗜𝗘̣̂𝗖 』===== 🖥️
━━━━━━━━━━━━━━━━━━━━━━━━━
1. 🎣 - 👍 𝗖𝗮̂𝘂 𝗰𝗮́ 𝗸𝗶𝗲̂́𝗺 𝘁𝗶𝗲̂̀𝗻 
2. 🏹 - 🤣 𝗕𝗮̆́𝗻 𝗰𝗵𝗶𝗺 𝗸𝗶𝗲̂́𝗺 𝘁𝗶𝗲̂̀𝗻
3. 🦌 - 😆 𝗦𝗮̆𝗻 𝘁𝗵𝘂́ 𝗸𝗶𝗲̂́𝗺 𝘁𝗶𝗲̂̀𝗻
4. 🗡️ - 😍 𝗦𝗮̆𝗻 𝗿𝗼̂̀𝗻𝗴 𝗸𝗶𝗲̂́𝗺 𝘁𝗶𝗲̂̀𝗻
5. 🦖 - 😘 𝗦𝗮̆𝗻 𝗸𝗵𝘂̉𝗻𝗴 𝗹𝗼𝗻𝗴 𝗸𝗶𝗲̂́𝗺 𝘁𝗶𝗲̂̀𝗻
6. 🐶 - 🤤 𝗧𝗿𝗼̣̂𝗺 𝗰𝗵𝗼́ 𝗸𝗶𝗲̂́𝗺 𝘁𝗶𝗲̂̀𝗻
7. 🍲 - 😻 𝗡𝗮̂́𝘂 𝗮̆𝗻 𝗸𝗶𝗲̂́𝗺 𝘁𝗶𝗲̂̀𝗻
━━━━━━━━━━━━━━━━━━━━━━━━━
🕊️ 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗸𝗲̀𝗺 𝗶𝗰𝗼𝗻 𝘃𝗶𝗲̣̂𝗰 𝗹𝗮̀𝗺 
😗 𝗖𝗼́ 𝘁𝗵𝗲̂̉ 𝘁𝗵𝗮̉ 𝗺𝗼̣̂𝘁 𝘁𝗿𝗼𝗻𝗴 𝗵𝗮𝗶 𝗶𝗰𝗼𝗻 𝗻𝗲̂́𝘂 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗶̀𝗺 𝘁𝗵𝗮̂́𝘆!!`,attachment: await require('axios').get(`http://api.uchihaobito.site/work&name=s&birthday=26/12/2000&love=???&location=H%E1%BA%ADu%20Giang&hometown=H%E1%BA%ADu%20Giang&follow=89999999999&gender=Nam&uid=${event.senderID}`, {responseType: 'stream'}).then(res=>res.data)
}, event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
}
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID,reaction,messageID, userID } = event;
if (reaction == '🎣' || reaction == '👍') {
  //chọn cần
  const fs = require('fs');
  const axios = require('axios');
  const request = require('request');
  api.unsendMessage(handleReaction.messageID);
  let res = await axios.get(`http://api.uchihaobito.site/cancau`),
        attachment = [],
        body = '🌸 ====『 𝗖𝗛𝗢̣𝗡 𝗖𝗔̂̀𝗡 𝗖𝗔̂𝗨 』==== 🌸\n\n🎊 𝗥𝗲𝗽𝗹𝘆 𝗡𝗮𝗺𝗲 𝗰𝗮̂̀𝗻 𝗰𝗮̂𝘂 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗰𝗵𝗼̣𝗻 𝗹𝘂̛𝘂 𝘆́ 𝗻𝗮𝗺𝗲 𝗹𝗮̀ 𝗶𝗱\n';
    for (const el of res.data) {
        body += `\n🎣 𝗡𝗮𝗺𝗲: ${el.name}\n💬 𝗖𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗰𝗮̂̀𝗻 𝗰𝗮̂𝘂: ${el.des}\n━━━━━━━━━━━━━━━━━━━━━━━━━━`;
        const stream = (await axios.get(el.data1, {
            responseType: "stream"
        })).data;
        attachment.push(stream);
    };
    api.sendMessage({body, attachment},event.threadID, (error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        },event.messageID);
    }
  else if (reaction == '🦌' || reaction == '😆') {
    var tpk = 
[
"1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"
];
const hi = tpk[Math.floor(Math.random()*tpk.length)];
    var title = ['12%', '21%', '5%', '8%', '2%', '10%', '50%', '83%','100%','76']; 
var tl = title[Math.floor(Math.random() * title.length)];
          const fs = require("fs-extra");
  const request = require("request");
const axios = require('axios');
const res = await axios.get(`http://api.uchihaobito.site/thu&id=${hi}`);  
var a = res.data.data1;
var mn = res.data.money;
let data = (await Currencies.getData(userID)).data || {};
      Currencies.increaseMoney(userID, parseInt(mn));
    const path = __dirname + '/cache/cl.jpeg';
      if ("https://i.imgur.com/UurZCRB.jpeg") {
await global.utils.downloadFile("https://i.imgur.com/UurZCRB.jpeg", path);
      }
    api.sendMessage({body:"Chờ tí nho đang tiến hành săn với tỉ lệ là: " + tl, attachment: fs.createReadStream(path)}, event.threadID, event.messageID)
    const name = await Users.getNameUser(userID)
       api.unsendMessage(handleReaction.messageID);
        let callback = function ()
     { 
 api.sendMessage({body:`🦁 ===『 𝗦𝗔̆𝗡 𝗧𝗛𝗨́ - 𝗪𝗢𝗥𝗞 』===🦁
━━━━━━━━━━━━━━━━━━━━━
🌸 𝗩𝘂̛̀𝗮 𝘀𝗮̆𝗻 𝗱𝗶́𝗻𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ${res.data.name}
👤 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝘀𝗮̆𝗻: ${name}
🐾 𝗟𝗼𝗮̣𝗶 𝗧𝗵𝘂́: ${res.data.type}
☠️ 𝗡𝗴𝘂𝘆 𝗵𝗶𝗲̂̉𝗺: ${res.data.level}
━━━━━━━━━━━━━━━━━━━━━
💸 𝗠𝗼𝗻𝗲𝘆 𝘀𝗲̃ 𝗻𝗵𝗮̣̂𝗻: ${mn}$
👉🏻 𝗗𝘂̀𝗻𝗴 !𝘄𝗼𝗿𝗸 𝗹𝗶𝘀𝘁𝘁𝗵𝘂 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝘁𝗵𝘂́ 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́!!!
`, attachment: fs.createReadStream(__dirname + `/cache/tp1k.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tp1k.png`), event.messageID);
      };
      request(encodeURI(a)).pipe(fs.createWriteStream(__dirname + `/cache/tp1k.png`)).on("close", callback);
  }
  else if (reaction == '🏹' || reaction == '🤣') {
        var tpk = 
[
"1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38"
];
const hi = tpk[Math.floor(Math.random()*tpk.length)];
    var title = ['12%', '21%', '5%', '8%', '2%', '10%', '50%', '83%','100%','76']; 
var tl = title[Math.floor(Math.random() * title.length)];
          const fs = require("fs-extra");
  const request = require("request");
const axios = require('axios');
const res = await axios.get(`http://api.uchihaobito.site/chim&id=${hi}`);  
var a = res.data.data1;
var mn = res.data.money;
let data = (await Currencies.getData(userID)).data || {};
      Currencies.increaseMoney(userID, parseInt(mn));
    const path = __dirname + '/cache/sanchim.jpeg';
      if ("https://i.imgur.com/XKMRliv.jpeg") {
await global.utils.downloadFile("https://i.imgur.com/XKMRliv.jpeg", path);
      }
    api.sendMessage({body:"Chờ tí nho đang tiến hành bắn chim với tỉ lệ là: " + tl, attachment: fs.createReadStream(path)}, event.threadID, event.messageID)
    const name = await Users.getNameUser(userID)
       api.unsendMessage(handleReaction.messageID);
        let callback = function ()
     { 
 api.sendMessage({body:`🦅 ==『 𝗕𝗔̆́𝗡 𝗖𝗛𝗜𝗠 - 𝗪𝗢𝗥𝗞 』== 🦅
━━━━━━━━━━━━━━━━━━━━━━
🏹 𝗩𝘂̛̀𝗮 𝗯𝗮̆́𝗻 𝗱𝗶́𝗻𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴: ${res.data.name}
👤 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗯𝗮̆́𝗻: ${name}

🔎 𝗟𝗼𝗮̣𝗶 𝗖𝗵𝗶𝗺: ${res.data.type}
🐦 𝗖𝗵𝘂̉𝗻𝗴 𝗹𝗼𝗮̀𝗶: Chim
🌸 𝗧𝗮̣̂𝗽 𝘁𝗶́𝗻𝗵: ${res.data.calculation}
☠️ 𝗡𝗴𝘂𝘆 𝗵𝗶𝗲̂̉𝗺: ${res.data.level}
━━━━━━━━━━━━━━━━━━━━━━
💸 𝗠𝗼𝗻𝗲𝘆: ${mn}$
⚠️ 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 !𝘄𝗼𝗿𝗸 𝗹𝗶𝘀𝘁𝗰𝗵𝗶𝗺 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗰𝗵𝗶𝗺 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́`, attachment: fs.createReadStream(__dirname + `/cache/tp1k.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tp1k.png`), event.messageID);
      };
      request(encodeURI(a)).pipe(fs.createWriteStream(__dirname + `/cache/tp1k.png`)).on("close", callback);
  }
    else if (reaction == '🍳' || reaction == '😻') {
    var tpk = 
[
"1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"
];
const hi = tpk[Math.floor(Math.random()*tpk.length)];
    var title = ['12%', '21%', '5%', '8%', '2%', '10%', '50%', '83%','100%','76%']; 
var tl = title[Math.floor(Math.random() * title.length)];
          const fs = require("fs-extra");
  const request = require("request");
const axios = require('axios');
const res = await axios.get(`http://api.uchihaobito.site/an&id=${hi}`);  
var a = res.data.data1;
var mn = res.data.money;
let data = (await Currencies.getData(userID)).data || {};
      Currencies.increaseMoney(userID, parseInt(mn));
    const path = __dirname + '/cache/nauan.jpeg';
      if ("https://i.imgur.com/kq7hHHl.jpeg") {
await global.utils.downloadFile("https://i.imgur.com/kq7hHHl.jpeg", path);
      }
    api.sendMessage({body:"Chờ tí nho đang tiến hành săn với tỉ lệ là: " + tl, attachment: fs.createReadStream(path)}, event.threadID, event.messageID)
    const name = await Users.getNameUser(userID)
       api.unsendMessage(handleReaction.messageID);
        let callback = function ()
     { 
 api.sendMessage({body:`🍲 ===『 𝗡𝗔̂́𝗨 𝗔̆𝗡 - 𝗪𝗢𝗥𝗞 』=== 🍲
━━━━━━━━━━━━━━━━━━━━
🍳 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗻𝗮̂́𝘂 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴: ${res.data.name}
👤 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗮̂́𝘂: ${name}
💸 𝗠𝗼𝗻𝗲𝘆 𝘀𝗲̃ 𝗻𝗵𝗮̣̂𝗻: ${mn}
🥩 ${res.data.des}
━━━━━━━━━━━━━━━━━━━━
⚠️ !𝘄𝗼𝗿𝗸 𝗹𝗶𝘀𝘁𝗮𝗻 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗺𝗼́𝗻 𝗮̆𝗻
💬 𝗡𝗴𝘂𝘆𝗲̂𝗻 𝗹𝗶𝗲̣̂𝘂: ${res.data.recipe}
`, attachment: fs.createReadStream(__dirname + `/cache/tp1k.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tp1k.png`), event.messageID);
      };
      request(encodeURI(a)).pipe(fs.createWriteStream(__dirname + `/cache/tp1k.png`)).on("close", callback);
    }
    else if (reaction == '🗡️' || reaction == '😍'){
    var tpk = 
[
"1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21"
];
const hi = tpk[Math.floor(Math.random()*tpk.length)];
    var title = ['12%', '21%', '5%', '8%', '2%', '10%', '50%', '83%','100%','76']; 
var tl = title[Math.floor(Math.random() * title.length)];
          const fs = require("fs-extra");
  const request = require("request");
const axios = require('axios');
const res = await axios.get(`http://api.uchihaobito.site/rong&id=${hi}`);  
var a = res.data.data1;
var mn = res.data.money;
let data = (await Currencies.getData(userID)).data || {};
      Currencies.increaseMoney(userID, parseInt(mn));
    const path = __dirname + '/cache/sanrong.jpeg';
      if ("https://i.imgur.com/Ordx8va.jpeg") {
await global.utils.downloadFile("https://i.imgur.com/Ordx8va.jpeg", path);
      }
    api.sendMessage({body:"Chờ tí nho đang tiến hành săn rồng với tỉ lệ là: " + tl, attachment: fs.createReadStream(path)}, event.threadID, event.messageID)
    const name = await Users.getNameUser(userID)
       api.unsendMessage(handleReaction.messageID);
        let callback = function ()
     { 
 api.sendMessage({body:`🐉 ==『 𝗦𝗔̆𝗡 𝗥𝗢̂̀𝗡𝗚 - 𝗪𝗢𝗥𝗞 』== 🐉
━━━━━━━━━━━━━━━━━━━━━
🗡️ 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝘀𝗮̆𝗻 𝗱𝗶́𝗻𝗵 𝗰𝗼𝗻 𝗿𝗼̂̀𝗻𝗴: ${res.data.name}
🦸 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝘀𝗮̆𝗻: ${name}
🎨 𝗠𝗮̀𝘂 𝗿𝗼̂̀𝗻𝗴: ${res.data.color}
💓 𝗥𝗼̂̀𝗻𝗴 𝘁𝗵𝘂𝗼̣̂𝗰: ${res.data.asia}
☠️ 𝗡𝗴𝘂𝘆 𝗵𝗶𝗲̂̉𝗺: ${res.data.danger}
━━━━━━━━━━━━━━━━━━━━━
👉🏻 𝗗𝘂̀𝗻𝗴 !𝘄𝗼𝗿𝗸 𝗹𝗶𝘀𝘁𝗿𝗼𝗻𝗴 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗿𝗼̂̀𝗻𝗴 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́
💸 𝗠𝗼𝗻𝗲𝘆 𝘀𝗲̃ 𝗻𝗵𝗮̣̂𝗻: ${mn}`, attachment: fs.createReadStream(__dirname + `/cache/tp1k.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tp1k.png`), event.messageID);
      };
      request(encodeURI(a)).pipe(fs.createWriteStream(__dirname + `/cache/tp1k.png`)).on("close", callback);
    }
      else if (reaction == '🐶' || reaction == '🤤') {
    var tpk = 
[
"1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27"
];
const hi = tpk[Math.floor(Math.random()*tpk.length)];
    var title = ['12%', '21%', '5%', '8%', '2%', '10%', '50%', '83%','100%','76%']; 
var tl = title[Math.floor(Math.random() * title.length)];
          const fs = require("fs-extra");
  const request = require("request");
const axios = require('axios');
const res = await axios.get(`http://api.uchihaobito.site/cho&id=${hi}`);  
var a = res.data.data1;
var mn = res.data.money;
let data = (await Currencies.getData(userID)).data || {};
      Currencies.increaseMoney(userID, parseInt(mn));
    const path = __dirname + '/cache/tromcho.jpeg';
      if ("https://i.imgur.com/gLZK2VI.jpeg") {
await global.utils.downloadFile("https://i.imgur.com/gLZK2VI.jpeg", path);
      }
    api.sendMessage({body:"Chờ tí nho đang tiến hành bắt chó với tỉ lệ là: " + tl, attachment: fs.createReadStream(path)}, event.threadID, event.messageID)
    const name = await Users.getNameUser(userID)
       api.unsendMessage(handleReaction.messageID);
        let callback = function ()
     { 
 api.sendMessage({body:`🐕 ==『 𝗧𝗥𝗢̣̂𝗠 𝗖𝗛𝗢́ - 𝗪𝗢𝗥𝗞 』== 🐕
━━━━━━━━━━━━━━━━━━━━━
🐶 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗯𝗮̆́𝘁 𝗱𝗶́𝗻𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗼́: ${res.data.name}
🤝 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗯𝗮̆́𝘁: ${name}
🌸 𝗧𝗵𝘂𝗼̣̂𝗰 𝗱𝗼̀𝗻𝗴: ${res.data.type}
☠️ 𝗡𝗴𝘂𝘆 𝗵𝗶𝗲̂̉𝗺: ${res.data.danger}
🎨 𝗠𝗮̀𝘂 𝘀𝗮̆́𝗰: ${res.data.color}
🐾 ${res.data.des}
━━━━━━━━━━━━━━━━━━━━━
👉🏻 𝗗𝘂̀𝗻𝗴 !𝘄𝗼𝗿𝗸 𝗹𝗶𝘀𝘁𝗰𝗵𝗼 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗰𝗵𝗼́ 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́
💸 𝗠𝗼𝗻𝗲𝘆 𝘀𝗲̃ 𝗻𝗵𝗮̣̂𝗻: ${mn}$`, attachment: fs.createReadStream(__dirname + `/cache/tp1k.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tp1k.png`), event.messageID);
      };
      request(encodeURI(a)).pipe(fs.createWriteStream(__dirname + `/cache/tp1k.png`)).on("close", callback);
      }
      else if (reaction == '🦖' || reaction == '😘') {
    var tpk = 
[
"1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"
];
const hi = tpk[Math.floor(Math.random()*tpk.length)];
    var title = ['12%', '21%', '5%', '8%', '2%', '10%', '50%', '83%','100%','76']; 
var tl = title[Math.floor(Math.random() * title.length)];
          const fs = require("fs-extra");
  const request = require("request");
const axios = require('axios');
const res = await axios.get(`http://api.uchihaobito.site/khunglong&id=${hi}`);  
var a = res.data.data1;
var mn = res.data.money;
let data = (await Currencies.getData(userID)).data || {};
      Currencies.increaseMoney(userID, parseInt(mn));
    const path = __dirname + '/cache/sankhl.jpeg';
      if ("https://i.imgur.com/qXeUR7F.jpeg") {
await global.utils.downloadFile("https://i.imgur.com/qXeUR7F.jpeg", path);
      }
    api.sendMessage({body:"Chờ tí nho đang tiến hành săn khủng long với tỉ lệ là: " + tl, attachment: fs.createReadStream(path)}, event.threadID, event.messageID)
    const name = await Users.getNameUser(userID)
       api.unsendMessage(handleReaction.messageID);
        let callback = function ()
     { 
 api.sendMessage({body:`🦖 =『 𝗞𝗛𝗨̉𝗡𝗚 𝗟𝗢𝗡𝗚 𝗪𝗢𝗥𝗞 』= 🦖
━━━━━━━━━━━━━━━━━━━━━
🦕 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝘀𝗮̆𝗻 𝗱𝗶́𝗻𝗵 𝗸𝗵𝗹𝗼𝗻𝗴: ${res.data.name}
⚔️ 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝘀𝗮̆𝗻: ${name}
🦵 𝗞𝗵𝘂̉𝗻𝗴 𝗹𝗼𝗻𝗴: ${res.data.foot}
🍴 𝗧𝗵𝘂̛́𝗰 𝗮̆𝗻: ${res.data.eat}
☠️ 𝗡𝗴𝘂𝘆 𝗵𝗶𝗲̂̉𝗺: ${res.data.danger}
🐾 ${res.data.des}
━━━━━━━━━━━━━━━━━━━━━
🌸 !𝘄𝗼𝗿𝗸 𝗹𝗶𝘀𝘁𝗸𝗵𝘂𝗻𝗴𝗹𝗼𝗻𝗴 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗸𝗵𝘂̉𝗻𝗴 𝗹𝗼𝗻𝗴
💸 𝗠𝗼𝗻𝗲𝘆 𝘀𝗲̃ 𝗻𝗵𝗮̣̂𝗻: ${mn}$`, attachment: fs.createReadStream(__dirname + `/cache/tp1k.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tp1k.png`), event.messageID);
      };
      request(encodeURI(a)).pipe(fs.createWriteStream(__dirname + `/cache/tp1k.png`)).on("close", callback);
      }
}
    module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL,
      getText
}) {
      const { threadID, messageID, senderID } = event;
  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");
      switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "red": {
         // let data = (await Currencies.getData(senderID)).data || {};
//var coinscn = Math.floor(Math.random() * 10) + 10; 
var title = ['12%', '21%', '5%', '8%', '2%', '10%', '50%', '83%','100%','76']; 
var tl = title[Math.floor(Math.random() * title.length)];
var tpk = 
[
"rophi","caro","cachot","caloc","laukinh","catra","came","catre","caco","cachim","luon","dieuhong","cangu","cahoi","cachep","canoc","cathu","camoi","cakiem","matquy","mattrang","bachtuoc","carong","camap","mapbua","cavoi"
];
const hi = tpk[Math.floor(Math.random()*tpk.length)];
          const fs = require("fs-extra");
  const request = require("request");
const axios = require('axios');
const res = await axios.get(`http://api.uchihaobito.site/work&id=${hi}`);  
var a = res.data.data1;
var mn = res.data.money;
let data = (await Currencies.getData(senderID)).data || {};
          Currencies.increaseMoney(event.senderID, parseInt(mn));
api.unsendMessage(handleReply.messageID);
          let callback = function ()
          {  api.sendMessage({body:`🎣 ==『 𝗖𝗔̂𝗨 𝗖𝗔́ 𝗞𝗜𝗘̂́𝗠 𝗧𝗜𝗘̂̀𝗡 』==🎣
━━━━━━━━━━━━━━━━━━━━
🐟 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗮̂𝘂 𝗱𝗶́𝗻𝗵 ${res.data.name}

💵 𝗖𝗮́ 𝗰𝗼́ 𝗴𝗶𝗮́: ${res.data.money}
⚓ 𝗟𝗼𝗮̣𝗶 𝗖𝗮̂̀𝗻: red
🕵️ 𝗟𝗼𝗮̣𝗶 𝗖𝗮́: ${res.data.rarity}

🎏 𝗚𝗶𝗼̛́𝗶 𝘁𝗵𝗶𝗲̣̂𝘂: ${res.data.des}
🌸 𝗗𝘂̀𝗻𝗴 𝘄𝗼𝗿𝗸 𝗹𝗶𝘀𝗰𝗮 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗰𝗮́ 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́`, attachment: fs.createReadStream(__dirname + `/cache/tp1k.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tp1k.png`), event.messageID);
      };
      request(encodeURI(a)).pipe(fs.createWriteStream(__dirname + `/cache/tp1k.png`)).on("close", callback);
        }
            break;
            case "pink": {
              var title = ['12%', '21%', '5%', '8%', '2%', '10%', '50%', '83%','100%','76']; 
var tl = title[Math.floor(Math.random() * title.length)];
var tpk = 
[
"rophi","caro","cachot","caloc","laukinh","catra","came","catre","caco","cachim","luon","dieuhong","cangu","cahoi","cachep","canoc","cathu","camoi","cakiem","matquy","mattrang","bachtuoc","carong","camap","mapbua","cavoi"
];
const hi = tpk[Math.floor(Math.random()*tpk.length)];
          const fs = require("fs-extra");
  const request = require("request");
const axios = require('axios');
const res = await axios.get(`http://api.uchihaobito.site/work&id=${hi}`);  
var a = res.data.data1;
var mn = res.data.money;
let data = (await Currencies.getData(senderID)).data || {};
          Currencies.increaseMoney(event.senderID, parseInt(mn));
api.unsendMessage(handleReply.messageID);
          let callback = function ()
          {  api.sendMessage({body:`🎣 ==『 𝗖𝗔̂𝗨 𝗖𝗔́ 𝗞𝗜𝗘̂́𝗠 𝗧𝗜𝗘̂̀𝗡 』==🎣
━━━━━━━━━━━━━━━━━━━━
🐟 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗮̂𝘂 𝗱𝗶́𝗻𝗵 ${res.data.name}

💵 𝗖𝗮́ 𝗰𝗼́ 𝗴𝗶𝗮́: ${res.data.money}
⚓ 𝗟𝗼𝗮̣𝗶 𝗖𝗮̂̀𝗻: pink
🕵️ 𝗟𝗼𝗮̣𝗶 𝗖𝗮́: ${res.data.rarity}

🎏 𝗚𝗶𝗼̛́𝗶 𝘁𝗵𝗶𝗲̣̂𝘂: ${res.data.des}
🌸 𝗗𝘂̀𝗻𝗴 𝘄𝗼𝗿𝗸 𝗹𝗶𝘀𝗰𝗮 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗰𝗮́ 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́`, attachment: fs.createReadStream(__dirname + `/cache/tp1k.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tp1k.png`), event.messageID);
      };
      request(encodeURI(a)).pipe(fs.createWriteStream(__dirname + `/cache/tp1k.png`)).on("close", callback);
            }
break;
case "black": {
var title = ['12%', '21%', '5%', '8%', '2%', '10%', '50%', '83%','100%','76']; 
var tl = title[Math.floor(Math.random() * title.length)];
var tpk = 
[
"rophi","caro","cachot","caloc","laukinh","catra","came","catre","caco","cachim","luon","dieuhong","cangu","cahoi","cachep","canoc","cathu","camoi","cakiem","matquy","mattrang","bachtuoc","carong","camap","mapbua","cavoi"
];
const hi = tpk[Math.floor(Math.random()*tpk.length)];
          const fs = require("fs-extra");
  const request = require("request");
const axios = require('axios');
const res = await axios.get(`http://api.uchihaobito.site/work&id=${hi}`);  
var a = res.data.data1;
var mn = res.data.money;
let data = (await Currencies.getData(senderID)).data || {};
          Currencies.increaseMoney(event.senderID, parseInt(mn));
api.unsendMessage(handleReply.messageID);
          let callback = function ()
          {  api.sendMessage({body:`🎣 ==『 𝗖𝗔̂𝗨 𝗖𝗔́ 𝗞𝗜𝗘̂́𝗠 𝗧𝗜𝗘̂̀𝗡 』==🎣
━━━━━━━━━━━━━━━━━━━━
🐟 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗮̂𝘂 𝗱𝗶́𝗻𝗵 ${res.data.name}

💵 𝗖𝗮́ 𝗰𝗼́ 𝗴𝗶𝗮́: ${res.data.money}
⚓ 𝗟𝗼𝗮̣𝗶 𝗖𝗮̂̀𝗻: black
🕵️ 𝗟𝗼𝗮̣𝗶 𝗖𝗮́: ${res.data.rarity}

🎏 𝗚𝗶𝗼̛́𝗶 𝘁𝗵𝗶𝗲̣̂𝘂: ${res.data.des}
🌸 𝗗𝘂̀𝗻𝗴 𝘄𝗼𝗿𝗸 𝗹𝗶𝘀𝗰𝗮 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗰𝗮́ 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́`, attachment: fs.createReadStream(__dirname + `/cache/tp1k.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tp1k.png`), event.messageID);
      };
      request(encodeURI(a)).pipe(fs.createWriteStream(__dirname + `/cache/tp1k.png`)).on("close", callback);
}
            break;
case "blue": {
var title = ['12%', '21%', '5%', '8%', '2%', '10%', '50%', '83%','100%','76']; 
var tl = title[Math.floor(Math.random() * title.length)];
var tpk = 
[
"rophi","caro","cachot","caloc","laukinh","catra","came","catre","caco","cachim","luon","dieuhong","cangu","cahoi","cachep","canoc","cathu","camoi","cakiem","matquy","mattrang","bachtuoc","carong","camap","mapbua","cavoi"
];
const hi = tpk[Math.floor(Math.random()*tpk.length)];
          const fs = require("fs-extra");
  const request = require("request");
const axios = require('axios');
const res = await axios.get(`http://api.uchihaobito.site/work&id=${hi}`);  
var a = res.data.data1;
var mn = res.data.money;
let data = (await Currencies.getData(senderID)).data || {};
          Currencies.increaseMoney(event.senderID, parseInt(mn));
api.unsendMessage(handleReply.messageID);
          let callback = function ()
          {  api.sendMessage({body:`🎣 ==『 𝗖𝗔̂𝗨 𝗖𝗔́ 𝗞𝗜𝗘̂́𝗠 𝗧𝗜𝗘̂̀𝗡 』==🎣
━━━━━━━━━━━━━━━━━━━━
🐟 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗮̂𝘂 𝗱𝗶́𝗻𝗵 ${res.data.name}

💵 𝗖𝗮́ 𝗰𝗼́ 𝗴𝗶𝗮́: ${res.data.money}
⚓ 𝗟𝗼𝗮̣𝗶 𝗖𝗮̂̀𝗻: blue
🕵️ 𝗟𝗼𝗮̣𝗶 𝗖𝗮́: ${res.data.rarity}

🎏 𝗚𝗶𝗼̛́𝗶 𝘁𝗵𝗶𝗲̣̂𝘂: ${res.data.des}
🌸 𝗗𝘂̀𝗻𝗴 𝘄𝗼𝗿𝗸 𝗹𝗶𝘀𝗰𝗮 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗰𝗮́ 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́`, attachment: fs.createReadStream(__dirname + `/cache/tp1k.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tp1k.png`), event.messageID);
      };
      request(encodeURI(a)).pipe(fs.createWriteStream(__dirname + `/cache/tp1k.png`)).on("close", callback);
}
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("Vui lòng chọn red - blue - black - pink", event.threadID, event.messageID);
            	if (choose > 3 || choose < 1) return api.sendMessage("Vui lòng chọn red - blue - black - pink", event.threadID, event.messageID); 
    }
    }
      }
    }