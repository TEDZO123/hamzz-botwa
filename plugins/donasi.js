let handler = async m => m.reply(`
*DONATE*
 Pulsa : 085742344873
 Dana : 085742344873
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
