import { EmbedBuilder } from 'discord.js';
import { readdirSync } from 'fs';
import path from 'path';

export default {
  name: 'help',
  description: 'Show all available commands and their descriptions.',
  async execute(message) {
    // Dynamically load all commands for up-to-date help
    const commandsPath = path.join(process.cwd(), 'commands');
    const commandFiles = readdirSync(commandsPath).filter(f => f.endsWith('.js'));
    const commands = [];
    for (const file of commandFiles) {
      const { default: cmd } = await import(`./${file}`);
      if (cmd?.name && cmd?.description) {
        commands.push({ name: cmd.name, description: cmd.description });
      }
    }
    const embed = new EmbedBuilder()
      .setTitle('도움말 (Help)')
      .setColor(0x32CD32)
      .setDescription('사용 가능한 명령어 목록입니다:')
      .addFields(commands.map(cmd => ({ name: cmd.name, value: cmd.description, inline: true })))
      .setFooter({ text: 'NEL, 모든 권리를 보유합니다.' });
    await message.channel.send({ embeds: [embed] });
  },
};
