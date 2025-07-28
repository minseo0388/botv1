const responses = [
  'Yes.', 'No.', 'Maybe.', 'Definitely!', 'Absolutely not.', 'Ask again later.', 'I don\'t know.', 'Probably.', 'Probably not.'
];
export default {
  name: '8ball',
  description: 'Ask the magic 8ball a question.',
  async execute(message, args) {
    if (!args.length) return message.reply('Ask a full question!');
    const response = responses[Math.floor(Math.random() * responses.length)];
    await message.channel.send(`🎱 ${response}`);
  },
};
