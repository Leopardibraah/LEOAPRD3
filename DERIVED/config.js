/*

# Owner ? : IBRAAH LEO
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['254702302770']
global.ownMain = '254702302770'
global.NamaOwner = 'IBRAAH LEO' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = 'LEOPARD3' //
global.author = 'IBRAAH LEO' //
global.packname = 'LEOPARD3' //
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.welcome = false
global.url1 = 'https://whatsapp.com/channel/0029Vabz7vUJ3jutx2fNsf2P' //gausah diganti
global.url2 = 'https://whatsapp.com/channel/0029Vabz7vUJ3jutx2fNsf2P' //gausah diganti
global.linkgc = 'https://chat.whatsapp.com/EJD2l284bYh3qIsrmycqT4'
global.delayjpm = 3500
global.domain = 'https://guru.sellerpanell.me' // your domian
global.apikey = 'ptla_aRq7aFBbQowvPwLChvjNLX5uE0rYZ6dUdGbFIhqUwUg' // Isi Apikey Plta Lu
global.capikey = 'ptlc_mI4q2CFLyxYSG9lqtpWVJSkqtxbQvZyheemGqW56VUH' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id egg
global.location = '1' // id location

global.mess = { // 
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not IBRAAH LEO.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success sent by Spider V7',
bugrespon: `Processs.....`
}


global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
