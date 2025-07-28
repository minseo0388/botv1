export default {
  name: 'servericon',
  description: 'Show the server icon.',
  async execute(message) {
    if (!message.guild.iconURL()) return message.reply('This server has no icon.');
    await message.channel.send(`서버 아이콘: ${message.guild.iconURL({ dynamic: true, size: 4096 })}`);
  },
};
