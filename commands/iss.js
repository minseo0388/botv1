import fetch from 'node-fetch';

export default {
  name: 'iss',
  description: 'Get the current location of the International Space Station.',
  async execute(message) {
    try {
      const res = await fetch('http://api.open-notify.org/iss-now.json');
      const data = await res.json();
      await message.channel.send(`🛰️ ISS 현재 위치\n위도: ${data.iss_position.latitude}\n경도: ${data.iss_position.longitude}`);
    } catch {
      message.reply('ISS 위치 정보를 가져올 수 없습니다.');
    }
  },
};
