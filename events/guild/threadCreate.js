//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot Coded by TN DEADSHOT#8167 | https://dsc.gg/deadshotgaming
 * @INFO
 * Work for Deadshot X Development | https://dsc.gg/deadshotgaming 
 * @INFO
 * Please mention him / Deadshot X Development, when using this Code! 
 * @INFO
 */
