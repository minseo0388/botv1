export default {
  name: 'repeat',
  description: 'Repeat your message a number of times (max 5).',
  async execute(message, args) {
    const count = Math.min(parseInt(args[0], 10) || 1, 5);
    const text = args.slice(1).join(' ');
    if (!text) return message.reply('반복할 문장을 입력하세요!');
    await message.channel.send(Array(count).fill(text).join('\n'));
  },
};
