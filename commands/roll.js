export default {
  name: 'roll',
  description: 'Roll a dice (1-100).',
  async execute(message) {
    const roll = Math.floor(Math.random() * 100) + 1;
    await message.channel.send(`${message.author.username} rolled a ${roll}! 🎲`);
  },
};
