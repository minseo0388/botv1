export default {
  name: 'avatarid',
  description: 'Show the avatar of a user by ID.',
  async execute(message, args) {
    const id = args[0];
    if (!id) return message.reply('유저 ID를 입력하세요!');
    try {
      const user = await message.client.users.fetch(id);
      await message.channel.send(`${user.username}의 아바타: ${user.displayAvatarURL({ dynamic: true })}`);
    } catch {
      message.reply('유저를 찾을 수 없습니다.');
    }
  },
};
