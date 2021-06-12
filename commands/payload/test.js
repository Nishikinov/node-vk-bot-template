module.exports.info = {
	name: "test",
    desc: "test",
    aliases: ["тест"]
};

module.exports.execute = (data) => {
	let params = {
		peer_id: data.peer_id,
		random_id: easyvk.randomId(),
		sticker_id: 15136
	}
	vk.call('messages.send', params);
};