let rpc = require("discord-rpc")

const client = new rpc.Client({transport: 'ipc'})

const guildId = '716185267152617485'
let firstLine, secondLine, firstNumber, secondNumber, partyRandomInt, arrRandomInt
let arrNick = 'My GitHub'
let arrId = 'https://github.com/Devollox'
let arrNameJsRandom, arrFrameJsRandom

function sleep(millis) {
    let date = new Date();
    let curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

let arrNameJs = [
    'Navbar.tsx',
    'App.tsx',
    'Sidebar.tsx',
    'ReactModule.tsx',
    'StyleComponents.tsx',
]
let arrFrameJs = [
    'Next.js',
    'React.js',
    'Vue.js',
    'Angular.js'
]
async function getEntity() {
    arrNameJsRandom = Math.floor(Math.random() * 5)
    arrFrameJsRandom = Math.floor(Math.random() * 4)
}

async function qetInt() {
    firstLine = Math.floor(Math.random() * 40);
    secondLine = Math.floor(Math.random() * 20);
    firstNumber = secondLine + 13;
    secondNumber = firstLine + 26;
    partyRandomInt = Math.floor(Math.random() * 111010);
    arrRandomInt = Math.floor(Math.random() * 2);
}

function getElement() {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: `${arrFrameJs[arrFrameJsRandom]}/${arrNameJs[arrNameJsRandom]}`,
            state: `Line: ${firstLine}/${secondLine} ${firstNumber}.${secondNumber}kb`,
            assets: {
                large_image: "https://media.tenor.com/_sRq7f0tQLEAAAAC/reactjs.gif",
                large_text: `Ебашу на js`,
                small_image: "URL link",
                small_text: "Text",
            },
            timestamps: {
                start: partyRandomInt,
            },
            buttons: [
                {
                    label: `${arrNick}.`,
                    url: `${arrId}`
                },
                {
                    label: `My WebSite.`,
                    url: `https://devollox.fun/`
                },
            ]
        }
    })
}


client.on('ready', async () => {
    qetInt()
    getElement()
    getEntity()

    setInterval(() => {
        getEntity()
        qetInt()
        getElement()
    }, 3 * 1000)

    setInterval(() => {
        sleep(500)
        if (arrNick === 'My GitHub') {
            arrNick = 'My Steam'
            arrId = 'https://steamcommunity.com/id/Cookiemp4/'
            return {arrNick, arrId}
        }
        if (arrNick === 'My Steam') {
            arrNick = 'My GitHub'
            arrId = 'https://github.com/Devollox'
            return {arrId, arrNick}
        }
    }, 6000)

})

client.login({clientId: guildId}).catch(console.error);
