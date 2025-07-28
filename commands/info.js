import { EmbedBuilder } from 'discord.js';

export default {
  name: 'info',
  description: 'Show bot information.',
  async execute(message, args, client) {
    const embed = new EmbedBuilder()
      .setTitle('Bot Information')
      .setColor(0x3498db)
      .setDescription('This is a modern Discord bot!')
      .addFields(
        { name: 'Servers', value: `${client.guilds.cache.size}`, inline: true },
        { name: 'Users', value: `${client.users.cache.size}`, inline: true }
      )
      .setFooter({ text: 'Bot by Naesung#3399' });
    await message.channel.send({ embeds: [embed] });
  },
};
