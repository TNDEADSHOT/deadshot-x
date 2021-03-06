const {
	MessageEmbed, MessageButton, MessageActionRow
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { handlemsg } = require(`${process.cwd()}/handlers/functions`)
module.exports = {
	name: "ownergithub",
	category: "🔰 Info",
	aliases: ["ownergit"],
	cooldown: 2,
	usage: "ownergithub",
	description: "Shows you the Github and Source Code Information about this Bot",
	type: "bot",
	run: async (client, message, args, cmduser, text, prefix) => {
		let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
		
		try {	
			let button_public_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.github?.buttons.invite).setURL("https://discord.com/api/oauth2/authorize?client_id=922817050290827316&permissions=8&scope=bot")
			let button_support_dc = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.github?.buttons.dc).setURL("https://discord.gg/2wN7p6wM")
			let button_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.github?.buttons.botlist).setURL(``)
			const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
			message.reply({embeds: [new MessageEmbed()
				.setColor(es.color)
				.setFooter(client.getFooter(es))
				.setTimestamp()
				.setThumbnail("https://cdn.discordapp.com/avatars/772416455312146432/df7b527a701d9a1ab6d73213576fe295.webp?size=1024")
				.setTitle(client.la[ls].cmds.info.github?.title)
				.setURL("")
				.setDescription(client.la[ls].cmds.info.github?.description)],
components: allbuttons
			}).catch(error => console.log(error));
		} catch (e) {
			console.log(String(e.stack).grey.bgRed)
			return message.reply({embeds: [new MessageEmbed()
			  .setColor(es.wrongcolor)
			  .setFooter(client.getFooter(es))
			  .setTitle(client.la[ls].common.erroroccur)
			  .setDescription(eval(client.la[ls]["cmds"]["info"]["color"]["variable2"]))
			]});
		}
	}
}
/**
 * @INFO
 * Bot Coded by TN DEADSHOT#8167 | https://dsc.gg/deadshotgaming
 * @INFO
 * Work for Deadshot X Development | https://dsc.gg/deadshotgaming 
 * @INFO
 * Please mention him / Deadshot X Development, when using this Code! 
 * @INFO
 */
