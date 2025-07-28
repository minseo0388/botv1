import { EmbedBuilder } from 'discord.js';

export default {
  name: 'serverinfo',
  description: 'Show server information.',
  async execute(message) {
    const { guild } = message;
    const embed = new EmbedBuilder()
      .setTitle('Server Information')
      .setColor(0x7289da)
      .addFields(
        { name: 'Server Name', value: guild.name, inline: true },
        { name: 'Member Count', value: `${guild.memberCount}`, inline: true },
        { name: 'Owner', value: `<@${guild.ownerId}>`, inline: true }
      )
      .setFooter({ text: 'Bot by Naesung#3399' });
    await message.channel.send({ embeds: [embed] });
  },
};
