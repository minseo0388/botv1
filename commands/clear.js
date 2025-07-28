export default {
  name: 'clear',
  description: 'Bulk delete messages.',
  async execute(message, args) {
    if (!message.member.permissions.has('ManageMessages')) {
      return message.reply('You do not have permission to clear messages.');
    }
    const amount = parseInt(args[0], 10);
    if (isNaN(amount) || amount < 1 || amount > 100) {
      return message.reply('Please provide a number between 1 and 100.');
    }
    await message.channel.bulkDelete(amount, true);
    message.channel.send(`${amount} messages deleted.`).then(msg => setTimeout(() => msg.delete(), 3000));
  },
};
