import { PermissionsBitField } from 'discord.js';

export default {
  name: 'ban',
  description: 'Ban a user from the server.',
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      return message.reply('You do not have permission to ban members.');
    }
    const member = message.mentions.members.first();
    if (!member) return message.reply('Please mention a user to ban.');
    if (!member.bannable) return message.reply('I cannot ban this user.');
    await member.ban();
    message.channel.send(`${member.user.tag} has been banned.`);
  },
};
