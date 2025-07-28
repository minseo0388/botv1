import fetch from 'node-fetch';

export default {
  name: 'catfact',
  description: 'Get a random cat fact.',
  async execute(message) {
    try {
      const res = await fetch('https://catfact.ninja/fact');
      const data = await res.json();
      await message.channel.send(`🐱 ${data.fact}`);
    } catch {
      message.reply('고양이 사실을 가져올 수 없습니다.');
    }
  },
};
