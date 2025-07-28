export default {
  name: 'emoji',
  description: 'Send a random emoji.',
  async execute(message) {
    const emojis = ['😀','😂','😍','😎','😭','😡','👍','🙏','🎉','🔥','💯','🥳','🤖','😺','🍕','🍔','🍣','🍦','⚽','🏀','🎮','🚗','✈️','🌈','⭐'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    await message.channel.send(emoji);
  },
};
