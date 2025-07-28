import fetch from 'node-fetch';

export default {
  name: 'define',
  description: 'Get the definition of an English word.',
  async execute(message, args) {
    const word = args[0];
    if (!word) return message.reply('단어를 입력하세요!');
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
      const data = await res.json();
      if (Array.isArray(data) && data[0]?.meanings?.[0]?.definitions?.[0]?.definition) {
        await message.channel.send(`**${word}**: ${data[0].meanings[0].definitions[0].definition}`);
      } else {
        message.reply('정의를 찾을 수 없습니다.');
      }
    } catch {
      message.reply('정의 정보를 가져올 수 없습니다.');
    }
  },
};
