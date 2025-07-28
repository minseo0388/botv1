export default {
  name: 'say',
  description: 'Make the bot say something.',
  async execute(message, args) {
    if (!args.length) return message.reply('Please provide a message for me to say!');
    await message.channel.send(args.join(' '));
  },
};
