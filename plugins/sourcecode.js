/**
* jangan ganti ya kakak kakak sekalian
* ini cuma buat ninggalin credit gw doang :)
**/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
let esce = `
Script Botz
Sc Ori :
https://github.com/ilmanhdyt/ShiraoriBOT-Md

Sc Recode :
https://bit.ly/3c0WJz9`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: esce,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/esce.jpg') },           
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Source Code',
               url: 'https://bit.ly/3c0WJz9'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Azura Menu',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler


