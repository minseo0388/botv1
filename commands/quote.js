import fetch from 'node-fetch';

export default {
  name: 'quote',
  description: 'Get a random inspirational quote.',
  async execute(message) {
    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      await message.channel.send(`"${data.content}" — ${data.author}`);
    } catch {
      message.reply('명언을 가져올 수 없습니다.');
    }
  },
};
