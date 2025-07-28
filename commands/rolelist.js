export default {
  name: 'rolelist',
  description: 'List all roles in this server.',
  async execute(message) {
    const roles = message.guild.roles.cache.map(r => r.name).join(', ');
    await message.channel.send(roles || '이 서버에는 역할이 없습니다.');
  },
};
