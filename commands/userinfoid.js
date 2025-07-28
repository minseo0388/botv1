export default {
  name: 'userinfoid',
  description: 'Show info for a user by ID.',
  async execute(message, args) {
    const id = args[0];
    if (!id) return message.reply('유저 ID를 입력하세요!');
    try {
      const user = await message.client.users.fetch(id);
      await message.channel.send(`${user.username}#${user.discriminator} (ID: ${user.id})`);
    } catch {
      message.reply('유저를 찾을 수 없습니다.');
    }
  },
};
