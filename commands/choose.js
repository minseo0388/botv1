export default {
  name: 'choose',
  description: 'Randomly choose one of the provided options.',
  async execute(message, args) {
    if (args.length < 2) return message.reply('Please provide at least two options!');
    const choice = args[Math.floor(Math.random() * args.length)];
    await message.channel.send(`I choose: **${choice}**`);
  },
};
