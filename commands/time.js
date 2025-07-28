export default {
  name: 'time',
  description: 'Show the current time (KST).',
  async execute(message) {
    const now = new Date();
    const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    await message.channel.send(`현재 KST 시각: ${kst.toISOString().replace('T', ' ').substring(0, 19)}`);
  },
};
