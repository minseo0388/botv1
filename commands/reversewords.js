export default {
  name: 'reversewords',
  description: 'Reverse the order of words in your message.',
  async execute(message, args) {
    if (!args.length) return message.reply('뒤집을 문장을 입력하세요!');
    await message.channel.send(args.reverse().join(' '));
  },
};
