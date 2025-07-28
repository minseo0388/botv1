let startTime = Date.now();
export default {
  name: 'uptime',
  description: 'Show how long the bot has been online.',
  async execute(message) {
    const ms = Date.now() - startTime;
    const sec = Math.floor((ms / 1000) % 60);
    const min = Math.floor((ms / (1000 * 60)) % 60);
    const hr = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const day = Math.floor(ms / (1000 * 60 * 60 * 24));
    await message.channel.send(`Uptime: ${day}d ${hr}h ${min}m ${sec}s`);
  },
};
