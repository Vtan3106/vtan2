module.exports.config = {
  name: "console",
  version: "1.0.0",
  hasPermssion: 3,
  credits: "Niiozic chứ JRT con cặc",
  description: "Làm cho console đẹp hơn",
  commandCategory: "No prefix",
  usages: "console ",
  cooldowns: 0
};
module.exports.handleEvent = async function ({
  api: a,
  args: b,
  Users: c,
  event: d,
  Threads: e,
  utils: f,
  client: g
}) {
  let {
    messageID: h,
    threadID: i,
    senderID: j,
    mentions: k
  } = d;
  const l = require("chalk");
  const m = require("moment-timezone");
  var n = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss DD/MM/YYYY");
  const o = global.data.threadData.get(d.threadID) || {};
  if (typeof o.console !== "undefined" && o.console == true) {
    return;
  }
  ;
  if (d.senderID == global.data.botID) {
    return;
  }
  ;
  var p = global.data.threadInfo.get(d.threadID).threadName || "Tên không tồn tại";
  var q = await c.getNameUser(d.senderID);
  var r = d.body || "Ảnh, video hoặc kí tự đặc biệt";
  /*var t = "CC66FF";
  var u = "3366FF";
  var v = "0066FF";
  var x = "FF66FF";
  var w = "0033FF";
  var y = "9966FF";
  var z = "6666FF";
  var b = "0000FF";
  console.log(l.hex("#" + x)("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓") + "\n" + l.hex("#" + t)("┣➤ Tên nhóm: " + p) + "\n" + l.hex("#" + y)("┣➤ ID nhóm: " + d.threadID) + "\n" + l.hex("#" + z)("┣➤ Tên người dùng: " + q) + "\n" + l.hex("#" + u)("┣➤ ID người dùng: " + d.senderID) + "\n" + l.hex("#" + v)("┣➤ Nội dung: " + r) + "\n" + l.hex("#" + w)("┣➤ Thời gian: " + n) + "\n" + l.hex("#" + b)("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"));*/
  console.log(`${l.hex("#FF66FF")("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")}
${l.hex("#CC66FF")(`┣➤ Tên nhóm: ${p}`)}
${l.hex("#00FF00")(`┣➤ ID nhóm: ${d.threadID}`)}
${l.hex("#6666FF")(`┣➤ Tên người dùng: ${q}`)} 
${l.hex("#FF0000")(`┣➤ ID người dùng: ${d.senderID}`)}
${l.hex("#0066FF")(`┣➤ Nội dung: ${r}`)}
${l.hex("#FFFF00")(`┣➤ Thời gian: ${n}`)}
${l.hex("#0000FF")("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")}`);
};
module.exports.run = async function ({
  api: a,
  args: b,
  Users: c,
  event: d,
  Threads: e,
  utils: f,
  client: g
}) {};