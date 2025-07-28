export default {
  name: 'membercount',
  description: 'Show the number of members in this server.',
  async execute(message) {
    await message.channel.send(`이 서버의 멤버 수: ${message.guild.memberCount}`);
  },
};
