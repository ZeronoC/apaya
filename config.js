global.DeveloperMode = 'false' //true Or false
global.owner = ['6289614412045', '6281286800298'] // Put your number here
global.mods = ['6289614412045','6281286800298']  // Want some help?
global.prems = ['62857121256952','6285795431803','6289614412045','6285336621105'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'faisalkey'
}

// Sticker WM
global.packname = 'ZeronBot'
global.author ='+6289614412045'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
