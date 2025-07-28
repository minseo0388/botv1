
import { Client, GatewayIntentBits, Partials, Events, EmbedBuilder, PermissionsBitField } from 'discord.js';
import config from './config.json' assert { type: "json" };
const prefix = config.prefix;
const statuses = [
  `Operating!`,
  `Type n@`,
  `Copyright Naesung#3399`
];

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.Channel]
});




client.once(Events.ClientReady, () => {
  console.log(`HouBot is now online as ${client.user.tag}`);
  setInterval(() => {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setPresence({
      activities: [{ name: status }],
      status: 'dnd',
    });
  }, 4000);
});



import { readdirSync } from 'fs';
import path from 'path';

// Dynamic command loader
const commands = new Map();
const commandsPath = path.join(process.cwd(), 'commands');
for (const file of readdirSync(commandsPath).filter(f => f.endsWith('.js'))) {
  const { default: command } = await import(`./commands/${file}`);
  if (command?.name && typeof command.execute === 'function') {
    commands.set(command.name, command);
  }
}

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/\s+/);
  const cmd = args.shift().toLowerCase();

  if (commands.has(cmd)) {
    try {
      await commands.get(cmd).execute(message, args, client);
    } catch (err) {
      console.error(err);
      message.reply('명령 실행 중 오류가 발생했습니다.');
    }
  }
});

client.login(config.Token);