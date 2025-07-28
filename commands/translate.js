import fetch from 'node-fetch';

export default {
  name: 'translate',
  description: 'Translate text to English using LibreTranslate API.',
  async execute(message, args) {
    const text = args.join(' ');
    if (!text) return message.reply('번역할 문장을 입력하세요!');
    try {
      const res = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ q: text, source: 'auto', target: 'en', format: 'text' })
      });
      const data = await res.json();
      if (data.translatedText) {
        await message.channel.send(`영어 번역: ${data.translatedText}`);
      } else {
        message.reply('번역에 실패했습니다.');
      }
    } catch {
      message.reply('번역 중 오류가 발생했습니다.');
    }
  },
};
