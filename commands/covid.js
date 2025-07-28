import fetch from 'node-fetch';

export default {
  name: 'covid',
  description: 'Get the latest global COVID-19 stats.',
  async execute(message) {
    try {
      const res = await fetch('https://disease.sh/v3/covid-19/all');
      const data = await res.json();
      await message.channel.send(`🌐 전세계 코로나19 현황\n확진: ${data.cases}\n사망: ${data.deaths}\n완치: ${data.recovered}`);
    } catch {
      message.reply('코로나19 정보를 가져올 수 없습니다.');
    }
  },
};
