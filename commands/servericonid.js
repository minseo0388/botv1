export default {
  name: 'servericonid',
  description: 'Show the icon of a server by ID (bot must be in the server).',
  async execute(message, args, client) {
    const id = args[0];
    if (!id) return message.reply('서버 ID를 입력하세요!');
    try {
      const guild = await client.guilds.fetch(id);
      if (!guild.iconURL()) return message.reply('이 서버에는 아이콘이 없습니다.');
      await message.channel.send(`${guild.name}의 아이콘: ${guild.iconURL({ dynamic: true, size: 4096 })}`);
    } catch {
      message.reply('서버를 찾을 수 없습니다.');
    }
  },
};
