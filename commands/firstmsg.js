export default {
  name: 'firstmsg',
  description: 'Show the first message in this channel.',
  async execute(message) {
    const msgs = await message.channel.messages.fetch({ after: 0, limit: 1 });
    const first = msgs.first();
    if (first) {
      await message.channel.send(`첫 메시지: ${first.url}`);
    } else {
      message.reply('첫 메시지를 찾을 수 없습니다.');
    }
  },
};
