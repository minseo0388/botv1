export default {
  name: 'servercount',
  description: 'Show the number of servers the bot is in.',
  async execute(message, args, client) {
    await message.channel.send(`이 봇은 ${client.guilds.cache.size}개의 서버에 있습니다.`);
  },
};
