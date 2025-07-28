export default {
  name: 'mock',
  description: 'Mock your message (random upper/lowercase).',
  async execute(message, args) {
    if (!args.length) return message.reply('문장을 입력하세요!');
    const text = args.join(' ');
    const mocked = text.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
    await message.channel.send(mocked);
  },
};
