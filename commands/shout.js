export default {
  name: 'shout',
  description: 'Make your message uppercase and add exclamation marks.',
  async execute(message, args) {
    if (!args.length) return message.reply('외칠 문장을 입력하세요!');
    await message.channel.send(args.join(' ').toUpperCase() + '!!!');
  },
};
