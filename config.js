const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsams@gmail.com"
global.location="Lahore,Pakita"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Tanzania ";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "Bunda Celebrities" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Kalulu😎" 


global.devs = "255626753818" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255626753818";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.auto_react_status = process.env.AUTO_REACT_STATUS || 'true',
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255626753818,255xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_39_03_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMxLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDUxLFxuICAgICAgICA0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDQzLFxuICAgICAgICA5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NixcbiAgICAgICAgMTk5LFxuICAgICAgICA2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NCxcbiAgICAgICAgMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgODUsXG4gICAgICAgIDgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk1LFxuICAgICAgICA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImN3WDNOQmYvV1dCVXVySnVDMVl4Mml6cDJQUE5DOWdHUk01VFc3L0pQOHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5QYzQzMTRXU2g2M0RQZ0V4emsxSGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjRkMjIzZjItNTI5MC00ODNjLThiYjktMDIxMDU0ZDFhOTU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDIxOCxcbiAgICAgIDE3NSxcbiAgICAgIDE2NSxcbiAgICAgIDEzMixcbiAgICAgIDE4NyxcbiAgICAgIDE2NSxcbiAgICAgIDkwLFxuICAgICAgNzgsXG4gICAgICAxNzQsXG4gICAgICAxMjMsXG4gICAgICAxMzMsXG4gICAgICAxMjYsXG4gICAgICAzLFxuICAgICAgMjM5LFxuICAgICAgMjQyLFxuICAgICAgMTM3LFxuICAgICAgMTAzLFxuICAgICAgMTYsXG4gICAgICA5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICAxNSxcbiAgICAgIDExNCxcbiAgICAgIDQ2LFxuICAgICAgMzEsXG4gICAgICA5MCxcbiAgICAgIDE2NyxcbiAgICAgIDIwMCxcbiAgICAgIDE0MyxcbiAgICAgIDIyNSxcbiAgICAgIDE4NSxcbiAgICAgIDEzOCxcbiAgICAgIDI1LFxuICAgICAgMTE0LFxuICAgICAgMjU0LFxuICAgICAgMTY5LFxuICAgICAgMTU1LFxuICAgICAgMjcsXG4gICAgICAxMDUsXG4gICAgICA2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01McHBQTUNFSnpieWMwR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZjJtY3BNdXFHaXowbVFITlMrT0xHdHJDNVFWbFZiSVo2SGpTT3RFUnNrYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWZ0tCVEdzQzFlNkxFNFpsR1RYMTRrVmMyMDFlY3REdnR2dVlnZ0xTZ2RUSmQ0NjBiSi9td20yZGFraXY3RkxhUW9sZWFBcHJMbTdhUHhJRmJEdFlCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzOHBuL0JYMFkvblhjNFA0Z3ZlNExVZXNqajArNEJURUNPK2dqOXVTNzE5MmJOMlJoZk1ObkpuVjU0b294QVFMcitxdXdqZnpLdWtCR0NqTlg1TU9pdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYyNjc1MzgxODo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QivCdkJrwnZCl8J2QrvCdkKXwnZCuIPCdkInwnZCrLlwiLFxuICAgIFwibGlkXCI6IFwiMjMwMTUwMjM1MDA1MDM0OjdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MjY3NTM4MTg6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzczMzAxMTU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2N0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHY3MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCSWlTeXRtZWMzcFlXSyttMWxBWkxpVXVIbDlwa0oyckFSZHl2ZlZHSkk0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc3ODY0NjcyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc3MjczNjc2MTU5MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdjdC5qc29uIjogIntcImtleURhdGFcIjpcInNqWitxMXJ6dTJuVEhJOVNnMTB1RUsvMGJIaUk4cXdGVlVkcmMxVTNNcFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Nzc4NjQ2NzIyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NzMzMDAxMjUwMzRcIn0iCn0="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Powerd By Kalulu Jr." , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Kalulu - MD",
  ownername:process.env.OWNER_NAME|| "*KALULU*",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
