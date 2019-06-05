const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "." // تقدر تغيره
	const blow = new Set()
	client.on('message', message => {
  var price = ''
  var rank = ''
  var sender = ''
             let fouroulou = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`Our plans : 
                                       \`GoodSeller\` <== 10000 
                                       \`BestSeller\` <== 20000
                                       \`PerfectSeller\` <== 60000
                                       \`GraetSeller\` <== 70000
        If you want to buy any thing write the plan's name
        اذا اردت الشراء اكتب اسم الخطة
        For more information go to <#573157940119470115>`)   
      .setTimestamp()
    let filter = m => m.author.id === message.author.id;
   if(message.content.startsWith(".buy")){
       let user = client.users.get("527505679171321856"); // ايديك
	  let user1 = client.users.get("282859044593598464");
     //ههقهقهقه
    // جيبلي كود فيه تحقق yes or no

     if (blow.has(message.author.id)) {
     return message.reply("**لايمكنك اعادة الامر مجددا ان لم تنهي عملية الشراء لانهائها قم بكتابة cancel**").then(message => {
      message.delete(10000) 
     })
     }
     blow.add(message.author.id);
    setTimeout(() => {
        blow.delete(message.author.id);
    }, 60000);//وحلو مرا  كقو خلك كذا زيي بس ذا مرا ايز :]

     message.channel.sendEmbed(fouroulou).then(msg => {
      message.channel.awaitMessages(response => response.content === 'HightnessSeller' || 'NormalSeller' || 'BestSeller' || 'PerfectSeller' && filter,{
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === 'GoodSeller') {
          rank = 'GoodSeller'
          price = 10000
          	  let price2 = price - ( (price * 5) / 100 )

                    let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`قم بتحويل ${price} كريديت الى ${user}
		  لديك 4 دقائق للتحويل
      للخروج اكتب cancel`)   
      .setTimestamp()
      
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$9500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**تمت عملية الشراء بنجاح**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'GoodSeller'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`.buy\` again`)
            })
            
            })
          message.delete();
        }
        if(collected.first().content === 'BestSeller') {
           let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`قم بتحويل 20000 كريديت الى ${user}
		  لديك 4 دقائق للتحويل
      للخروج اكتب cancel`)   
      .setTimestamp()
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$19000\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**تمت عملية الشراء بنجاح**')
            message.member.addRole(message.guild.roles.find(c => c.name == '» Best S'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`.buy\` again`)
            })
            
            })
          collected.first().delete(); 
}
                if(collected.first().content === 'HightnessSeller') {
          rank = '» Hightness S'
          price = 70000
          let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`قم بتحويل 70000 كريديت الى ${user}
		  لديك 4 دقائق للتحويل
      للخروج اكتب cancel`)   
      .setTimestamp()
                message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$66500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**تمت عملية الشراء بنجاح**')
            message.member.addRole(message.guild.roles.find(c => c.name == '» Hightness S'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`.buy\` again`)
            })
            
            })
          collected.first().delete(); 
}
                if(collected.first().content === 'PerfectSeller') {
          rank = '» Perfect S'
          price = 50000
          let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`قم بتحويل 60000 كريديت الى ${user}
		  لديك 4 دقائق للتحويل
      للخروج اكتب cancel`)   
      .setTimestamp()
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$47500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**تمت عملية الشراء بنجاح**')
            message.member.addRole(message.guild.roles.find(c => c.name == '» Perfect S'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`.buy\` again`)
            })
            
            })
          collected.first().delete(); 
}})
  

       })     
        
}});