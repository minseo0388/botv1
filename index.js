const Discord = require("discord.js");
const config = require("./config.json");
const prefix = config.prefix;
const dscl = new Discord.Client();
const client = new Discord.Client();
const bot = new Discord.Client();
let statuses = [`Operating!`, `Type n@`, `Copyright Naesung#3399`]



client.on("ready", () => {
    console.log(`HouBot is now online`);

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
    var msg = message.content.split(" ");
    var cmd = msg[0];
    
    if(cmd === `${prefix}ping`) 
        message.channel.send('Sending......').then(function(ping) {
          ping.edit(`:ping_pong: ${ping.createdTimestamp - message.createdTimestamp}ms was taken.`)
    })

    if (message.content.startsWith(`${prefix}uptime`)) {
        message.channel.send(uptime(client))
    }  

    if (message.content.startsWith(`${prefix}userinfo`)) {
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

    if (cmd === `${prefix}serverinfo`) {
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

    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1); 
    if (message.content.startsWith(`${prefix}say`)) {
        const 말 = args.join(" ");
        message.delete().catch();
        message.channel.send(말);
    }   


    if (cmd === `${prefix}invite`) {
    if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) {
        return;
    }
        message.channel.createInvite()
            .then(invite => message.channel.send(`discord.gg/${invite.code}`))
            .catch(console.error);
    }

    if (cmd === `${prefix}help`) {
        var InfoEmbed = new Discord.RichEmbed()
            .setTitle(`도움말이 필요하신가요?`)
            .setColor(`#32CD32`)
            .setDescription(`${message.author.username}님을 위한 도움말을 가져왔어요.`)
            .addField(`info`, `shows bot's information`, true)
            .addField(`serverinfo` ,`shows server's information `, true)
            .addField(`userinfo`, ` shows user's information `, true)
            .addField(`kick`, `kick someone form server`, true)
            .addField(`ban`, `ban server from server`, true)
            .addField(`추천`, `이 봇이 좋으시다면 후원을 해주시는 것은 어떨까요?`, true)
            .setFooter("NEL, 모든 권리를 보유합니다.", client.user.avatarURL);
        message.author.send(InfoEmbed);
        message.channel.send("Send to :regional_indicator_d::regional_indicator_m:.");
    }

    if (cmd === `${prefix}info`) {
        let serverebed = new Discord.RichEmbed()
            .setTitle("저는 이런 봇입니다")
            .setColor(`#32CD32`)
            .setDescription(`쓰기 쉽고 간편한 NEL입니다!`)
            .addField("이름", "NEL")
            .addField("개발 시점", "2019-11-27 (KST, UTC+9)")
            .addField("사용하는 사람 수는", `${bot.users.size}명입니다.`)
            .addField("사용하는 서버 수는", `${bot.guilds.size}개입니다.`)
            .setFooter("NEL, 모든 권리를 보유합니다.", client.user.avatarURL);
        return message.channel.send(serverebed);
    }

    if (cmd === `${prefix}업타임`) {
        message.channel.send(uptime(client))
    }

    if (cmd ===`${prefix}아바타`) {
        let avatarembed = new Discord.Richembed()
            .setAuthor(user.username)
            .setTitle(`${user.username}의 아바타`)
            .setDescription("사용하기 쉽고 간편한 NEL입니다!")
            .setFooter("NEL, 모든 권리를 보유합니다.", client.user.avatarURL);
    }

    if (message.content.startsWith(`${prefix}user`)) {
        function senduserinfo(user) {
            embed.setAuthor(user.username)
            embed.setColor(`#32CD32`)
            embed.setDescription(`${message.author.username}님의 정보입니다!`)
            embed.setThumbnail(message.author.displayAvatarURL)
            embed.addField('이름은', `${message.author.username}#${message.author.discriminator}입니다.`)
            embed.addField('ID는', `${message.author.id}입니다.`)
            embed.addField('계정은', `${message.author.createdAt})}에 생성하셨습니다!`)
            embed.setFooter("NEL, 모든 권리를 보유합니다.", client.user.avatarURL);
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

    if (cmd === `${prefix}server`) {
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
            .setTitle("이 서버에 대해서 알아봅시다!")
            .setDescription("서버 정보를 가져왔어요!")
            .setColor(`#32CD32`)
            .setThumbnail(sicon)
            .addField("서버 이름은", `${message.guild.name}입니다.`)
            .addField("언제 만들어졌을까?", `${message.guild.createdAt}일입니다.`)
            .addField("참가한 날짜는", `${message.member.joinedAt}일입니다.`)
            .addField("총 인원은", `${message.guild.memberCount}명입니다.`)
            .addField("역할", message.guild.roles)
            .addField("서버장은", `${message.guild.owner}입니다.`)
            .addField("채널 개수는", `${message.guild.channels / message.guild.voiceChannel}개입니다.`)
            .addField("서버 ID는", `${message.guild.id}입니다.`)
            .setFooter("NEL, 모든 권리를 보유합니다.", client.user.avatarURL);
        return message.channel.send(serverembed);
    }

    if (cmd === `${prefix}kick`) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member.kick().then(() => {
                    message.reply(`${user.tag}추방 성공.`);
                }).catch(err => {
                    message.reply('저의 권한보다 높거나 같아서 추방이 불가능해요.');
                    console.error(err);
                });
            } else {
                message.reply('여기에 없네요!');
            }
        } else {
            message.reply('권한이라는 걸 가지고 와라!');
        }
    }

    if (message.content.startsWith(`${prefix}ban`)) {
        const reason = message.content.split(" ");
        const args = reason.slice(1);
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member.ban({
                    reason: args,
                }).then(() => {
                    message.reply(`${user.tag}밴 성공!`);
                }).catch(err => {
                    message.reply('저의 권한보다 높거나 같아서 차단이 불가능해요.');
                    console.error(err);
                });
            } else {
                message.reply('여기에 없네요.');
            }
        } else {
            message.reply('권한을 들고 와라!');
        }
    }

    if (message.content.startsWith(`${prefix}site`)) {
        message.channel.send("https://naesung.wtf")

    }
    if (message.content.startsWith(`${prefix}prefix`)) {
        message.channel.send(choose(message.content.replace(`${prefix}prefix`, '넬'), client))

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
            .setFooter("NEL, 모든 권리를 보유합니다.", client.user.avatarURL);
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
            .setColor("#32CD32")
            .addField("Servers In", string)
            .setTimestamp()
            .setFooter("All Rights Reserved." + message.author.username, message.author.avatarURL);
        message.channel.send(botembed);
    }

    if (message.content.startsWith(`${prefix}clear`)) {
        if (!args[0]) return message.reply("숫자를 써주세요");
        message.channel.bulkDelete(args[0]).then(() => {
            reply(message, `메시지 ${args[0]}개를 청소했어요!`).then(message => message.delete());
        });
    }

    if (message.content.startsWith(`${prefix}unban`)) {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            reply(message, '권한이 없습니다!');
            return;
        }
        let unbUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!unbUser) return errors.cantfindUser(message.channel);
        if (unbUser.id === client.user.id) return errors.botuser(message);
        let unbReason = args.join(" ").slice(22);
        if (!unbReason) return errors.noReason(message.channel);
        let unbanEmbed = new Discord.RichEmbed()
            .setDescription("언밴")
            .setColor(`#32CD32`)
            .addField("언밴 유저", `${unbUser} 와 아이디 ${unbUser.id}`)
            .addField("언밴한 유저", `<@${message.author.id}> 와 아이디 ${message.author.id}`)
            .addField("시간", message.createdAt)
            .addField("사유", unbReason);
        message.guild.unban(unbUser);
        reply(message, unbanEmbed);
    }

    //Muting
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
    
    //Searching
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

    //개인 팔레트 기능
    if (cmd === `${prefix}palette`) {
        let user = message.author
        let personalcolor = args.slice(0).join(' ');
        if (!personalcolor) return message.reply("지정 색상이 없습니다.");
        let color = message.guild.roles.find(`name`, personalcolor);
        if (!color) {
            muterole = message.guild.createRole({
                name: personalcolor,
                color: personalcolor,
                permissions: []
            });
        }
        user.addRole(color);
        message.reply(`색상 ${personalcolor}으로 변경 완료.`);
    }

    /*if (cmd === `${prefix}warn`) {
        let warnuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!warnuser) return errors.cantfindUser(message.channel);
        if (warnuser === client.user.id) return errors.botuser(message);
        let countwarn = args.join(" ").slice(2);
        if (!countwarn) {
            message.channel.send("경고 횟수가 없습니다.")
        }
        function writeFile(name, msg) {
            if (name == message.guild.member.id) return false;
            let defaultpath = "C:\\Users\\user\\Desktop\\NaesungExtraLite-master\\warn"
            let fileobj = new ActiveXObject("Scripting.FileSystemObject")
            let path = defaultpath+"\\"+name
        var fso=new ActiveXObject('Scripting.FileSystemObject');
        var fileObj=fso.CreateTextFile("C:\\Users\\work\\Documents\\soonrok.txt",true);
        fileObj.WriteLine("Hello, I am Soonrok!!!");
        fileObj.Close();
        }
    }
    */


});
dscl.login(config.Token);
bot.login(config.Token);
client.login(config.Token);