import { EmbedBuilder } from 'discord.js';

export default {
  name: 'userinfo',
  description: 'Show information about a user.',
  async execute(message) {
    const user = message.mentions.users.first() || message.author;
    const member = message.guild.members.cache.get(user.id);
    const embed = new EmbedBuilder()
      .setTitle(`${user.username}님의 정보`)
      .setColor(0x00bfff)
      .setThumbnail(user.displayAvatarURL())
      .addFields(
        { name: 'ID', value: user.id, inline: true },
        { name: '가입일', value: `<t:${Math.floor(member.joinedTimestamp/1000)}:D>`, inline: true },
        { name: '계정 생성일', value: `<t:${Math.floor(user.createdTimestamp/1000)}:D>`, inline: true }
      )
      .setFooter({ text: 'Bot by Naesung#3399' });
    await message.channel.send({ embeds: [embed] });
  },
};
