export default {
  name: 'coin',
  description: 'Flip a coin (heads or tails).',
  async execute(message) {
    const result = Math.random() < 0.5 ? '앞면 (Heads)' : '뒷면 (Tails)';
    await message.channel.send(`🪙 ${result}`);
  },
};
