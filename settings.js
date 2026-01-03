//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0libXNueVdkbStYU1JiWnhWbWhObTRuK0k5UUJGeW5XVnlWMG5EME8zND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGpHQnRiN2ZYL2dTS3REMHB3OXRHWUt3KzkrTEVDdzdQSXpuaU1seVpsTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRmkxUEFaK2NXaktENG83WGRVYTczVDhPRklaUFNmZ2o5c2c5TEFmckhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwT0FxZE9SWUlqSThZbWtEUEJ0WUJJclVoNlBVMFdha0VNRnFMZS9wblNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDc3VkaXpOYW5UNTUrNG5rMklIcHYyQTMvT2ZqN0ZxWlUzUloyZ1pyRk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktqeEF1WXRqZU0zRVBnZFM2ZFNpV013TWlxM0FTTTFackJ6REg5ZkZhUTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VEbWlobG04ZUR5QTRpU3hsRlJ4WGRjVCtWM1RIT01hTi81bEsreUVsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTFJZUN3YWR1dlIxV1B0SWNPZVprMDRpdS8wOEdKQVlRaGorMUM0dDZqUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1oMTFtZGowMDROT2FySS9iQURvK0g0VlZVL21uZTVYamNDRXUwcllTT053bTJaUEtNbDVjRit6T0w2MXFXMDRxaTY2dmdLdkJxZUE1djRwTU0zSGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJaWUl0VWJzYlo3eERSSUdPZWVxOFdZS1JQVytpdVVDbzREU1BJaVRqS1BzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkRQRTFNSDY1IiwibWUiOnsiaWQiOiI5MjMwMTI4NjI5MDc6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi2LPZgNmA2YDZkdmSzaLZgNmA2LEg2b7ZgNmA2ZHZks2i2YDZgNq+2YDZgNmA26fbm9mA26zwnYaK2YDYsdinINi02YDZgNmA2ZHZks2i2YDZgNuB2LLYp9iv24FcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG7wk4ap8JakjfCThqoiLCJsaWQiOiIyMTA3MzcwNDk5MjM2ODQ6MTBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMS0ZpZHNERUwvVDRzb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPVWN0RzhWZkMya2NIVHdhempmaFFtaS93NEJ2YTRwczVPMHNzRFYzM1U0PSIsImFjY291bnRTaWduYXR1cmUiOiJIQ3JjYVVHc1VIK2twQkY1V2t4bnU4K2gzdHMrQU5TbEdTL1owNXRuaVNzWUttNzRjWDRsMVpKamgzT2FZc3VBMGtHRXJOUVFWQ2RMNEtGYkhLd3lEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQlVhbitLVW9PSGthbjdVbjlNay9YamZ0WHpqekZtdkR5dFNEM1BodUpadS9qblpablpDNk51NWR3a0VoNWtCTTE2N3dQZ1EyUHFOMDZzeXVjdC9VaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMTA3MzcwNDk5MjM2ODQ6MTBAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRsSExSdkZYd3RwSEIwOEdzNDM0VUpvdjhPQWIydUtiT1R0TExBMWQ5MU8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZ2dOIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NzQxODMxNiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHT3MifQ==' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '9203012862907' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['9203012862907'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Shehzada' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Shezi" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
