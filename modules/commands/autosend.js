module.exports.config = {
    name: 'autosendmessage',
    version: '10.02',
    hasPermssion: 2,
    credits: 'DC-Nam, Được Thanh Nguyên Update Lại',
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Hệ thống',
    usages: '[]',
    cooldowns: 3
};
const r = a => a[Math.floor(Math.random()*a.length)],
{get} = require('axios'),
config = [
  {
    timer: '6:00:00 AM',
    message: ['💸 ==== [ 𝗧𝗛𝗨𝗘̂ 𝗕𝗢𝗧 ] ==== 💸\n━━━━━━━━━━━━━━━━━━\n[🌟] ➝ 𝗧𝗵𝘂𝗲̂ 𝗕𝗼𝘁 𝟮𝟬𝗸/𝘁𝗵\n[🌐] ➝ 𝗟𝗶𝗻𝗸 𝗔𝗱𝗺𝗶𝗻 : https://www.facebook.com/AnhYeuEm.Tan06\n[🧸] ➝ 𝗧𝗵𝗼̂𝗻𝗴 𝗕𝗮́𝗼 𝗗𝗰 𝗧𝗵𝗶𝗲̂́𝘁 𝗟𝗮̣̂𝗽 𝗕𝗼̛̉𝗶 𝗔𝗱𝗺𝗶𝗻 : 𝗧𝗿𝗮̂̀𝗻 𝗩𝗮̆𝗻 𝗧𝗮̂𝗻\n━━━━━━━━━━━━━━━━━━\n⚜️ ==== [ 𝗠𝗨̛𝗢̛̣𝗡 𝗕𝗢𝗧 ] ==== ⚜️\n━━━━━━━━━━━━━━━━━━\n[🍠] ➝ 𝗬𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗵𝗼́𝗺 𝘁𝗿𝗲̂𝗻 𝟮𝟬 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻\n[💓] ➝ 𝗧𝘂̛̣ 𝗱𝘂̀𝗻𝗴 𝗹𝗮̂𝘂 𝗵𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝗰𝗵𝗼 𝗯𝗶𝗲̂́𝘁 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗺𝗼̛́𝗶\n[🤤] ➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴\n━━━━━━━━━━━━━━━━━━\n[⏰] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : {time}']
},
{
  timer: '11:00:00 AM',
  message: ['💸 ==== [ 𝗧𝗛𝗨𝗘̂ 𝗕𝗢𝗧 ] ==== 💸\n━━━━━━━━━━━━━━━━━━\n[🌟] ➝ 𝗧𝗵𝘂𝗲̂ 𝗕𝗼𝘁 𝟮𝟬𝗸/𝘁𝗵\n[🌐] ➝ 𝗟𝗶𝗻𝗸 𝗔𝗱𝗺𝗶𝗻 : https://www.facebook.com/AnhYeuEm.Tan06\n[🧸] ➝ 𝗧𝗵𝗼̂𝗻𝗴 𝗕𝗮́𝗼 𝗗𝗰 𝗧𝗵𝗶𝗲̂́𝘁 𝗟𝗮̣̂𝗽 𝗕𝗼̛̉𝗶 𝗔𝗱𝗺𝗶𝗻 : 𝗧𝗿𝗮̂̀𝗻 𝗩𝗮̆𝗻 𝗧𝗮̂𝗻\n━━━━━━━━━━━━━━━━━━\n⚜️ ==== [ 𝗠𝗨̛𝗢̛̣𝗡 𝗕𝗢𝗧 ] ==== ⚜️\n━━━━━━━━━━━━━━━━━━\n[🍠] ➝ 𝗬𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗵𝗼́𝗺 𝘁𝗿𝗲̂𝗻 𝟮𝟬 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻\n[💓] ➝ 𝗧𝘂̛̣ 𝗱𝘂̀𝗻𝗴 𝗹𝗮̂𝘂 𝗵𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝗰𝗵𝗼 𝗯𝗶𝗲̂́𝘁 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗺𝗼̛́𝗶\n[🤤] ➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴\n━━━━━━━━━━━━━━━━━━\n[⏰] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : {time}']
},
  {
    timer: '6:15:00 PM',
    message: ['💸 ==== [ 𝗧𝗛𝗨𝗘̂ 𝗕𝗢𝗧 ] ==== 💸\n━━━━━━━━━━━━━━━━━━\n[🌟] ➝ 𝗧𝗵𝘂𝗲̂ 𝗕𝗼𝘁 𝟮𝟬𝗸/𝘁𝗵\n[🌐] ➝ 𝗟𝗶𝗻𝗸 𝗔𝗱𝗺𝗶𝗻 : https://www.facebook.com/AnhYeuEm.Tan06\n[🧸] ➝ 𝗧𝗵𝗼̂𝗻𝗴 𝗕𝗮́𝗼 𝗗𝗰 𝗧𝗵𝗶𝗲̂́𝘁 𝗟𝗮̣̂𝗽 𝗕𝗼̛̉𝗶 𝗔𝗱𝗺𝗶𝗻 : 𝗧𝗿𝗮̂̀𝗻 𝗩𝗮̆𝗻 𝗧𝗮̂𝗻\n━━━━━━━━━━━━━━━━━━\n⚜️ ==== [ 𝗠𝗨̛𝗢̛̣𝗡 𝗕𝗢𝗧 ] ==== ⚜️\n━━━━━━━━━━━━━━━━━━\n[🍠] ➝ 𝗬𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗵𝗼́𝗺 𝘁𝗿𝗲̂𝗻 𝟮𝟬 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻\n[💓] ➝ 𝗧𝘂̛̣ 𝗱𝘂̀𝗻𝗴 𝗹𝗮̂𝘂 𝗵𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝗰𝗵𝗼 𝗯𝗶𝗲̂́𝘁 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗺𝗼̛́𝗶\n[🤤] ➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴\n━━━━━━━━━━━━━━━━━━\n[⏰] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : {time}']
  },
  {
    timer: '8:30:00 PM',
    message: ['💸 ==== [ 𝗧𝗛𝗨𝗘̂ 𝗕𝗢𝗧 ] ==== 💸\n━━━━━━━━━━━━━━━━━━\n[🌟] ➝ 𝗧𝗵𝘂𝗲̂ 𝗕𝗼𝘁 𝟮𝟬𝗸/𝘁𝗵\n[🌐] ➝ 𝗟𝗶𝗻𝗸 𝗔𝗱𝗺𝗶𝗻 : https://www.facebook.com/AnhYeuEm.Tan06\n[🧸] ➝ 𝗧𝗵𝗼̂𝗻𝗴 𝗕𝗮́𝗼 𝗗𝗰 𝗧𝗵𝗶𝗲̂́𝘁 𝗟𝗮̣̂𝗽 𝗕𝗼̛̉𝗶 𝗔𝗱𝗺𝗶𝗻 : 𝗧𝗿𝗮̂̀𝗻 𝗩𝗮̆𝗻 𝗧𝗮̂𝗻\n━━━━━━━━━━━━━━━━━━\n⚜️ ==== [ 𝗠𝗨̛𝗢̛̣𝗡 𝗕𝗢𝗧 ] ==== ⚜️\n━━━━━━━━━━━━━━━━━━\n[🍠] ➝ 𝗬𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗵𝗼́𝗺 𝘁𝗿𝗲̂𝗻 𝟮𝟬 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻\n[💓] ➝ 𝗧𝘂̛̣ 𝗱𝘂̀𝗻𝗴 𝗹𝗮̂𝘂 𝗵𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝗰𝗵𝗼 𝗯𝗶𝗲̂́𝘁 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗺𝗼̛́𝗶\n[🤤] ➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴\n━━━━━━━━━━━━━━━━━━\n[⏰] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : {time}']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '12:00:00 AM',
    message: ['\n==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n━━━━━━━━━━━━━━━━\n[🌯] ➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀ : {time}\n[🧸] ➝ 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝐬𝐚́𝐧𝐠 𝗳𝘂𝗹𝗹 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴\n[💬] ➝ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵 : {thinh}\n━━━━━━━━━━━━━━━━━━\n[🌭] ➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },
  {
    timer: '8:00:00 PM',
    message: ['\n==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n━━━━━━━━━━━━━━━━\n[🌯] ➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n[🧸] ➝ 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝐛𝐮𝐨̂̉𝐢 𝐭𝐨̂́𝐢 𝐯𝐮𝐢 𝐯𝐞̉ 𝐛𝐞̂𝐧 𝐠𝐢𝐚 đ𝐢̀𝐧𝐡\n[💬] ➝ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵 : {thinh}\n━━━━━━━━━━━━━━━━━━\n[🌭] ➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '6:00:00 PM',
    message: ['\n==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n━━━━━━━━━━━━━━━━\n[🌯] ➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀ : {time}\n[🧸] ➝ 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝐛𝐮𝐨̂̉𝐢 𝐭𝐨̂́𝐢 𝐯𝐮𝐢 𝐯𝐞̉ 𝐛𝐞̂𝐧 𝐠𝐢𝐚 đ𝐢̀𝐧𝐡\n[💬] ➝ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵 : {thinh}\n━━━━━━━━━━━━━━━━━━\n[🌭] ➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '10:00:00 PM',
    message: ['\n==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n━━━━━━━━━━━━━━━━\n[🌯] ➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀ : {time}\n[🧸] ➝ 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝐧𝐠𝐮̉ 𝐧𝐠𝐨𝐧\n[💬] ➝ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵 : {thinh}\n━━━━━━━━━━━━━━━━━━\n[🌭] ➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },
  {
    timer: '9:00:00 PM',
    message: ['\n==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n━━━━━━━━━━━━━━━━\n[🌯] ➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀ : {time}\n[🧸] ➝ 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝐛𝐮𝐨̂̉𝐢 𝐭𝐨̂́𝐢 𝐯𝐮𝐢 𝐯𝐞̉\n[💬] ➝ 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵 : {thinh}\n━━━━━━━━━━━━━━━━━━\n[🌭] ➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '',
    message: ['']
  },
  {
    timer: '10:00:00 AM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
  },
 {
    timer: '1:00:00 PM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
   },
  {
    timer: '2:00:00 PM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
   },
  {
    timer: '3:00:00 PM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
   },
  {
    timer: '4:20:00 PM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
   },
  {
    timer: '5:00:00 PM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
  },
  {
    timer: '7:00:00 PM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
  },
  {
    timer: '8:50:00 PM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
    },
  {
    timer: '9:10:00 PM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
    },
  {
    timer: '10:10:00 PM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
  },
 {
    timer: '11:00:00 PM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
 },
  {
    timer: '5:30:00 AM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
  },
  {
    timer: '7:00:00 AM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
  },
  {
    timer: '8:00:00 AM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
  },
  {
    timer: '9:00:00 AM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
  },
  {
    timer: '10:30:00 AM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
  },
  {
    timer: '12:00:00 PM',
    message: ['🍒 𝗧.𝗩.𝗧𝗔𝗡\n🌐 https://www.facebook.com/AnhYeuEm.Tan06']
  }
];
module.exports.onLoad = o => {
    if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
    global.autosendmessage_setinterval = setInterval(async function() {
        if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
            var msg = r(á.message);
var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');      
            msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://api.uchihaobito.site/thinh`)).data.url)
            msg = {
                body: msg, attachment: (await get((await get(`https://api.uchihaobito.site/vdgaisexy`)).data.url, {
                    responseType: 'stream'
                })).data
            };
            global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
        };
    }, 1000);
};
module.exports.run = () => {};