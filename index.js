
const app = require('express')();

app.get('/', async (req,res) => {
  res.send('Hello');
});

app.listen(3000, async () => {
 console.log('Listening on port 3000');
});
const Discord = require('discord.js');
const client = new Discord.Client();
var request = require("request")
var url = "https://cdn.anhchiem.xyz/players.json" 
var usingGIF = 'https://media.discordapp.net/attachments/913190403178635374/915609155144941618/police.png'
var monkeylogo = 'https://media.discordapp.net/attachments/970571037257392148/970779325446094858/Monkey-Logo-Design-1-1200x675.jpg'
var XLgif = 'https://media.discordapp.net/attachments/913190403178635374/915609155144941618/police.png'
var XLfooter = '© Copyright by Bi Monkey <3.'
client.on('ready', () =>{
  console.log(`BOT ${client.user.tag} Đã Online!`);
});
client.on('ready', () => {
  setInterval(() =>{
    request({
      url: url,
      json: true
  },function (error, response, body) {
      // var string ='';
      // var sstring = '';
      if (!error && response.statusCode === 200) {
          let entry = body    
          console.log(entry.length) 
          var sl = 0; var sll = 0;var slca = 0; var slmed = 0;var slch = 0; var slqy = 0;
          for (let i=1; i<entry.length; i++) {
           
            let name = entry[i]["name"].toLowerCase().trim(); 
                   if (name.indexOf('ca') == 0 || name.indexOf('gđca') == 0 || name.indexOf('gdca') == 0 || name.indexOf('pgdca') == 0 || name.indexOf('pgđca') == 0 || name.indexOf('qlca') == 0   || name.indexOf('swat') == 0  ) slca++;
              else if (name.indexOf('med') == 0 || name.indexOf('gđbs') == 0 || name.indexOf('gdbs') == 0 || name.indexOf('pgdbs') == 0  || name.indexOf('pgđbs') == 0 || name.indexOf('bs') == 0 ) slmed++;
              else if (name.indexOf('ch') == 0 || name.indexOf('gđch') == 0 || name.indexOf('gdch') == 0 || name.indexOf('pgđch') == 0 || name.indexOf('pgdch') == 0 ||  name.indexOf('qlch') == 0  || name.indexOf('pqlch') == 0 ) slch++;
          } 
                 var d = new Date();
            client.user.setActivity('Thằng fujin giảm câm' , { type: 'WATCHING' })
      }
  })
  },9000);
  }
  );

client.on('message', message => {

  const prefix = '';
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  function lingo(s) {
  
      function add(x, y) {
          var c = 0, r = [];
          var x = x.split('').map(Number);
          var y = y.split('').map(Number);
          while(x.length || y.length) {
              var s = (x.pop() || 0) + (y.pop() || 0) + c;
              r.unshift(s < 10 ? s : s - 10); 
              c = s < 10 ? 0 : 1;
          }
          if(c) r.unshift(c);
          return r.join('');
      } 
      var dec = '0';
      s.split('').forEach(function(chr) {
          var n = parseInt(chr, 16);
          for(var c = 8; c; c >>= 1) {
              dec = add(dec, dec);
              if(n & c) dec = add(dec, '1');
          }
      });
      return dec;
  }
/////// Bot info 
  if ( command ==',botinfo')
          {
             const exampleEmbed = new Discord.MessageEmbed()
       .setAuthor(
        `Thông Tin Của ${message.client.user.username} Bot`,
        `
        ${message.client.user.displayAvatarURL()}`
      )
      .addField("💻 Bot Name",`\`\`\`Công An Liêm Chính\`\`\``)
      .addField("💻 Nhà Phát Triển Bot", `\`\`\`Bi Monkey\`\`\``)
      .addField("💻 Discord Bi Monkey ",
       `<@830536730100105246>`)
      .addField("💻 Ping", `\`\`\`${client.ws.ping}\`\`\``)
      .addField("💻 uptime", `\`\`\`${(client.uptime)}ms\`\`\``)
      .addField("💻 Độ trễ API", `\`${(client.ws.ping)}ms\``, true)
      .addField(
        "💻 Link Invite Bot **MONKEY COW**",
        `[Invite](https://discord.com/api/oauth2/authorize?client_id=971115485276029040&permissions=8&scope=bot)
     `
      )
      .setImage(`${message.client.user.displayAvatarURL()}`)
      .setColor("RANDOM")
      
      .setFooter("Coded by: Bi Monkey")

message.channel.send(exampleEmbed);
          
              }

///=============== CACHE ==================

if (command == ',cache'){{
  if(message.author.id === 'some id')
    return message.channel.send(`Có cc mà check được, ${message.author}!`)};
  
  request(
           {
              url: url,
              json: true
            }, 
               function (error, response, body) 
                 {
                   var string ='';
                    if (!error && response.statusCode === 200) 
                     {
                        let entry = body
                        console.log(entry.length) 
                        string = string + '**HƯỚNG DẪN XÓA CACHE FIVE M.** \n';
                        string = string + "```";
                        string = string + '+ Bước 1: Chuột phải FiveM chọn Open File Location. \n';
                        string = string + '+ Bước 2: Chọn FiveM Application Data (Hình con ốc sên thường ở trên cùng). \n';
                        string = string + '+ Bước 3: Chọn vào thư mục cache -> priv -> xoá hết tất cả file trong đây, để lại 2 thư mục trên cùng (db và unconfirmed). \n';
                        string = string + '+ Bước 4: Khởi động lại FiveM. \n';
                        string = string + '------------------------ \n';
                        
                        string = string + "```";

                       message.reply(string);
                     }
                 }
         )    
}


///=============== LINK DISCORD ==================

if (command == ',link'){{
  if(message.author.id === '836222382061781002')
    return message.channel.send(`Có con cặc mà check được, ${message.author}!`)};

  request(
           {
              url: url,
              json: true
            }, 
               function (error, response, body) 
                 {
                   var string ='';
                    if (!error && response.statusCode === 200) 
                    {
                        let entry = body
                        console.log(entry.length) 
                        string = string + '**LINK DISCORD NEVER DIE.** \n';
                        string = string + "```";
                        string = string + 'https://discord.gg/cjRkRcrd \n';
                        string = string + '------------------------ \n';

                        string = string + "```";
                        message.reply(string);
                    }
                 }
         )    
}

/// IP ///
  
  if (command == ',ip'){{
   if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};
          
                       request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
             
       
 
   {         
const exampleEmbed = new Discord.MessageEmbed()
             .setColor('#ff7112')
             .setAuthor('Anh Chị Em RP.' , ' https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')
             .setTitle('ĐỒN CÔNG AN CHÓ ĐẺ.' )
             .setThumbnail(usingGIF)
             .setTimestamp()
             .setFooter(XLfooter, monkeylogo)
             .addFields(
                           { name: ' IP Sever Anh Chị 1 👇 ', value:' **connect anhchiem.xyz** ', inline: false }, 
                            { name: 'Or', value:' **connect 8eg6l5** ', inline: false }, 
                                     ) 
                   message.delete();
                message.channel.send(exampleEmbed);
            }  
          }
      })  
}
  ///==================UPTIME=====================///

  if (command == ',uptime') {{
     if(message.author.id === '836222382061781002')
    return message.channel.send(`Có con cặc mà check được, ${message.author}!`)};
  

    request(
            {
                  url: url,
                  json: true
             }, 
             function (error, response, body) {
    
        var string ='';
         if (!error && response.statusCode === 200) 
       {
            let entry = body
            console.log(entry.length) 
            let slca = 0, slmed = 0, slch = 0, slall = entry.length;
            for (let i=0 ; i<slall; i++) 
           {
              let name = entry[i]["name"].toLowerCase().trim(); 
                   if (name.indexOf('ca') == 0 || name.indexOf('gđca') == 0 || name.indexOf('gdca') == 0 || name.indexOf('pgdca') == 0 || name.indexOf('pgđca') == 0 || name.indexOf('qlca') == 0 || name.indexOf('swat') == 0 || name.indexOf('pqlca') == 0 )  slca++;
              else if (name.indexOf('med') == 0 || name.indexOf('gđbs') == 0 || name.indexOf('gdbs') == 0 || name.indexOf('pgdbs') == 0  || name.indexOf('pgđbs') == 0 || name.indexOf('bs') == 0 || name.indexOf('qlbs') == 0 || name.indexOf('pqlbs') == 0 ) slmed++;
              else if (name.indexOf('ch') == 0 || name.indexOf('gđch') == 0 || name.indexOf('gdch') == 0 || name.indexOf('pgđch') == 0 || name.indexOf('pgdch') == 0 ||  name.indexOf('qlch') == 0  || name.indexOf('pqlch') == 0 ) slch++;
            }
             const exampleEmbed = new Discord.MessageEmbed()
             .setColor('#ff7112')
             .setAuthor('Anh Chị Em RP.' , ' https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')
             .setTitle('ĐỒN CÔNG AN CHÓ ĐẺ.' )
             .setThumbnail(usingGIF)
             .setTimestamp()
             .setFooter(XLfooter, monkeylogo)
             .addFields(
                            { name: '- Admin:',          value: 'Zit, Fujin, Thắng, ACE, Thảo, DoctorTwitch. ', inline: true },
                            { name: `**Trong Game:**`, value: '```yaml\n Số người Chơi: ' +entry.length+'/500 👮🏻:'+slca+ '👨‍⚕️:'+slmed+'🔧:'+slch+'```'  , inline: false },    
                        )
              message.channel.send(exampleEmbed);       
         }
       })
      };
 
  ///=========== CHECK ID ============///

  if (command == ',id') {{
     if(message.author.id === '836222382061781002')
    return message.channel.send(`Có con cặc mà check được, ${message.author}!`)};
  

          
      request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var search_ID = message.content.substr(4, message.content.length - 1).toLowerCase()
          
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var sltim = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["id"];
                if(search_ID == b){
                  var c = entry[i]["identifiers"][0].substr(6, 15);
                  var d = entry[i]["identifiers"][2];
                  var p = entry[i]["ping"];
                  if (entry[i]["identifiers"][2]) {
                    if (d.substr(0, 7) == 'discord') {
                      d = '<@' + entry[i]["identifiers"][2].substr(8, 18) + '>';
                    } else {
                      d = 'Người chơi không liên kết Discord!';
                    }
                  } else {
                    d = 'Người chơi không liên kết Discord!';
                  }
                  const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#4cbbaa')
                    .setTitle('Tên Ingame: ' + entry[i]["name"] )
                    .setURL('https://steamcommunity.com/profiles/' + lingo(c))
                    .setAuthor('Anh Chị Em RP.' , ' https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')
                    .setThumbnail(usingGIF)
                     .addFields(
                      { name: 'ID Server:', value: b },
                      { name: 'Link Steam:', value:'https://steamcommunity.com/profiles/' + lingo(c) },
                       {name: 'Ping', value: p },
                      { name: 'Discord:', value: d })
                    .setImage('https://media.discordapp.net/attachments/697049699193978941/746691133660332092/divider_1.gif')
                    .setFooter(XLfooter, monkeylogo)
                    .setTimestamp()
                  message.channel. send(exampleEmbed);
                  return;
                }
              }
              const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#4cbbaa')
                .setTitle('ĐỒN CÔNG AN CHÓ ĐẺ')
                .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')
                .setThumbnail(usingGIF)
                .setDescription("ID bạn cần tìm KHÔNG CÓ , giống tìm người yêu của bạn...KHÔNG TỒN TẠI 😏")
                .setImage('https://media.discordapp.net/attachments/697049699193978941/746691133660332092/divider_1.gif')
                .setFooter(XLfooter)
                .setTimestamp()
              message.channel.send(exampleEmbed);
              return;
          }
      })  
}
///=================================///

 if (command == ',bothelp'){{
    if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};
          
            request({
          url: url,
          json: true
           }, function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
          let entry = body
          console.log(entry.length) // Print the json response

          string = string + '**Lệnh Check BOT:** \n';
          string = string + "```";
          string = string + '+ Danh sách toàn bộ người đang onl:____,check \n';
          string = string + '+ Check link Steam, ID người chơi :____,id x (x là số id ingame) \n';
          string = string + '+ Check tìm người                 :____,search x (x là tên cần tìm) \n' ;
          string = string + '+ Check số lượng online của server:____,uptime \n';
          string = string + '+ Check số lượng thành viên gang  :____,gang \n';
          string = string + '+ Check số lượng thành viên nhóm  :____,gang2 \n';;
          string = string + '+ Check MED                       :____,med \n';
          string = string + '+ Check CH                        :____,ch \n';
          string = string + '+ Check CA                        :____,ca \n';
          string = string + '+ Check gang Legends              :____,lg \n';
          string = string + '+ Check gang Immortal             :____,imt \n';
          string = string + '+ Check gang MJ                   :____,mj \n';
          string = string + '+ Check gang Squad                :____,sq \n'
          string = string + '+ Check gang ACA                  :____,aca \n';
          string = string + '+ Check nhóm KTS                  :____,kts \n';
          string = string + '+ Check nhóm Paradise             :____,para \n';
          string = string + '+ Check nhóm J4F                  :____,j4f \n';
          string = string + '+ Check nhóm TheLorD              :____,tl \n';
          string = string + '+ Check nhóm RB                   :____,rb \n';
          string = string + '+ Check nhóm VietJetAir           :____,viet  \n';
          string = string + '+ Check nhóm Equality             :____,equality  \n';
          string = string + '+ Check nhóm Marabunta            :____,mara  \n';
          string = string + '+ Check nhóm PT                   :____,pt \n';
          string = string + '+ Check nhóm SEAL                 :____,seal \n';
          string = string + '+ Check nhóm Kingsman             :____,king \n';

          
          string = string + "```";

           message.reply(string);
      }
    })    } 
//====================================//
  
if (command == ',alice'){{
    if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};
          
            request({
          url: url,
          json: true
           }, function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
          let entry = body
          console.log(entry.length) 
            
          string = string + '**ABOUT ALICE:** \n';
          string = string + '+ CHỈ 2 TỪ THÔI , BÁ DƠ =))) \n';
          string = string + ' Hãy follow và hóng clip tiktok mới của Alice nhé : https://vm.tiktok.com/TTPdMb47bh/ \n';
          string = string + ' Kết bạn với alice nha : https://www.facebook.com/huong.hoang.92754 \n';
          string = string + ' Follow instagram alice nha : https://instagram.com/alicehoang26?utm_medium=copy_link \n';
            
          message.channel.send(string);
      }
    })    } 

 //================NEW====================//

  
  if (command == ',can'){{
    if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};
          
            request({
          url: url,
          json: true
           }, function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
          let entry = body
          console.log(entry.length) 
          string = string + '**CA,QuânY đâu hết rồi. Rất cần vào lúc này. ONLINE HAY ĐỂ KICK NGÀNH ?** \n';
          
       message.delete();
      const role = message.guild.roles.cache.get('794611718852313113');
  

        message.channel.send(`${string} ${role}`)
                
            }  
          
      })  
}   

if (command == ',rep'){{
    if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};
          
            request({
          url: url,
          json: true
           }, function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
          let entry = body
          console.log(entry.length) 
            
          string = string + '**đụ mẹ tụi mày, mấy đứa kia tag thì không sao tới lúc tao tag kêu tụi mày online thì tụi mày thái độ. Cái đồn nó chó đẻ vừa thôi?? ** \n';

            message.delete()
          message.channel.send(string);
      }
    })    } 
  
///////
  
  if (command == ',gen'){{
    if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};
          
            request({
          url: url,
          json: true
           }, function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
          let entry = body
          console.log(entry.length) 
          string = string + ' đụ mẹ mày thằng lồn gen . Tao chém cho rớt cánh tay khỏi cào phím 😏 \n';
          string = string + ' https://media.discordapp.net/attachments/794611719074873370/950218824131694603/74FC8AAB-3EB9-433B-8A18-C1C56D2B3E7A.jpg \n ';
       message.delete();
                message.channel.send(`${string} <@448700204250824705>`);
                
            }  
          
      })  
}   
  /////
  if (command == ',pig'){{
    if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};
          
            request({
          url: url,
          json: true
           }, function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
          let entry = body
          console.log(entry.length) 
          string = string + 'Cầm Mồm Đồ Fri3nd z0n3? \n';
          string = string + 'https://c.tenor.com/h_p46ba4PPkAAAAM/friendzone-selfie.gif \n';
          
       message.delete();
                 message.channel.send(`${string} <@445142222896234497>`);
          }
          })  
}   
  /////
if (command == ',fujin'){{
    if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};
          
            request({
          url: url,
          json: true
           }, function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
          let entry = body
          console.log(entry.length) 
          string = string + ' Đại diện fujin, tao djt me may luon \n';
          
       message.reply(string);
                
    }  
          
      })  
}             

if (command == ',bi'){{
   if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};
          
                       request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
             
       
 
   {         
const exampleEmbed = new Discord.MessageEmbed()
             .setColor('#ff7112')
             .setAuthor('Bi Monkey.' , 'https://media.discordapp.net/attachments/970571037257392148/970779325446094858/Monkey-Logo-Design-1-1200x675.jpg')
             .setTitle('Kiếm Tiền Donate cho Đồn' )
             .setThumbnail(usingGIF)
             .setTimestamp()
             .setImage('https://images-ext-1.discordapp.net/external/6i0G1cg8Wlm8_yOWi2xUx4H65PT7K1c57Wzldx51NMo/%3Fauto%3Dformat%26fit%3Dcrop/https/ph-files.imgix.net/59a17072-b477-46ce-99e9-6278a8dbb959.gif')
             .setFooter(XLfooter, monkeylogo)
             .addFields(
                           { name: ' 🐵 Có bán nitro các loại , giá rẻ bất ngờ ', value:' **- Boots :**\n 1 tháng = 190k\n 1 năm = 1tr100 \n **- Classic :**\n 1 tháng = 100k\n 1 năm = 600k', inline: false }, 
                           { name: '🐵 Có bán ExitLag', value:'1 tháng = 65k\n3 tháng = 180k\n6 tháng = 350k\n12 tháng = 680k', inline: false }, 
                           { name: 'Liên Hệ Discord ' ,  value:'<@830536730100105246>', inline: false }, 
                                     ) 
           message.delete();
                message.channel.send(exampleEmbed);
            }  
          }
      })  
}
  
  ////////////////////////

  if (command == `!dm`) {
 let dUser =
  message.guild.member(message.mentions.users.first());
 if (!dUser) return message.channel.send("Không tìm thấy người dùng");
 let dMessage = args.join(' ').slice(22);
 if (dMessage.length < 1) return message.reply('Tin nhắn bạn đã gửi tới!');
if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.reply("You can't you that command!");
 dUser.send(`${dUser} ${dMessage}`);
message.delete();
 message.author.send(
  ` bạn vừa gửi tin nhắn đến ${dUser}`
 );
}
 ///========== INFO CU DÂN ==========///

 if (command == ',check') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
              let indexarr = 0;
              let resarrstr = [""]

              for (let i=0; i<entry.length; i++) 
              {
                let stt = i+1; 
                let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                
                if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
              } 
            for (let i=0 ; i<= resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số lượng người online: ' +entry.length+ ' ')
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
               { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  }

////====== SEARCH ======///

if (command == ',search')
{
  {
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)
  };
  
  request({
    url: url,
    json: true
  }, function (error, response, body) 
  {
    var search_string = message.content.substr(8, message.content.length - 1).toLowerCase()
            
    var string ='';
    if (!error && response.statusCode === 200) 
    {
      let entry = body
      console.log(entry.length) 
      let slall = entry.length;
      function cach(maxcach , length)
      {
        khoangcach = "                                                                                                                                                                 "
        return khoangcach.substring(0, maxcach - length)
      }
                
      var sltim = 0
      for (let i=1; i<entry.length; i++) {
        var b = entry[i]["name"].toLowerCase();
        if(b.indexOf(search_string) != -1){
          sltim = sltim + 1;
        }
      }
      if (sltim == 0) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#4cbbaa')
        .setTitle('ĐỒN CÔNG AN CHÓ ĐẺ')
        .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')
        .setThumbnail(usingGIF)
        .setDescription("Người bạn cần tìm KHÔNG ONLINE , giống tìm người yêu của bạn...KHÔNG TỒN TẠI 😏")
        .setImage('https://media.discordapp.net/attachments/697049699193978941/746691133660332092/divider_1.gif')
        .setFooter(XLfooter)
        .setTimestamp()
        message.channel.send(exampleEmbed);
        return;
      }
      let indexarr = 0;
      let resarrstr = [""]
      var stt = 1;
      for (let i=0; i<entry.length; i++) 
      {
        var b = entry[i]["name"].toLowerCase();
        if(b.indexOf(search_string) != -1)
        {
          let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
          resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
          stt = stt + 1;
          if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
          if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
        }
      } 
      indexarr = indexarr - 1;
      for (let i=0 ; i< resarrstr.length ; i++)
      {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#4cbbaa')
        .setTitle('Tìm Thấy ' + sltim + ' Người Chơi Có Tên Là: ' + search_string)
        .setAuthor( 'Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
        .setThumbnail(usingGIF)
        .setTimestamp()
        .setFooter(XLfooter)
        .addFields(
          { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },)
        .setTimestamp();
        message.channel.send(exampleEmbed);
      }  
    }
  })  
}

// new info CA

if (command == ',ca') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slca = 0;var slqy = 0;
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,2) == 'CA' ||  b.substring(0,4) == 'QLCA' || b.substring(0,4) == 'GĐCA' ||  b.substring(0,5) == 'PGĐCA' ||  b.substring(0,4) == 'SWAT'){
                  slca = slca + 1;
                 }
                if(b.substring(0,6) == 'QUÂN Y' || b.substring(0,6) == 'Quân y' || b.substring(0,6) == 'Quân Y' ||  b.substring(0,4) == 'GĐBS' || b.substring(0,5) == 'QLMED' || b.substring(0,5) == 'PGĐBS'){
                  slqy = slqy + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,2) == 'CA' ||  b.substring(0,4) == 'QLCA' || b.substring(0,4) == 'GĐCA' ||  b.substring(0,5) == 'PGĐCA' ||  b.substring(0,4) == 'SWAT')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,6) == 'QUÂN Y' || b.substring(0,6) == 'Quân y' || b.substring(0,6) == 'Quân Y' ||  b.substring(0,4) == 'GĐBS' || b.substring(0,5) == 'QLMED' || b.substring(0,5) == 'PGĐBS'){
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              }
            indexarr = indexarr - 1
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Công An & SWAT: ' + slca + ' | Quân Y: '+ slqy)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
               { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}

/// new info CH

if (command == ',ch') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slch = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,2) == 'CH' || b.substring(0,4) == 'GSCH' || b.substring(0,4) == 'GĐCH' || b.substring(0,5) == 'PGĐCH' || b.substring(0,4) == 'QLCH' || b.substring(0,5) == 'PQLCH'){
                  slch = slch + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,2) == 'CH' || b.substring(0,4) == 'GSCH' || b.substring(0,4) == 'GĐCH' || b.substring(0,5) == 'PGĐCH' || b.substring(0,4) == 'QLCH' || b.substring(0,5) == 'PQLCH')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt = stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Cứu Hộ: ' + slch)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}

//======== INFO MED ============== 
if (command == ',med') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slmed = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,3) == 'MED' || b.substring(0,4) == 'GĐBS' || b.substring(0,5) == 'PGĐBS' || b.substring(0,5) == 'QLMED' || b.substring(0,6) == 'Quân Y'){
                  slmed = slmed + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,3) == 'MED' || b.substring(0,4) == 'GĐBS' || b.substring(0,5) == 'PGĐBS' || b.substring(0,5) == 'QLMED' || b.substring(0,6) == 'Quân Y')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt = stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('MED : ' + slmed)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}
  
  
/// new info Thien Trieu

if (command == ',tt') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var sltt = 0; 
              var slth=0;
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,11) == 'Thiên Triều' || b.substring(0,11) == 'THIÊN TRIỀU' ){
                  sltt = sltt + 1;
                }
                if(b.substring(0,11) == 'Thiên Hoàng' || b.substring(0,11) == 'THIÊN HOÀNG' ){
                  slth = slth + 1;
                }

              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,11) == 'Thiên Triều' || b.substring(0,11) == 'THIÊN TRIỀU' )
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,11) == 'Thiên Hoàng' || b.substring(0,11) == 'THIÊN HOÀNG' ){
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              }
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Thiên Triều: ' + sltt + ' | Thiên Hoàng: ' + slth)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
               { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}


/// new info IMMORTAL

if (command == ',imt') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slim = 0; 
              var slimt=0;
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,8) == 'Immortal' || b.substring(0,8) == 'IMMORTAL' ){
                  slim = slim + 1;
                }
                if(b.substring(0,3) == 'imt' || b.substring(0,3) == 'IMT' ){
                  slimt = slimt + 1;
                }

              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,8) == 'Immortal' || b.substring(0,8) == 'IMMORTAL' )
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,3) == 'imt' || b.substring(0,3) == 'IMT' ){
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              }
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Immortal: ' + slim + ' | IMT: ' + slimt)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
               { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}
  
// MJ
/// new info MJ
if (command == ',mj') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slmj = 0; 
              var slmrj=0;
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,2) == 'MJ' || b.substring(0,2) == 'mj' ){
                  slmj = slmj + 1;
                }
                if(b.substring(0,3) == 'MrJ' || b.substring(0,3) == 'MRJ' ){
                  slmrj = slmrj + 1;
                }

              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,2) == 'MJ' || b.substring(0,2) == 'mj' )
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,3) == 'MrJ' || b.substring(0,3) == 'MRJ' ){
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              }
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('MJ: ' + slmj + ' | MrJ: ' + slmrj)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
               { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}

  
/// new info LG
if (command == ',lg') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var sllast = 0; 
              var sllgg =0;
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,7) == 'Legends' || b.substring(0,7) == 'Legends' ){
                  sllast = sllast + 1;
                }
                if(b.substring(0,2) == 'LG' || b.substring(0,2) == 'LG' ){
                  sllgg = sllgg + 1;
                }

              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,7) == 'Legends' || b.substring(0,7) == 'Legends' )
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                 if(b.substring(0,2) == 'LG' || b.substring(0,2) == 'LG' ){
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              }
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Legends: ' + sllast + ' | LG: ' + sllgg)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
               { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}


/// new info Squad

if (command == ',sq') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slsqd = 0; 
              var slsq=0;
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,5) == 'Squad' || b.substring(0,5) == 'SQUAD' ){
                  slsqd = slsqd + 1;
                }
                if(b.substring(0,2) == 'SQ' || b.substring(0,2) == 'sq' ){
                  slsq = slsq + 1;
                }

              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,5) == 'Squad' || b.substring(0,5) == 'SQUAD' )
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,2) == 'SQ' || b.substring(0,2) == 'sq' ){
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              }
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Squad: ' + slsqd + ' | SQ: ' + slsq)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
               { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}
  
 
   // ACA //
  //

if (command == ',aca') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slaca = 0; 
              var sldemy =0;
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,3) == 'ACA' || b.substring(0,3) == 'ACA' ){
                  slaca = slaca + 1;
                }
                if(b.substring(0,7) == 'Academy' || b.substring(0,7) == 'ACADEMY' ){
                  sldemy = sldemy + 1;
                }

              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,3) == 'ACA' || b.substring(0,3) == 'ACA' )
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,7) == 'Academy' || b.substring(0,7) == 'ACADEMY' ){
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              }
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('ACA: ' + slaca + ' | Academy: ' + sldemy)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
               { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}
  
  
////// NHóm //////

// Dân chơi
/// new info Dân chơi

if (command == ',dc') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var sldc = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,8) == 'Dân Chơi' || b.substring(0,8) == 'DÂN CHƠI'){
                  sldc = sldc + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,8) == 'Dân Chơi' || b.substring(0,8) == 'DÂN CHƠI')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số Lượng Nhóm Dân Chơi: ' + sldc)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}
  

// PARADISE
/// new info Paradise

if (command == ',para') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slpara = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,8) == 'Paradise' || b.substring(0,8) == 'PARADISE'){
                  slpara = slpara + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,8) == 'Paradise' || b.substring(0,8) == 'PARADISE')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số Lượng Nhóm Paradise: ' + slpara)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}




// Villains
/// new info Villains

if (command == ',vil') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slvll = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,8) == 'Villains' || b.substring(0,8) == 'VILLAINS'){
                  slvll = slvll + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,8) == 'Villains' || b.substring(0,8) == 'VILLAINS')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số Lượng Nhóm Villains : ' + slvll)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}

// J4F
/// new info J4F

if (command == ',j4f') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slj4f = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,3) == 'J4F' || b.substring(0,3) == 'J4F'){
                  slj4f = slj4f + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,3) == 'J4F' || b.substring(0,3) == 'J4F')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số Lượng Nhóm J4F: ' + slj4f)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}

  
/// KTS

if (command == ',kts') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slkts = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,3) == 'KTS' || b.substring(0,3) == 'KTS'){
                  slkts = slkts + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
               if(b.substring(0,3) == 'KTS' || b.substring(0,3) == 'KTS')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số Lượng Nhóm KTS : ' + slkts)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}

  
// thelord //
  //
if (command == ',tl') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var sltl = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,7) == 'TheLorD' || b.substring(0,7) == 'Thelord'){
                  sltl = sltl + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,7) == 'TheLorD' || b.substring(0,7) == 'Thelord')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số Lượng Nhóm TheLorD: ' + sltl)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
} 
  

// RB //
  //
if (command == ',rb') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slrb = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,2) == 'RB' || b.substring(0,2) == 'RB'){
                  slrb = slrb + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                 if(b.substring(0,2) == 'RB' || b.substring(0,2) == 'RB')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số Lượng Nhóm RB: ' + slrb)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
} 

// Kingsman //
  //
if (command == ',king') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slking = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,8) == 'Kingsman' || b.substring(0,9) == ' Kingsman'){
                  slking = slking + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,8) == 'Kingsman' || b.substring(0,9) == ' Kingsman')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số Lượng Kingsman : ' + slking )
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
} 

  // SEA //
  //
if (command == ',seal') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slsea = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,4) == 'SEAL' || b.substring(0,4) == 'SEAL'){
                  slsea = slsea + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,4) == 'SEAL' || b.substring(0,4) == 'SEAL')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số Lượng SEAL : ' + slsea )
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
} 


// vietjetair

if (command == ',viet') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slviet = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,10) == 'VietJetAir' || b.substring(0,10) == 'VietJetair'){
                  slviet = slviet + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                 if(b.substring(0,10) == 'VietJetAir' || b.substring(0,10) == 'VietJetair')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số Lượng Nhóm VietJetair: ' + slviet)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}



  // equality //
  //
if (command == ',equality') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var sleq = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,8) == 'Equality' || b.substring(0,8) == 'EQUALITY'){
                  sleq = sleq + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,8) == 'Equality' || b.substring(0,8) == 'EQUALITY')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số Lượng Nhóm Equality: ' + sleq)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
} 
//SATAN //
  //
if (command == ',satan') {{
  if(message.member.roles.cache.some(r => r.name === 'hell'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slsa = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,5) == 'SATAN' || b.substring(0,5) == 'Satan'){
                  slsa = slsa + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                 if(b.substring(0,5) == 'SATAN' || b.substring(0,5) == 'Satan')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
               const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số Lượng Nhóm SATAN: ' + slsa)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
} 
  // galaxy //
  //
if (command == ',galaxy') {

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slglx = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
                if(b.substring(0,6) == 'GALAXY' || b.substring(0,6) == 'Galaxy'){
                  slglx = slglx + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
               if(b.substring(0,6) == 'GALAXY' || b.substring(0,6) == 'Galaxy')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số Lượng Nhóm Galaxy: ' + slglx)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
} 
  

  /// new info huyet lang
if (command == ',hl') {

            request({
          url: url,
          json: true
      }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) 
              let slall = entry.length;
              function cach(maxcach , length)
              {
                khoangcach = "                                                                                                                                                                                    "
                return khoangcach.substring(0, maxcach - length)
              }
             
              var slhl = 0
              for (let i=1; i<entry.length; i++) {
                var b = entry[i]["name"];
               if(b.substring(0,10) == 'Huyết Lang' || b.substring(0,10) == 'HUYẾT LANG'){
                  slhl = slhl + 1;
                }
              }
              let indexarr = 0;
              let resarrstr = [""]
              var stt = 1;
              for (let i=0; i<entry.length; i++) 
              {
                var b = entry[i]["name"];
                if(b.substring(0,10) == 'Huyết Lang' || b.substring(0,10) == 'HUYẾT LANG')
                {
                  let ID = '[ID:' + entry[i]["id"] + ']' +cach(4 , entry[i]["id"].toString().length)
                  resarrstr[indexarr] += `\n#${stt + cach(3 , stt.toString().length)}${ID}: ${entry[i]["name"]}`
                  stt= stt + 1;
                  if (resarrstr[indexarr].length > 900) resarrstr[++indexarr] =""
                  if (!resarrstr[indexarr])  resarrstr.splice(indexarr, 1)
                }
              } 
            indexarr = indexarr - 1;
            for (let i=0 ; i< resarrstr.length ; i++)
            {
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#42f5b3')
              .setTitle('Số Lượng Nhóm Huyết Lang : ' + slhl)
              .setAuthor('Anh Chị Em RP.', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')                    
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                { name: `List Tìm Kiếm | Trang ${i+1}/${resarrstr.length}`   , value: '```fix\n' + resarrstr[i] +'```'  , inline: false },
              )
             .setTimestamp();
             message.channel.send(exampleEmbed);
            }  
          }
      })  
}
  //// nhom ////
if (command == ',gang2') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};
     

            request({
          url: url,
          json: true
      }, function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length)

             var slpara = 0; var slkts = 0; var slj4f = 0; var sltl =0; var slrb =0; var slsea =0; var slviet =0;  var slking =0; var slsa =0; var slglx =0; var slhl =0;
              for (let i=1; i<entry.length; i++)
             {
                var a = entry[i]["name"]; 
            
                 if(a.substring(0,8) == 'Paradise' || a.substring(0,8) == 'PARADISE'){
                  slpara = slpara + 1;
                 }
                 if(a.substring(0,3) == 'J4F' || a.substring(0,3) == 'J4F'){
                  slj4f = slj4f + 1;              
                 }  
               if(a.substring(0,3) == 'KTS' || a.substring(0,3) == 'KTS'){
                  slkts = slkts + 1;
                 } 
                if(a.substring(0,7) == 'TheLorD' || a.substring(0,7) == 'TheLord'){
                  sltl = sltl + 1;
                 } 
                 if(a.substring(0,2) == 'RB' || a.substring(0,2) == 'RB'){ 
                  slrb = slrb + 1;
                 }                  
                if(a.substring(0,8) == 'Kingsman' || a.substring(0,8) == 'KINGSMAN'){
                  slking = slking + 1;
                 }  
                  if(a.substring(0,10) == 'VietJetAir' || a.substring(0,10) == 'VietJetair'){ 
                  slviet = slviet + 1;
                 } 
               if(a.substring(0,4) == 'SEAL' || a.substring(0,4) == 'SEAL'){
                  slsea = slsea + 1;
                 } 
                if(a.substring(0,5) == 'SATAN' || a.substring(0,5) == 'Satan'){
                  slsa = slsa + 1;
                  }
               if(a.substring(0,6) == 'GALAXY' || a.substring(0,6) == 'Galaxy'){
                  slglx = slglx + 1;
                  }
               if(a.substring(0,10) == 'Huyết Lang' || a.substring(0,10) == 'HUYẾT LANG'){
                  slhl = slhl + 1;
                  }
              }
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#3019ff')
              .setAuthor('Anh Chị Em Rô Lê Pờ Lây.' ,'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')
                .setImage('https://cdn.discordapp.com/attachments/697049699193978941/746691133660332092/divider_1.gif')    
              .setTitle('NHỮNG GANG CHƯA CHÍNH THỨC')
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                  {name:'** - Số Lượng Nhóm KTS **:' +"  " + slkts ,value: '➖➖➖➖➖➖➖➖➖➖' },  
                  {name:'** - Số Lượng Nhóm Paradise **:'       +"  " + slpara ,value: '➖➖➖➖➖➖➖➖➖➖' },
                  {name:'** - Số Lượng Nhóm J4F **:' +"  " + slj4f ,value: '➖➖➖➖➖➖➖➖➖➖' },  
                  {name:'** - Số Lượng Nhóm TheLorD **:' +"  " + sltl ,value: '➖➖➖➖➖➖➖➖➖➖' },
                  {name:'** - Số Lượng Nhóm RB **:'         +"  " + slrb ,value: '➖➖➖➖➖➖➖➖➖➖' },
                  {name:'** - Số Lượng Nhóm VietJetAir **:'         +"  " + slviet ,value: '➖➖➖➖➖➖➖➖➖➖' },
                  {name:'** - Số Lượng Nhóm SEAL **:'         +"  " + slsea ,value: '➖➖➖➖➖➖➖➖➖➖' },
                  {name:'** - Số Lượng Nhóm Kingsman **:'         +"  " + slking ,value: '➖➖➖➖➖➖➖➖➖➖' },
                  {name:'** - Số Lượng Nhóm SATAN **:' +"  " + slsa ,value: '➖➖➖➖➖➖➖➖➖➖' },
                  {name:'** - Số Lượng Nhóm Galaxy **:' +"  " + slglx ,value: '➖➖➖➖➖➖➖➖➖➖' },
                  {name:'** - Số Lượng Nhóm Huyết Lang **:' +"  " + slhl ,value: '➖➖➖➖➖➖➖➖➖➖' },
                  )
             
               message.channel.send(exampleEmbed);
          }
      })
  }

///============== INFO GANG ==============///


if (command == ',gang') {{
  if(message.member.roles.cache.some(r => r.name === 'Homie'))
    return message.channel.send(`Bạn không đủ quyền hạn để check, ${message.author}!`)};
     

            request({
          url: url,
          json: true
      }, function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length)

              var slim = 0; var slmj = 0; var slsqd =0; var slmrj =0; var slsq =0; var slimt =0; var slaca =0; var sldemy =0; var sllgg =0; var sllast = 0;
              for (let i=1; i<entry.length; i++)
             {
                var a = entry[i]["name"]; 
             
                 if(a.substring(0,8) == 'Immortal' || a.substring(0,8) == 'IMMORTAL'){
                  slim = slim + 1;
                 }
                if(a.substring(0,3) == 'imt' || a.substring(0,3) == 'IMT' ){
                  slimt = slimt + 1;
                 }
                 if(a.substring(0,2) == 'MJ' || a.substring(0,2) == 'mj'){
                  slmj = slmj + 1;
                 }
                 if(a.substring(0,3) == 'MrJ' || a.substring(0,3) == 'MRJ' ){
                  slmrj = slmrj + 1;
                 }
               if(a.substring(0,5) == 'Squad' || a.substring(0,5) == 'SQUAD'){
                  slsqd = slsqd + 1;
                 }
                if(a.substring(0,2) == 'SQ' || a.substring(0,2) == 'SQ' ){
                  slsq = slsq + 1;
                 }
                
               if(a.substring(0,3) == 'ACA' || a.substring(0,3) == 'ACA' ){
                  slaca = slaca + 1;
                 }
               if(a.substring(0,7) == 'Academy' || a.substring(0,7) == 'Academy' ){
                  sldemy = sldemy + 1;
                 }
               if(a.substring(0,7) == 'Legends' || a.substring(0,7) == 'Legends' ){
                  sllast = sllast + 1;
                 }
                if(a.substring(0,2) == 'LG' || a.substring(0,2) == 'LG' ){
                  sllgg = sllgg + 1;
                }
              }
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#3019ff')
              .setAuthor('Anh Chị Em Rô Lê Pờ Lây.' ,'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')
              .setTitle('NHỮNG GANG CHÍNH THỨC.')
              .setThumbnail(usingGIF)
              .setTimestamp()
              .setFooter(XLfooter)
              .addFields(
                  {name:'** - Số Lượng Gang Immortal **:' +"  " + slim + '          |    IMT: ' + slimt ,value: '➖➖➖➖➖➖➖➖➖➖➖➖➖➖' },
                  {name:'** - Số Lượng Gang MJ **:'  +"  " + slmj + '               |    MrJ: ' + slmrj ,value: '➖➖➖➖➖➖➖➖➖➖➖➖➖➖' },
                  {name:'** - Số Lượng Gang Squad **:'  +"  " + slsqd + '           |    SQ: ' + slsq ,value: '➖➖➖➖➖➖➖➖➖➖➖➖➖➖' },
                  {name:'** - Số Lượng Gang ACA **:'         +"  " + slaca + '      |    Academy: ' + sldemy ,value: '➖➖➖➖➖➖➖➖➖➖' },
                {name:'** - Số Lượng Gang Legends  **:' +"  " + sllast + '       |    LG: ' + sllgg  ,value: '➖➖➖➖➖➖➖➖➖➖➖➖➖➖' },
                  )
              .setImage('https://cdn.discordapp.com/attachments/697049699193978941/746691133660332092/divider_1.gif')    
               message.channel.send(exampleEmbed);
          }
      })
  } 

  
//////
var recurring_msg = null

rcring_embed = new Discord.MessageEmbed()
  .setColor('#42f5b3')
  .setAuthor('Đồn Công An Chó .', 'https://cdn.discordapp.com/attachments/569209589967486984/811540612989845524/ACE_logo_7000x7000_300ppi.png')   
  .setTitle(' ĐỌC KĨ HƯỚNG DẪN SỬ DỤNG TRƯỚC KHI DÙNG 🐵')
  .setThumbnail(usingGIF)
  .setTimestamp()
  .setFooter(XLfooter)
  .setDescription('・Tên Ingame:\n・Giới tính: \n・Nơi ở: \n ・Ngày tháng năm sinh: \n・Ngày vào CA: \n・Level hiện tại: \n・Khung giờ Online chắc chắn: \n・Đã đọc hết luật server: có \n・Cam Kết :  Out ngành trước 1 tháng đi tù 1200p ,  cam kết nếu làm công an bẩn ( tàng trữ tiền bẩn, chất cấm ) , cấu kết liên quan tới gang/nhóm đi tù 7200p - BAN \n・Link steam: \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n ** - LƯU Ý : NHỮNG BẠN MỚI VÔ HÃY ĐỌC KĨ CÁC KÊNH NÀY ĐỂ HIỂU RÕ THÊM VỀ LUẬT TRONG NGÀNH, CHECK THÔNG BÁO LIÊN TỤC ĐỂ BIẾT THÊM NHIỀU UPDATE ** \n <#853579598805336066> , <#794611719409238036> , <#794611719074873364> , <#794611719074873365> , <#794611719896563748>' )
                  
var rcr_channel_id = 794611719666008121
var bot_id = 915613183023120434

  if(message.channel.id !== '794611719666008121' && message.channel.id !== '794611719666008124') return;
    if(message.author.bot) return;

	if (message.channel.id === '794611719666008124') 
    rcring_embed.setDescription('**● OUT NGÀNH** \n - Cam kết CA sẽ tính theo ngày vào và ngày out. Nếu các bạn out trước trong thời gian dưới sẽ bị lãnh án tù \n - 1 tuần đi tù 1200p \n - 2 tuần đi tù 720p \n - 3 tuần đi tù 420p \n - 4 tuần đi tù 240p \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n **● OFF-DUTY**\n Các đơn off của các bạn sẽ được duyệt nhưng khi off-duty và quay về ngành thì sẽ do QLCA,PGĐCA,GĐCA xét ngành và sẽ lấy phí phụ thu theo chức vụ của bạn nhầm mục đích cho các bạn hạn chế off lại \n - Hạ Sĩ nộp 1tr ingame \n - Trung Sĩ nộp 3tr ingame \n - Thượng Sĩ 5tr inagme \n **LƯU Ý : KHI OFF DUTY BẠN MUỐN ĐỂ TÊN GÌ HAY LÀM GÌ CŨNG ĐƯỢC NHƯNG TUYỆT ĐỐI KHÔNG ĐỔI TÊN ĐỂ THAM GIA HOẠT ĐỘNG BUÔN CỦA CÁC NHÓM ĐÃ TỪNG TƯƠNG TÁC VỚI CA HOẶC QUA GANG CHIẾM ĐÓNG. NẾU PHÁT HIỆN = CA BẨN NHẬN ÁN 7200P - BAN VĨNH VIỄN** ');

  
    message.channel.messages.fetch().then((messages) => {
        const MessageToDelete = messages.filter((msg) => msg.author.id === client.user.id).array();

        if (MessageToDelete) {
            message.channel.bulkDelete(MessageToDelete, true);

            message.channel.send(rcring_embed);
        } else message.channel.send(rcring_embed);
    })
  
}); 
client.login('OTE1NjEzMTgzMDIzMTIwNDM0.GitJI4.ucqucB4nXffNkGpVU8B3CW4eZY9Z5VRYEVE4rU');
// xl ODY0NDE1NTEyMTM3NTY0MTgw.YO1Hrg.kraKyE53_QOHn1knJXEVSOiabfQ

