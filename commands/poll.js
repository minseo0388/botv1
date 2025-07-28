export default {
  name: 'poll',
  description: 'Create a simple yes/no poll.',
  async execute(message, args) {
    const question = args.join(' ');
    if (!question) return message.reply('투표할 질문을 입력하세요!');
    const poll = await message.channel.send(`📊 **${question}**\n👍 = Yes | 👎 = No`);
    await poll.react('👍');
    await poll.react('👎');
  },
};
