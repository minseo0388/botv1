import { PermissionsBitField } from 'discord.js';

export default {
  name: 'kickid',
  description: 'Kick a user by ID.',
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
      return message.reply('You do not have permission to kick members.');
    }
    const id = args[0];
    if (!id) return message.reply('유저 ID를 입력하세요!');
    try {
      const member = await message.guild.members.fetch(id);
      await member.kick();
      message.channel.send(`${id}가 킥되었습니다.`);
    } catch {
      message.reply('유저를 킥할 수 없습니다.');
    }
  },
};
