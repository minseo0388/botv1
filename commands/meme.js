import fetch from 'node-fetch';

export default {
  name: 'meme',
  description: 'Get a random meme from Reddit.',
  async execute(message) {
    try {
      const res = await fetch('https://meme-api.com/gimme');
      const data = await res.json();
      await message.channel.send(data.url);
    } catch {
      message.reply('밈을 가져올 수 없습니다.');
    }
  },
};
