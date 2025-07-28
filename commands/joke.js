import fetch from 'node-fetch';

export default {
  name: 'joke',
  description: 'Get a random joke.',
  async execute(message) {
    try {
      const res = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
      const data = await res.json();
      await message.channel.send(data.joke || 'No joke found.');
    } catch {
      message.reply('농담을 가져올 수 없습니다.');
    }
  },
};
