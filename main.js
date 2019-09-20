const Discord = require("discord.js");
const config = require("./config.json");
const Embed = require("./embed.js");
const prefix = config.prefix;
const choose = require('./choose.js');
const dscl = new Discord.Client();
const client = new Discord.Client();
const bot = new Discord.Client();
let statuses = [`Operating!`, `Type n!help`, `Inquire to Naesung#5882`, `Refers to https://naesung.xyz`]



client.on("ready", () => {
    console.log(`Naesungbot is now online.`);

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];

        client.user.setPresence({ game: { name: status }, status: `dnd` });
        answered = true;
        cAnswer = "";
        userAnswer = "";
    }, 4000)
});

dscl.on("message", (message)=> {
    if(message.author.bot) return;
    if (message.channel.type === "dm") return;
    var message = message.content.split(" ");
    var cmd = message[0];

    if(cmd === `${prefix}ping`)
        message.channel.send('Sending......').then(function(ping) {
            ping.edit(`:ping_pong: ${ping.createdTimestamp - message.createdTimestamp}ms was taken. 
          Ping : ${ping.createdTimestamp}ms
          Message : ${message.createdTimestamp}ms`)
        })

    if (message.content.startsWith(`${prefix}help`)) {
        var InfoEmbed = new Discord.RichEmbed()
            .setColor("#2fce64")
            .setTitle(`Naesungbot Help Page`)
            .addField(`info`, `shows bot's information`, true)
            .addField(`serverinfo` ,`shows server's information `, true)
            .addField(`userinfo`, ` shows user's information `, true)
            .addField(`kick`, `kick someone form server`, true)
            .addField(`ban`, `ban server from server`, true)
            .setFooter("Naesungbot, All Rights Reserved", client.user.avatarURL);
        message.author.send(InfoEmbed);
        message.channel.send("Send to :regional_indicator_d::regional_indicator_m:.");
    }

    if (cmd === `${prefix}info`) {
        let serverebed = new Discord.RichEmbed()
            .setTitle("info")
            .setColor("#1e90ff")
            .addField("Number of User", bot.users.size)
            .addField("Number of Server", bot.guilds.size)
        return message.channel.send(serverebed);

    }
    if (message.content.startsWith(`${prefix}uptime`)) {
        message.channel.send(Embed.uptime(client))
    }

    if (message.content.startsWith(`${prefix}userinfo1`)) {
        let embed = new Discord.RichEmbed();
        embed.setAuthor(`User Information`)
        embed.setColor('#1e90ff')
        embed.setAuthor(message.author.username)
        embed.setDescription(`${message.author.username}님의 정보입니다!`)
        embed.setThumbnail(message.author.displayAvatarURL)
        embed.addField('Name:', ` ${message.author.username}#${message.author.discriminator} `)
        embed.addField('ID:', `${message.author.id}`)
        embed.addField('Creation date:', message.author.createdAt);
        message.channel.send(embed);
    }
    if (cmd === `${prefix}serverinfo1`) {

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
            .setDescription("Server Information")
            .setColor("#1e90ff")
            .setThumbnail(sicon)
            .addField("Server Name", message.guild.name)
            .addField("Created On", message.guild.createdAt)
            .addField("You Joined", message.member.joinedAt)
            .addField("Total Members", message.guild.memberCount)
            .addField("Roles", message.guild.roles)
            .addField("Owner", message.guild.owner)
            .addField("Channel", message.guild.channels / message.guild.voiceChannel)
            .addField("ID", message.guild.id);
        return message.channel.send(serverembed);

    }

    if (message.content.startsWith(`${prefix}kick`)) {

        const user = message.mentions.users.first();

        if (user) {

            const member = message.guild.member(user);

            if (member) {

                member.kick('당신은 이 서버의 규칙을 어기셨으므로 관리자의 결정에 따라 강퇴 되셨습니다.').then(() => {

                    message.reply(`${user.tag}이/가 성공적으로 추방되었습니다.`);
                }).catch(err => {

                    message.reply('해당 유저가 저의 권한보다 높거나 같기 때문에 강퇴를 시킬 수 없습니다.');

                    console.error(err);
                });
            } else {

                message.reply('해당 유저가 이 디스코드 방에 없습니다!');
            }

        } else {
            message.reply('당신은 해당 유저를 강퇴시킬 권한이 없습니다.');
        }
    }

    if (message.content.startsWith(`${prefix}ban`)) {

        const user = message.mentions.users.first();

        if (user) {

            const member = message.guild.member(user);

            if (member) {

                member.ban({
                    reason: '당신은 관리자의 결정에 따라 밴이 되셨습니다.',
                }).then(() => {

                    message.reply(`${user.tag}이/가 성공적으로 밴되었습니다.`);
                }).catch(err => {

                    message.reply('해당 유저가 저의 권한보다 높거나 같기 때문에 밴을 시킬 수 없습니다.');

                    console.error(err);
                });
            } else {

                message.reply('해당 유저가 이 디스코드 방에 없습니다!');
            }
        } else {

            message.reply('당신은 해당 유저를 밴시킬 권한이 없습니다.');
        }
    }

    if (message.content.startsWith(`${prefix}site`)) {
        message.channel.send("https://naesung.xyz")

    }
    if (message.content.startsWith(`${prefix}prefix`)) {
        message.channel.send(choose(message.content.replace(`${prefix}prefix`, 'n!'), client))

    }
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    if (message.content.startsWith(`${prefix}say`)) {

        const 말 = args.join(" ");
        message.delete().catch();
        message.channel.send(말);
    }
    if (message.content.startsWith(`${prefix}youtube`)) {
        let youtube = args.slice(0).join('+');

        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if (!youtube) return message.reply(`Please enter a keyword.`)
        if (!link) return message.reply("Please enter a keyword, no a link.")
        let embed = new Discord.RichEmbed()


            .setColor("RED")

            .setTimestamp()

            .addField('Action:', 'Searching on youtube')

            .addField("Word:", `${args.slice(0).join(' ')}`)

            .addField('Link:', `${link}`)

            .setFooter("Your avatar", message.author.avatarURL);

        message.channel.send(embed);
    }

    if(message.content.startsWith(`${prefix}saye`)){
        var code = args.join(" ");
        var embed = new Discord.RichEmbed()
            .setDescription(`${code}`)
        message.channel.send(embed)
    }

    if (message.content.startsWith(`${prefix}serverlist`)) {
        let bicon = bot.user.displayAvatarURL;
        let string = '';
        bot.guilds.forEach(guild => {
            string += guild.name + '\n';
        })
        let bt = bot.user.username;
        let botembed = new Discord.RichEmbed()
            .setColor("#000FF")
            .addField("Servers In", string)
            .setTimestamp()
            .setFooter("All Rights Reserved." + message.author.username, message.author.avatarURL);
        message.channel.send(botembed);
    }

    if(message.content.startsWith(`${prefix}credit`)) {
        let pages = ['Naesungbot | The standard of bot  Thank you for using this bot.', '자', '음악은 국경이 없다.', '우리는 그 숙제라는 천적에서 벗어나 자유를 찾아야 한다...', '고민하고 좌절한다고 모든 일이 풀리는 것은 `아니다.` `행동하자.` `실천하자.` 그래야 변화가 온다', '하늘은 언제나 아름답다. 언어도 그렇다.', '남에게 자신이 할일을 떠넘기는 사람은 무책임한 행동이다', '권력남용은 어디서나 심각하다', '나는 로리콘이 아니다. 단지 로리를 좋아할뿐'];
        let page = 1;

        var embed = new Discord.RichEmbed()
            .setFooter(`Page ${page} of ${pages.length}`)
            .setDescription(pages[page - 1])

        message.channel.stopTyping();
        message.channel.send(embed).then(message => {

            message.react('⏪').then(r => {
                message.react('⏩')

                const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
                const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
                // clearReactions()
                const backwards = message.createReactionCollector(backwardsFilter, {time: 60000});
                const forwards = message.createReactionCollector(forwardsFilter, {time: 60000});
                const stop = message.createReactionCollector(stopFilter);

                backwards.on('collect', r => {
                    if (page === 1) return;
                    page--;
                    embed.setDescription(pages[page - 1]);
                    embed.setFooter(`Page ${page} of ${pages.length}`);
                    message.edit(embed)
                })

                forwards.on('collect', r => {
                    if (page === pages.length) return;
                    page++;
                    embed.setDescription(pages[page - 1]);
                    embed.setFooter(`Page ${page} of ${pages.length}`);
                    message.edit(embed)
                })

            })


        })
    }

    if (message.content.startsWith(`${prefix}clear`)) {

        if (!args[0]) return message.reply("숫자를 써주세요");

        message.channel.bulkDelete(args[0]).then(() => {

            reply(message, `메세지 ${args[0]} 만큼 삭제했습니다.`).then(message => message.delete(2000));

        });

    }

    if (message.content.startsWith(`${prefix}unban`)) {

        if (!message.member.hasPermission("BAN_MEMBERS")) {

            reply(message, '권한이 없습니다!');

            return;

        }

        if (args[0] === "help") {

            reply(message, `: ${prefix}언밴 유저맨션 사유`);

            return;

        }

        let unbUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if (!unbUser) return errors.cantfindUser(message.channel);

        if (unbUser.id === client.user.id) return errors.botuser(message);

        let unbReason = args.join(" ").slice(22);

        if (!unbReason) return errors.noReason(message.channel);



        let unbanEmbed = new Discord.RichEmbed()

            .setDescription("언밴")

            .setColor(`${config.color}`)

            .addField("언밴 유저", `${unbUser} 와 아이디 ${unbUser.id}`)

            .addField("언밴한 유저", `<@${message.author.id}> 와 아이디 ${message.author.id}`)

            .addField("시간", message.createdAt)

            .addField("사유", unbReason);



        message.guild.unban(unbUser);

        reply(message, unbanEmbed);

    }



    if (message.content.startsWith(`${prefix}userinfo`)) {

        let embed = new Discord.RichEmbed()

            .setAuthor(`User Information`)

            .setColor('#1e90ff')

            .setAuthor(message.author.username)

            .setDescription(`${message.author.username}님의 정보입니다!`)

            .setThumbnail(message.author.displayAvatarURL)

            .addField('Name:', ` ${message.author.username}#${message.author.discriminator} `)

            .addField('ID:', `${message.author.id}`)

            .addField('Creation date:', message.author.createdAt);

        message.channel.send(embed);

    }



    if (message.content.startsWith(`${prefix}serverinfo`)) {

        let sicon = message.guild.iconURL;

        let serverembed = new Discord.RichEmbed()

            .setDescription("Server Information")

            .setColor("#1e90ff")

            .setThumbnail(sicon)

            .addField("Server Name", message.guild.name)

            .addField("Created On", message.guild.createdAt)

            .addField("You Joined", message.member.joinedAt)

            .addField("Total Members", message.guild.memberCount)

            .addField("Roles", message.guild.roles)

            .addField("Owner", message.guild.owner)

            .addField("Channel", message.guild.channels / message.guild.voiceChannel)

            .addField("ID", message.guild.id);

        message.channel.send(serverembed);

    }

    if (message.content.startsWith(`${prefix}unban`)) {

        if (!message.member.hasPermission("BAN_MEMBERS")) {

            reply(message, '권한이 없습니다!');

            return;

        }

        if (args[1] === "help") {

            reply(message, `: ${config.prefix}언밴 유저맨션 사유`);

            return;

        }

        let unbUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

        if (!unbUser) return errors.cantfindUser(message.channel);

        if (unbUser.id === client.user.id) return errors.botuser(message);

        let unbReason = args.join(" ").slice(22);

        if (!unbReason) return errors.noReason(message.channel);

        let unbanEmbed = new Discord.RichEmbed()

            .setDescription("언밴")

            .setColor(`${config.color}`)

            .addField("언밴 유저", `${unbUser} 와 아이디 ${unbUser.id}`)

            .addField("언밴한 유저", `<@${message.author.id}> 와 아이디 ${message.author.id}`)

            .addField("시간", message.createdAt)

            .addField("사유", unbReason);

        message.guild.unban(unbUser);

        message.channel.send(unbanEmbed);

    }

    if (message.content.startsWith(`${prefix}userinfo`)) {

        function senduserinfo(user) {

            embed.setAuthor(`User Information`)

                .setColor(`${config.color}`)

                .setAuthor(user.username)

                .setDescription(`${user.username}님의 정보입니다!`)

                .setThumbnail(user.displayAvatarURL)

                .addField('Name:', `${user.tag}`)

                .addField('ID:', `${user.id}`)

                .addField('Creation date:', user.createdAt);

            message.channel.send(embed);

        }

        let embed = new Discord.RichEmbed();

        if (args.length === 1) {

            let user = message.author;

            senduserinfo(user);

        } else if (args.length === 2) {

            let user = message.mentions.users.first();

            senduserinfo(user);

        } else {

            message.channel.send("인자가 너무 많습니다.");

            return;

        }
    }

    if (cmd === `${prefix}userlist`) {

        if (admin.check(message.author.id)) {

            let guildList = new Map();

            client.guilds.forEach(guild => {

                let guildToStore = new Map();

                guild.members.forEach(member => {

                    guildToStore.set(member.displayName, member.id);

                });

                console.log(guildToStore);

                guildList.set(guild.name,  JSON.stringify([...guildToStore]));

            });

            filehandler.saveFile('users.json', JSON.stringify([...guildList]));

        } else {

            reply(message, '권한이 없습니다!');

        }

    }

    if (cmd === `${prefix}mute`) {

        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

        if (!tomute) return message.reply("유저를 찾을 수 없습니다");

        if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("당신은 권한이 없습니다");

        let muterole = message.guild.roles.find(`name`, "muted");

        if (!muterole) {

            muterole = message.guild.createRole({

                name: "muted",

                color: "#000000",

                permissions: []

            });

            message.guild.channels.forEach(async (channel, id) => {

                channel.overwritePermissions(muterole, {

                    SEND_MESSAGES: false,

                    ADD_REACTIONS: false

                });

            });

        }

        tomute.addRole(muterole.id);

        message.reply(`<@${tomute.id}> 을 뮤트 했습니다`);

    }

    if (cmd === `${prefix}unmute`) {

        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

        if (!tomute) return message.reply("유저를 찾을 수 없습니다");

        if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("당신은 권한이 없습니다");

        let muterole = message.guild.roles.find(`name`, "muted");

        tomute.removeRole(muterole.id);

        message.reply(`<@${tomute.id}> 을 언뮤트 했습니다`);

    }

    if (message.content.startsWith(`${prefix}google`)) {
        let google = args.slice(0).join('+');
        let link = `https://www.google.com/search?q=` + encodeURI(google);
        if (!google) return message.reply(`Please enter a keyword.`)
        if (!link) return message.reply("Please enter a keyword, no a link.")
        let embed = new Discord.RichEmbed()


            .setColor("RED")

            .setTimestamp()

            .addField('Action:', 'Searching on google.')

            .addField("Word:", `${args.slice(0).join(' ')}`)

            .addField('Link:', `${link}`)

            .setFooter("All rights reserved.", message.author.avatarURL);

        message.channel.send(embed);
    }

    if (message.content.startsWith(`${prefix}naver`)) {
        let naver = args.slice(0).join('+');
        let link = `https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=` + encodeURI(naver);
        if (!naver) return message.reply(`Please enter a keyword.`)
        if (!link) return message.reply("Please enter a keyword, no a link.")
        let embed = new Discord.RichEmbed()


            .setColor("GREEN")

            .setTimestamp()

            .addField('Action:', 'Searching on naver')

            .addField("Word:", `${args.slice(0).join(' ')}`)

            .addField('Link:', `${link}`)

            .setFooter("All rights reserved.", message.author.avatarURL);

        message.channel.send(embed);
    }

    if (message.content.startsWith(`${prefix}daum`)) {
        let daum = args.slice(0).join('+');
        let link = `https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=` + encodeURI(daum);
        if (!daum) return message.reply(`Please enter a keyword.`)
        if (!link) return message.reply("Please enter a keyword, no a link.")
        let embed = new Discord.RichEmbed()


            .setColor("BLUE")

            .setTimestamp()

            .addField('Action:', 'Searching on daum')

            .addField("Word:", `${args.slice(0).join(' ')}`)

            .addField('Link:', `${link}`)

            .setFooter("All rights reserved.", message.author.avatarURL);

        message.channel.send(embed);
    }

    if (message.content.startsWith(`${prefix}nate`)) {
        let nate = args.slice(0).join('+');
        let link = `https://search.daum.net/nate?thr=sbma&w=tot&q=` + encodeURI(nate);
        if (!nate) return message.reply(`Please enter a keyword.`)
        if (!link) return message.reply("Please enter a keyword, no a link.")
        let embed = new Discord.RichEmbed()


            .setColor("RED")

            .setTimestamp()

            .addField('Action:', 'Searching on nate')

            .addField("Word:", `${args.slice(0).join(' ')}`)

            .addField('Link:', `${link}`)

            .setFooter("All rights reserved.", message.author.avatarURL);

        message.channel.send(embed);
    }



});

dscl.login(config.Token);
bot.login(config.Token);
client.login(config.Token);
