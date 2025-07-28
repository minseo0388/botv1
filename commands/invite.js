export default {
  name: 'invite',
  description: 'Get the bot invite link.',
  async execute(message, args, client) {
    const link = `https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`;
    await message.channel.send(`Invite me to your server: ${link}`);
  },
};
