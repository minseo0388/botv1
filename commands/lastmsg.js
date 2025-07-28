export default {
  name: 'lastmsg',
  description: 'Show the last message in this channel.',
  async execute(message) {
    const msgs = await message.channel.messages.fetch({ limit: 1 });
    const last = msgs.first();
    if (last) {
      await message.channel.send(`마지막 메시지: ${last.url}`);
    } else {
      message.reply('마지막 메시지를 찾을 수 없습니다.');
    }
  },
};
