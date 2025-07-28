import fetch from 'node-fetch';

export default {
  name: 'urban',
  description: 'Search Urban Dictionary.',
  async execute(message, args) {
    const term = args.join(' ');
    if (!term) return message.reply('검색할 단어를 입력하세요!');
    try {
      const res = await fetch(`https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(term)}`);
      const data = await res.json();
      if (data.list && data.list.length > 0) {
        await message.channel.send(`**${term}**: ${data.list[0].definition}`);
      } else {
        message.reply('정의가 없습니다.');
      }
    } catch {
      message.reply('Urban Dictionary에서 정의를 가져올 수 없습니다.');
    }
  },
};
