import fetch from 'node-fetch';

export default {
  name: 'bored',
  description: 'Suggest a random activity if you are bored.',
  async execute(message) {
    try {
      const res = await fetch('https://www.boredapi.com/api/activity');
      const data = await res.json();
      await message.channel.send(`💡 ${data.activity}`);
    } catch {
      message.reply('추천 활동을 가져올 수 없습니다.');
    }
  },
};
