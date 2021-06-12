commands = []
bot.scanDir("./commands/", (data) => commands.push(require(data)))

module.exports = function (message) {
	if (message.payload) {
        commands.find(cmd => {
			if (message.command == cmd.info.name) return cmd.execute(message)
			cmd.info.aliases.forEach(name => {
				if (message.command == name) return cmd.execute(message)
			});
		});
	} else if (message.text) {
		var regexp = message.text.match(/^\!([a-zа-я]+)(.*)/is)
		if (regexp !== null) {
			message.command = regexp[1] // full arguments string
            commands.find(cmd => {
				if (message.command == cmd.info.name && bot.accessControl(message.from_id, cmd.info.access)) return cmd.execute(message)
                cmd.info.aliases.forEach(name => {
                    if (message.command == name) return cmd.execute(message)
                });
            });
		} else {
		}
	} else {
		return false
	}
}