import { EmbedBuilder } from 'discord.js';

export default {
  name: 'profile',
  description: 'Show your Discord profile info.',
  async execute(message) {
    const user = message.author;
    const embed = new EmbedBuilder()
      .setTitle(`${user.username}님의 프로필`)
      .setThumbnail(user.displayAvatarURL())
      .addFields(
        { name: 'ID', value: user.id, inline: true },
        { name: '계정 생성일', value: `<t:${Math.floor(user.createdTimestamp/1000)}:D>`, inline: true }
      )
      .setFooter({ text: 'Bot by Naesung#3399' });
    await message.channel.send({ embeds: [embed] });
  },
};
