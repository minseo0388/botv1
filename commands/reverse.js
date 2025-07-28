export default {
  name: 'reverse',
  description: 'Reverse your message.',
  async execute(message, args) {
    if (!args.length) return message.reply('Please provide text to reverse!');
    await message.channel.send(args.join(' ').split('').reverse().join(''));
  },
};
