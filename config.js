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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_22_03_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDYzLFxuICAgICAgICAzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEwLFxuICAgICAgICA2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA0LFxuICAgICAgICA4MixcbiAgICAgICAgMTYwLFxuICAgICAgICA1OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTExLFxuICAgICAgICA5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA1NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMyxcbiAgICAgICAgNixcbiAgICAgICAgMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICA4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL0FBT0IzR01udUtYeFBGaUpmWFRuUGZHaG4yQjFlamxTL3JhOFFXY1YyRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiemtEbXNIa19RaWkzdlpHN09veVJWZ1wiLFxuICBcInBob25lSWRcIjogXCI0ZTAzMTc3Ni0yNDMwLTRjNzQtYjZmYi04YzI2NWUyZjM4ODlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICAyMTYsXG4gICAgICAxNzksXG4gICAgICAzNixcbiAgICAgIDkzLFxuICAgICAgMTQ5LFxuICAgICAgNTYsXG4gICAgICA0MixcbiAgICAgIDQ5LFxuICAgICAgMTY2LFxuICAgICAgOTQsXG4gICAgICA1MCxcbiAgICAgIDI0NyxcbiAgICAgIDIyLFxuICAgICAgMTkzLFxuICAgICAgMTcwLFxuICAgICAgMjEsXG4gICAgICAyMzUsXG4gICAgICAyMDMsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU5LFxuICAgICAgMjA2LFxuICAgICAgMTM5LFxuICAgICAgMjM0LFxuICAgICAgNjUsXG4gICAgICAxODcsXG4gICAgICAxOSxcbiAgICAgIDEwOSxcbiAgICAgIDAsXG4gICAgICAxMjEsXG4gICAgICAxNzAsXG4gICAgICAxMDUsXG4gICAgICAyNDcsXG4gICAgICAxNDQsXG4gICAgICA0NyxcbiAgICAgIDU0LFxuICAgICAgMTQ3LFxuICAgICAgMTI4LFxuICAgICAgMjM5LFxuICAgICAgODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNTHBwUE1DRUpIVHljMEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImYybWNwTXVxR2l6MG1RSE5TK09MR3RyQzVRVmxWYklaNkhqU090RVJza2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR2p1QmU0bUV3MVlhRUYzaE9TNFJNNlJDSDhNRVR0QnRlQURmQllOUEFoOWZuZFlwdFAwTG9kMlZrbWkyOWRhSEdKZ2oxRHozc3piK2RLWVZ6aHo0Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRzVvQVk4emwrWmcwd0NkWm56a3RBYUZPRTZ1SDFSZ3N1RWpMcnRYcEtPcmQyQ2QvQ05uaGVrdnIrUDQxUEVMcnZWWnB1TForL1VzYlhSdmxBKzRPRFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2MjY3NTM4MTg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIrwnZCa8J2QpfCdkK7wnZCl8J2QriDwnZCJ8J2Qqy5cIixcbiAgICBcImxpZFwiOiBcIjIzMDE1MDIzNTAwNTAzNDo2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjI2NzUzODE4OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc3MzMwMDExOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdjdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2NzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQklpU3l0bWVjM3BZV0srbTFsQVpMaVV1SGw5cGtKMnJBUmR5dmZWR0pJND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3Nzg2NDY3MjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NzI3MzY3NjE1OTBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHY3QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzalorcTFyenUyblRISTlTZzEwdUVLLzBiSGlJOHF3RlZVZHJjMVUzTXBRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc3ODY0NjcyMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzczMzAwMTI1MDM0XCJ9Igp9"
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
