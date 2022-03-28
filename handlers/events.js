const fs = require("fs");
const allevents = [];
module.exports = async (client) => {
  try {
    const load_dir = (dir) => {
      const event_files = fs.readdirSync(`./events/${dir}`).filter((file) => file.endsWith(".js"));
      for (const file of event_files) {
        try{
          const event = require(`../events/${dir}/${file}`)
          let eventName = file.split(".")[0];
          if(eventName == "message") continue;
          allevents.push(eventName);
          client.on(eventName, event.bind(null, client));
        }catch(e){
          console.log(String(e.stack).grey.bgRed)
        }
      }
    }
    await ["client", "guild"].forEach(e => load_dir(e));
    try {
      const stringlength = 69;
      console.log("\n")
      console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + `Welcome to SERVICE HANDLER!`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `Welcome to SERVICE HANDLER!`.length) + "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + `  /-/ By https://dsc.gg/deadshotgaming /-/`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `  /-/ By https://dsc.gg/deadshotgaming /-/`.length) + "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + `  /-/ Discord: TN DEADSHOT#8167 /-/`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `  /-/ By Discord: TN DEADSHOT#8167 /-/`.length) + "   ┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
      console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
    } catch {
      /* */ }
    try {
      const stringlength2 = 69;
      console.log("\n")
      console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.yellow)
      console.log(`     ┃ `.bold.yellow + " ".repeat(-1 + stringlength2 - ` ┃ `.length) + "┃".bold.yellow)
      console.log(`     ┃ `.bold.yellow + `Logging into the BOT...`.bold.yellow + " ".repeat(-1 + stringlength2 - ` ┃ `.length - `Logging into the BOT...`.length) + "┃".bold.yellow)
      console.log(`     ┃ `.bold.yellow + " ".repeat(-1 + stringlength2 - ` ┃ `.length) + "┃".bold.yellow)
      console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.yellow)
    } catch {
      /* */ }
  } catch (e) {
    console.log(String(e.stack).grey.bgRed)
  }
};
/**
 * @INFO
 * Bot Coded by TN DEADSHOT#8167 | https://dsc.gg/deadshotgaming
 * @INFO
 * Work for Deadshot X Development | https://dsc.gg/deadshotgaming 
 * @INFO
 * Please mention him / Deadshot X Development, when using this Code! 
 * @INFO
 */
