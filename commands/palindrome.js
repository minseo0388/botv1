export default {
  name: 'palindrome',
  description: 'Check if a word or phrase is a palindrome.',
  async execute(message, args) {
    const text = args.join('').toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!text) return message.reply('확인할 단어나 문장을 입력하세요!');
    const isPal = text === text.split('').reverse().join('');
    await message.channel.send(isPal ? '✅ Palindrome!' : '❌ Not a palindrome.');
  },
};
