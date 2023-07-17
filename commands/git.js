const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor("Orange")
	.setTitle('Git Commands')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: '$ git init', value: 'Initialize git in directory.', inline: true  },
		{ name: '$ git clone [url]', value: 'Clone a repository.', inline: true },
		{ name: '$ git stash', value: 'Store all modified files temporarily.', inline: true },

        { name: '\u200B', value: '\u200B' },
		{ name: '$ git status', value: 'Review previous versions and create a commit transaction.', inline: true  },
		{ name: '$ git add [file]', value: 'Creates a snapshot of a file when preparing for versioning process.', inline: true },
		{ name: '$ git commit -m "message"', value: 'Permanently write a snapshot of the file to the version history.', inline: true },

        { name: '\u200B', value: '\u200B' },
		{ name: '$ git branch', value: 'List all local branches in curreny repository.', inline: true  },
		{ name: '$ git [branch name]', value: 'Create a new branch.', inline: true },
		{ name: '$ git switch -c [branch-name]', value: 'Switch to specified branch and update the working directory.', inline: true },

        { name: '\u200B', value: '\u200B' },
		{ name: '$ git merge [branch-name]', value: 'Combine the specified branch history to the current branch.', inline: true  },
		{ name: '$ git push [alias] [branch]', value: 'Send all commits from current branch to GitHub.', inline: true },
		{ name: '$ git pull', value: 'Download history and incorporate changes.', inline: true }
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Provides Git commands!"),
    
    // Async function 
    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}
