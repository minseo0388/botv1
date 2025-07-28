export default {
  name: 'removerole',
  description: 'Remove a role from a mentioned user.',
  async execute(message, args) {
    if (!message.member.permissions.has('ManageRoles')) {
      return message.reply('You do not have permission to remove roles.');
    }
    const member = message.mentions.members.first();
    const roleName = args.slice(1).join(' ');
    if (!member || !roleName) return message.reply('사용자와 역할 이름을 모두 입력하세요!');
    const role = message.guild.roles.cache.find(r => r.name === roleName);
    if (!role) return message.reply('해당 역할을 찾을 수 없습니다.');
    await member.roles.remove(role);
    message.channel.send(`${member.user.tag}에서 역할이 제거되었습니다: ${role.name}`);
  },
};
