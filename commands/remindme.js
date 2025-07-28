export default {
  name: 'remindme',
  description: 'Set a reminder (in seconds).',
  async execute(message, args) {
    const sec = parseInt(args[0], 10);
    if (isNaN(sec) || sec < 1 || sec > 86400) return message.reply('Please provide a number of seconds (1-86400).');
    const reminder = args.slice(1).join(' ') || 'Reminder!';
    await message.reply(`I will remind you in ${sec} seconds.`);
    setTimeout(() => {
      message.reply(reminder);
    }, sec * 1000);
  },
};
