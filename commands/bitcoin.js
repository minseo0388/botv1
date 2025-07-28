import fetch from 'node-fetch';

export default {
  name: 'bitcoin',
  description: 'Get the current price of Bitcoin in USD.',
  async execute(message) {
    try {
      const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
      const data = await res.json();
      await message.channel.send(`Bitcoin price: $${data.bpi.USD.rate}`);
    } catch {
      message.reply('비트코인 가격을 가져올 수 없습니다.');
    }
  },
};
