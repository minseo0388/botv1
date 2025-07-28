import fetch from 'node-fetch';

export default {
  name: 'shorten',
  description: 'Shorten a URL using is.gd.',
  async execute(message, args) {
    const url = args[0];
    if (!url) return message.reply('단축할 URL을 입력하세요!');
    try {
      const res = await fetch(`https://is.gd/create.php?format=simple&url=${encodeURIComponent(url)}`);
      const short = await res.text();
      await message.channel.send(`Shortened URL: ${short}`);
    } catch {
      message.reply('URL을 단축할 수 없습니다.');
    }
  },
};
