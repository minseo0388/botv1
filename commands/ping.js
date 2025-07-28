import { EmbedBuilder } from 'discord.js';

export default {
  name: 'ping',
  description: 'Check bot latency.',
  async execute(message) {
    const sent = await message.channel.send('Pinging...');
    sent.edit(`:ping_pong: ${sent.createdTimestamp - message.createdTimestamp}ms was taken.`);
  },
};
