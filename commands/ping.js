module.exports.info = {
	name: "ping",
    desc: "Проверяем, жив ли бот.",
    aliases: ["пинг"],
    emoji: "💤"
};

module.exports.execute = (data) => {
	wc.send("", data.peer_id, {sticker_id: 15137}) 
};