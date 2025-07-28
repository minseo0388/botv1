export default {
  name: 'remind',
  description: 'Remind yourself after a set time (in minutes).',
  async execute(message, args) {
    const min = parseInt(args[0], 10);
    if (isNaN(min) || min < 1 || min > 1440) return message.reply('1~1440분 사이의 숫자를 입력하세요!');
    const reminder = args.slice(1).join(' ') || 'Reminder!';
    await message.reply(`${min}분 후에 알림을 드릴게요.`);
    setTimeout(() => {
      message.reply(reminder);
    }, min * 60 * 1000);
  },
};
