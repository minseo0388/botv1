export default {
  name: 'math',
  description: 'Calculate a math expression.',
  async execute(message, args) {
    const expr = args.join(' ');
    if (!expr) return message.reply('계산할 수식을 입력하세요!');
    try {
      // eslint-disable-next-line no-eval
      const result = eval(expr);
      await message.channel.send(`결과: ${result}`);
    } catch {
      message.reply('잘못된 수식입니다.');
    }
  },
};
