const { Client } = require('discord-rpc');

const client = new Client({ transport: 'ipc' })

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Apply in discord below",
            assets: {
                large_image: "big",
                large_text: "Click Join!",
            },
            buttons: [
                { label: "Join Team Resonant", url: "https://discord.gg/8rUgMUM" },
            ]
        }
    })
    .catch(console.error)
    console.log("Status is ready to use!");
});

client.login({ clientId: "827578608813867028" }).catch(console.error);

