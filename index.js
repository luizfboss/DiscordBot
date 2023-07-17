// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

// dotenv
const dotenv = require('dotenv');
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

// Importing Commands
const fs = require("node:fs")
const path = require("node:path") // module to manipulate directory paths

const commandsPath = path.join(__dirname, "commands")
// Filtering command files
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js")); 

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`This command in ${filePath} has no data or execute.`)
    }
}

console.log(client.commands)

// Setting bot's status to Online
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});
// Log in to Discord with your client's token
client.login(TOKEN);

client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isStringSelectMenu()) {
        const selected = interaction.values[0]

        switch(selected) {
            case "javascript":
                await interaction.reply("Documentation for JavaScript: (https://developer.mozilla.org/en-US/docs/Web/JavaScript)");
                break
            case "python":
                await interaction.reply("Documentation for Python: (https://docs.python.org/3/)")
                break
            case "csharp":
                await interaction.reply("Documentation for C#: (https://learn.microsoft.com/en-us/dotnet/csharp/)")
                break
            case "cplusplus":
                await interaction.reply("Documentation for Python: (https://devdocs.io/cpp/)")
                break
            case "php":
                await interaction.reply("Documentation for Python: (https://www.php.net/manual/en/)")
                break
            case "discordjs":
                await interaction.reply("Documentation for Python: (https://discordjs.guide/)")
                break
            default:
                await interaction.reply("Please select a valid language")
                break
        }
    }


    if (!interaction.isChatInputCommand()) return 
    // Check command status on console
    // console.log(interaction)

    const command = interaction.client.commands.get(interaction.commandName)

    if (!command) {
        console.error("The command was not found.")
        return
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply("An error has occurred when executing this command")
    }
})