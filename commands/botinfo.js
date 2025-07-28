import { EmbedBuilder } from 'discord.js';

export default {
  name: 'botinfo',
  description: 'Show information about the bot.',
  async execute(message, args, client) {
    const embed = new EmbedBuilder()
      .setTitle('Bot Info')
      .addFields(
        { name: '이름', value: client.user.username, inline: true },
        { name: 'ID', value: client.user.id, inline: true },
        { name: '서버 수', value: `${client.guilds.cache.size}`, inline: true },
        { name: '유저 수', value: `${client.users.cache.size}`, inline: true }
      )
      .setFooter({ text: 'Bot by Naesung#3399' });
    await message.channel.send({ embeds: [embed] });
  },
};
