import { PermissionsBitField } from 'discord.js';

export default {
  name: 'banid',
  description: 'Ban a user by ID.',
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      return message.reply('You do not have permission to ban members.');
    }
    const id = args[0];
    if (!id) return message.reply('유저 ID를 입력하세요!');
    try {
      await message.guild.members.ban(id);
      message.channel.send(`${id}가 밴되었습니다.`);
    } catch {
      message.reply('유저를 밴할 수 없습니다.');
    }
  },
};
