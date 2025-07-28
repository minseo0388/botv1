export default {
  name: 'chooseuser',
  description: 'Randomly choose a user from the server.',
  async execute(message) {
    const members = message.guild.members.cache.filter(m => !m.user.bot).map(m => m.user.username);
    if (!members.length) return message.reply('선택할 유저가 없습니다.');
    const chosen = members[Math.floor(Math.random() * members.length)];
    await message.channel.send(`선택된 유저: ${chosen}`);
  },
};
