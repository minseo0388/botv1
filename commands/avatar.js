export default {
  name: 'avatar',
  description: 'Show the avatar of a user.',
  async execute(message) {
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`${user.username}의 아바타: ${user.displayAvatarURL({ dynamic: true })}`);
  },
};
