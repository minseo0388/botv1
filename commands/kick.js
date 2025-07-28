import { PermissionsBitField } from 'discord.js';

export default {
  name: 'kick',
  description: 'Kick a user from the server.',
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
      return message.reply('You do not have permission to kick members.');
    }
    const member = message.mentions.members.first();
    if (!member) return message.reply('Please mention a user to kick.');
    if (!member.kickable) return message.reply('I cannot kick this user.');
    await member.kick();
    message.channel.send(`${member.user.tag} has been kicked.`);
  },
};
