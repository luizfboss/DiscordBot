const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Answers with 'Pong!'"),
    
    // Async function 
    async execute(interaction) {
        await interaction.reply("Pong!")
    }
}
