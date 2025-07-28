export default {
  name: 'emojilist',
  description: 'List all custom emojis in this server.',
  async execute(message) {
    const emojis = message.guild.emojis.cache.map(e => e.toString()).join(' ');
    await message.channel.send(emojis || '이 서버에는 커스텀 이모지가 없습니다.');
  },
};
