import fetch from 'node-fetch';

export default {
  name: 'dog',
  description: 'Get a random dog image.',
  async execute(message) {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();
      await message.channel.send(data.message);
    } catch {
      message.reply('강아지 이미지를 가져올 수 없습니다.');
    }
  },
};
