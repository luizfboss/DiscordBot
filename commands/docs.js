const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('discord.js');

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("No language selected.")
            .addOptions(
                {
                    label: "JavaScript",
                    description: "Check documentation for JavaScript",
                    value: "javascript"
                },
                {
                    label: "Python",
                    description: "Check documentation for Python",
                    value: "python"
                },
                {
                    label: "PHP",
                    description: "Check documentation for PHP",
                    value: "php"
                },
                {
                    label: "C++",
                    description: "Check documentation for C++",
                    value: "cplusplus"
                }, 
                {
                    label: "C#",
                    description: "Check documentation for C#",
                    value: "csharp"
                }, 
                {
                    label: "Discord.js",
                    description: "Check documentation for Discord.js",
                    value: "discordjs"
                }
            )
    )


module.exports = {
	data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Access the documentation of the desired language!"),
        
    async execute(interaction) {
        await interaction.reply({content: "Select one of the langauges below:", components: [row]})
    }
};
