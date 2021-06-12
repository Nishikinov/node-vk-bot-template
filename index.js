const easyvk = require('easyvk')
global.bot = require('./functions')
const commands = require('./commands')

easyvk({
	utils: {
		bots: true 
  	},
  	v: '5.130',
	access_token: 'token'
}).then(vk => {
	const LPB = vk.bots.longpoll
	LPB.connect({
		forGetLongPollServer: {},
		forLongPollServer: {}
	}).then((connection) => {
		global.easyvk = easyvk
		global.vk = vk
		connection.on('message_new', (msg) => {
			commands(msg.message)
		})
		connection.on('message_event', (msg) => {
			commands(msg)
		})
	})
})