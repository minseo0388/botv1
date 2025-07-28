import fetch from 'node-fetch';

export default {
  name: 'wiki',
  description: 'Search Wikipedia and get a summary.',
  async execute(message, args) {
    const query = args.join(' ');
    if (!query) return message.reply('검색할 내용을 입력하세요!');
    try {
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data.extract) {
        await message.channel.send(`**${data.title}**\n${data.extract}`);
      } else {
        message.reply('No summary found.');
      }
    } catch {
      message.reply('위키백과에서 정보를 가져올 수 없습니다.');
    }
  },
};
