export default {
  name: 'password',
  description: 'Generate a random password.',
  async execute(message, args) {
    const length = parseInt(args[0], 10) || 12;
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let pwd = '';
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    await message.author.send(`랜덤 비밀번호: ${pwd}`);
    await message.reply('비밀번호를 DM으로 보냈습니다.');
  },
};
