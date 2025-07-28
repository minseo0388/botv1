import fetch from 'node-fetch';

export default {
  name: 'dogfact',
  description: 'Get a random dog fact.',
  async execute(message) {
    try {
      const res = await fetch('https://dog-api.kinduff.com/api/facts');
      const data = await res.json();
      await message.channel.send(`🐶 ${data.facts[0]}`);
    } catch {
      message.reply('강아지 사실을 가져올 수 없습니다.');
    }
  },
};
