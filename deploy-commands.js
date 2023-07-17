// This has to be run only once

const { REST, Routes } = require("discord.js")

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

const commands = []

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON())
}

// REST Instance
const rest = new REST({version: "10"}).setToken(TOKEN);

// deploy
(async () => {
    try {
        console.log(`Resetting ${commands.length} commands...`)

        // PUT
        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {body: commands}
        )
        console.log("All commands have been registered!")
    }
    catch (error) {
        console.error(error)
    }
})()