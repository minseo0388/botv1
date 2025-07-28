import { writeFileSync } from 'fs';

export default {
  name: 'chatarchive',
  description: 'Archive the last 100 messages in this channel to a text file and send it.',
  async execute(message) {
    const msgs = await message.channel.messages.fetch({ limit: 100 });
    const sorted = msgs.sort((a, b) => a.createdTimestamp - b.createdTimestamp);
    const lines = sorted.map(m => `[${new Date(m.createdTimestamp).toLocaleString()}] ${m.author.tag}: ${m.content}`).join('\n');
    const fileName = `chat-archive-${message.channel.id}.txt`;
    writeFileSync(fileName, lines, 'utf8');
    await message.channel.send({ files: [fileName] });
  },
};
