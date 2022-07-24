const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;YT : MikAzu 929;;;'
                    + 'FN:YT : MikAzu 929\n' // full name
                    + 'ORG:Asyraf;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6281946945315:+62 819-4694-5315\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: '', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator|oraf)$/i

module.exports = handler
