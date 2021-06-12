module.exports.info = {
	name: "help",
    desc: "Показывает все доступные пользователю команды",
    aliases: ["помощь", "команды"],
    emoji: "❓"
};

module.exports.execute = (data) => {
    reply = "Список доступных команд:"
    commands.forEach(cmd => {
        reply += `\n${cmd.info.emoji || "🌐"} !${cmd.info.name} ${'[' + cmd.info.aliases.join('/') + ']' || ''} - ${cmd.info.desc}`
    });
	bot.send(reply, data.peer_id)
};