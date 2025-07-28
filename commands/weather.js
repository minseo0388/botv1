import fetch from 'node-fetch';
import { EmbedBuilder } from 'discord.js';

export default {
  name: 'weather',
  description: 'Get current weather and forecast for a city (OpenWeatherMap, set your API key).',
  async execute(message, args) {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const city = args.join(' ');
    if (!city) return message.reply('Please provide a city name!');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=kr`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=kr`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();

      // Try to get forecast (next 3 days, noon)
      let forecastMsg = '';
      try {
        const fres = await fetch(forecastUrl);
        if (fres.ok) {
          const fdata = await fres.json();
          // Get next 3 days at 12:00
          const days = {};
          for (const item of fdata.list) {
            const date = item.dt_txt.split(' ')[0];
            const hour = item.dt_txt.split(' ')[1];
            if (hour === '12:00:00' && Object.keys(days).length < 3) {
              days[date] = `${item.weather[0].description}, ${item.main.temp}°C`;
            }
          }
          forecastMsg = Object.entries(days).map(([d, v]) => `**${d}**: ${v}`).join('\n');
        }
      } catch {}

      const embed = new EmbedBuilder()
        .setTitle(`🌤️ ${data.name} 날씨 정보`)
        .setDescription(`${data.weather[0].description}`)
        .addFields(
          { name: '온도', value: `${data.main.temp}°C (체감: ${data.main.feels_like}°C)`, inline: true },
          { name: '습도', value: `${data.main.humidity}%`, inline: true },
          { name: '풍속', value: `${data.wind.speed} m/s`, inline: true },
        )
        .setFooter({ text: 'Powered by OpenWeatherMap' });
      if (forecastMsg) embed.addFields({ name: '3일 예보 (정오)', value: forecastMsg });
      await message.channel.send({ embeds: [embed] });
    } catch (e) {
      if (e.message === 'City not found') {
        message.reply('도시를 찾을 수 없습니다. 도시 이름을 확인하세요.');
      } else {
        message.reply('날씨 정보를 가져오는 중 오류가 발생했습니다.');
      }
    }
  },
};
