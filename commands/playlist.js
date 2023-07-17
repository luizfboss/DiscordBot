const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Listen to your study playlist."),
    
    // Async function 
    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/5jtIpYaaFTza3O9ZnaVrLa?si=87468f95168f46e6")
    }
}
