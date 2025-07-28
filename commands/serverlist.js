export default {
  name: 'serverlist',
  description: 'List all servers the bot is in (admin only).',
  async execute(message, args, client) {
    if (!message.author.id || message.author.id !== client.application.owner.id) return message.reply('관리자만 사용할 수 있습니다.');
    const guilds = client.guilds.cache.map(g => `${g.name} (${g.id})`).join('\n');
    await message.author.send(guilds || '서버가 없습니다.');
    await message.reply('서버 목록을 DM으로 보냈습니다.');
  },
};
