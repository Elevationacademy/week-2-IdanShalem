// Learn
const Family = function(){
    const members = []

    const birth = function(name) {
        members.push(name)
        console.log(members)
    }

    return birth
}

const giveBirth = Family()
giveBirth('a')
giveBirth('b')
giveBirth('c')
giveBirth('d')

// Ex-1
const StringFormatter = function(){

    const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

    const skewerCase = str => str.replace(' ', '-')

    return {
        capitalizeFirst,
        skewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorOthy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box

// Ex-2
const Bank = function(){
    _money = 500

    const depositCash = function(cash) {
        _money += cash
    }

    const checkBalance = function(){
        console.log(_money)
    }

    return {deposit: depositCash, showBalance:checkBalance}
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

// Ex-3
const SongsManager = function(){

    const songs = {}
    const link = 'https://www.youtube.com/watch?v='

    const addSong = function(name, url){
        songs[name] = url.replace(link, '')
    }

    const getSong = function(name){
        console.log(link + songs[name])
    }

    return {addSong, getSong}
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("ain't me") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ