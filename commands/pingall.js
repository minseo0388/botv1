export default {
  name: 'pingall',
  description: 'Mention everyone in the server (admin only).',
  async execute(message) {
    if (!message.member.permissions.has('Administrator')) return message.reply('관리자만 사용할 수 있습니다.');
    await message.channel.send('@everyone');
  },
};
