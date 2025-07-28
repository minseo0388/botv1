import fetch from 'node-fetch';

export default {
  name: 'cat',
  description: 'Get a random cat image.',
  async execute(message) {
    try {
      const res = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await res.json();
      await message.channel.send(data[0].url);
    } catch {
      message.reply('고양이 이미지를 가져올 수 없습니다.');
    }
  },
};
