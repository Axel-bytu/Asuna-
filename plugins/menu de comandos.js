//NO MODIFIQUES EL NรMERO DEL CREADOR NI EL NOMBRE.. SOLO AGREGA LA INFORMACIรN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS <3 
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT
//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
//LLEVO AL REDEDOR DE 1 AรO Y MEDIO EN LA ELABORACION DE ESTE BOT, SI TU LO EDITAS EN UNA SEMANA NO ERES TU EL CREADOR, SI LO EDITAS TOTALMENTE A TU MANERA SERIA UTULIZADO MI BOT COMO BASE Y AHI SI LO SERIAS  

let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media/Axel/Asuna.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`

*โจ๐ola, ${username}!!*
ยปยปยปยปยป๐ผ๐จ๐ช๐ฃ๐๊จ๏ธ  แทฆรอรยซยซยซยซยซ

ยป๐๐ช๐ฎ๐ขฬ ๐๐ง๐๐จ๐ง๐ญ๐ซ๐๐ซ๐ฬ๐ฌ ๐ฅ๐จ๐ฌ ๐๐ข๐ฌ๐ญ๐ข๐ง๐ญ๐จ๐ฌ ๐ฆ๐๐ง๐ฎฬ๐ฌ ๐๐ ๐๐จ๐ฆ๐๐ง๐๐จ๐ฌ ๐๐ข๐ฌ๐ฉ๐จ๐ง๐ข๐๐ฅ๐๐ฌยซ
โโโโโโโโโโโโโโโโโโ
ยปยปยป๐๐ฐ๐ง๐๐ซ ๐๐๐ง๐ฎยซยซยซ
ยปยปยป๐๐ซ๐จ๐ฎ๐ฉ ๐๐๐ง๐ฎยซยซยซ
ยปยปยป๐๐จ๐ฐ๐ง๐ฅ๐จ๐๐ ๐๐๐ง๐ฎยซยซยซ
ยปยปยป๐๐๐ฆ๐๐ฌ ๐๐๐ง๐ฎยซยซยซ
ยปยปยป๐๐ญ๐ข๐๐ค๐๐ซ ๐๐๐ง๐ฎยซยซยซ
ยปยปยป๐๐ซ๐จ๐ ๐ซ๐๐ฆ๐ฆ๐ข๐ง๐  ๐๐๐ง๐ฎยซยซยซ
ยปยปยป๐๐๐ง๐๐จ๐ฆ ๐๐๐ง๐ฎยซยซยซ
ยปยปยป๐๐จ๐ข๐๐๐ฆ๐๐ข๐ฅ ๐๐๐ง๐ฎยซยซยซ
ยปยปยป๐๐จ๐ข๐๐ ๐๐๐๐๐๐ญ๐ฌ ๐๐๐ง๐ฎยซยซยซ
ยปยปยป๐๐ฎ๐๐ข๐จ ๐๐๐ง๐ฎยซยซยซ
ยปยปยป๐๐จ๐ ๐จ๐ฌ ๐๐๐ง๐ฎยซยซยซ
โโโโโโโโโโโโโโโโโโ

ยป๐๐ฌ๐ญ๐ ๐๐จ๐ญ ๐๐ฌ ๐๐ ๐ฎ๐ฌ๐จ ๐ฉ๐ซ๐ข๐ฏ๐๐๐จ, ๐ฉ๐จ๐ซ ๐ฅ๐จ ๐ญ๐๐ง๐ญ๐จ, ๐ฌ๐ข ๐๐๐ฌ๐๐๐ฌ ๐จ๐๐ญ๐๐ง๐๐ซ ๐๐๐๐๐ฌ๐จ ๐ ๐๐ฅ, ๐ก๐๐๐ฅ๐ ๐๐จ๐ง ๐๐ฅ ๐จ๐ฐ๐ง๐๐ซ ๐ฉ๐๐ซ๐ ๐ฏ๐๐ซ ๐ช๐ฎ๐ ๐ฌ๐ ๐ฉ๐ฎ๐๐๐ ๐ก๐๐๐๐ซ ๐๐ฅ ๐ซ๐๐ฌ๐ฉ๐๐๐ญ๐จ.

ยป๐๐ข ๐๐๐ฌ๐๐๐ง ๐ฎ๐ญ๐ข๐ฅ๐ข๐ณ๐๐ซ ๐๐ฅ๐ รบ๐ง ๐ฆ๐๐งรบ ๐จ ๐๐จ๐ฆ๐๐ง๐๐จ, ๐ฌ๐ข๐ฆ๐ฉ๐ฅ๐๐ฆ๐๐ง๐ญ๐ ๐ข๐ง๐ญ๐ซ๐จ๐๐ฎ๐ณ๐๐๐ง ๐๐ฅ ๐ฉ๐ซ๐๐๐ข๐ฃ๐จ ๐๐ฌ๐ญ๐๐๐ฅ๐๐๐ข๐๐จ (.) ๐ฃ๐ฎ๐ง๐ญ๐๐ฆ๐๐ง๐ญ๐ ๐๐จ๐ง ๐๐ฅ ๐๐จ๐ฆ๐๐ง๐๐จ.

ยป๐๐ฃ๐๐ฆ๐ฉ๐ฅ๐จ: .๐จ๐ฐ๐ง๐๐ซ ๐ฆ๐๐ง๐ฎ

`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, 'ยฉ๐๐ข๐ซ๐ข๐ญ๐จแ  แทฆรอร', '๐ผ๐ด๐ฝ๐ ๐๐ธ๐ผ๐ฟ๐ป๐ด', `#menusimple`, '๐ผ๐ด๐ฝ๐ ๐ฐ๐๐ณ๐ธ๐พ๐', `#menuaudios`, '๐ธ๐ฝ๐๐๐ฐ๐ถ๐๐ฐ๐ผ', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menu|menรบ|memu|memรบ|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler
