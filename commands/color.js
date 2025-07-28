import fetch from 'node-fetch';

export default {
  name: 'color',
  description: 'Get info about a color (hex code).',
  async execute(message, args) {
    const hex = args[0]?.replace('#', '');
    if (!hex || !/^([0-9A-Fa-f]{6})$/.test(hex)) return message.reply('6자리 HEX 코드를 입력하세요!');
    try {
      const res = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`);
      const data = await res.json();
      await message.channel.send(`색상: #${hex}\n이름: ${data.name.value}\nRGB: ${data.rgb.value}`);
    } catch {
      message.reply('색상 정보를 가져올 수 없습니다.');
    }
  },
};
