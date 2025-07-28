import fetch from 'node-fetch';

export default {
  name: 'npm',
  description: 'Get info about an npm package.',
  async execute(message, args) {
    const pkg = args[0];
    if (!pkg) return message.reply('패키지 이름을 입력하세요!');
    try {
      const res = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkg)}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      await message.channel.send(`**${data.name}**\n${data.description || 'No description.'}\nLatest: ${data['dist-tags'].latest}`);
    } catch {
      message.reply('패키지 정보를 가져올 수 없습니다.');
    }
  },
};
