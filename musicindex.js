const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    proggress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img')

const music = new Audio()

const songs = [

    //Welcome Home

    {
        link: 'assets/song1.mp3',
        displayName: 'Welcome Home (Sanitarium)',
        cover: 'assets/img1.jpg',
        artist: 'Metallica'
    },

    //Fear of the Dark

    {
        link: 'assets/song2.mp3',
        displayName: 'Fear of the Dark',
        cover: 'assets/img2.jpg',
        artist: 'Iron Maiden'
    },

    //Wind of Change

    {
        link: 'assets/song3.mp3',
        displayName: 'Wind of Change',
        cover: 'assets/img3.jpg',
        artist: 'Scorpions'
    }
]

let musicIndex = 0
let isPlaying = false 

function playSettings() {
    if(isPlaying) {
        pauseMusic()
    } else {
        startMusic()
    }
}

function startMusic() {
    isPlaying = true
    playBtn.classList.replace('fa-play', 'fa-pause')
    playBtn.setAttribute('title', 'Pause')
    music.play()
}

function pauseMusic() {
    isPlaying = false
    playBtn.classList.replace('fa-pause', 'fa-play')
    playBtn.setAttribute('title', 'Play')
    music.pause()
}

function loadMusic(song) {
    music.src = song.link
    title.textContent = song.displayName 
    artist.textContent = song.artist
    image.src = song.cover
    background.src = song.cover 
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length
    loadMusic(songs[musicIndex])
    startMusic()
}

function updateProgressBar() {
    const { duration, currentTime} = music
    const proggressPercent = (currentTime / duration) * 100

    proggress.style.width = `${proggressPercent}%`

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0')
    durationEl.textContent = `${formatTime(duration / 60)}: ${formatTime(duration % 60)}`
    currentTimeEl.textContent = `${formatTime( currentTime / 60)}: ${formatTime(currentTime % 60)}`
}
 
function setProgressBar(e) {
    const width = playerProgress.clientWidth
    const clickX = e.offsetX
    music.currentTime = (clickX / width) * music.duration
}   

playBtn.addEventListener('click', playSettings) 
prevBtn.addEventListener('click', () => changeMusic(-1))
nextBtn.addEventListener('click', () => changeMusic(1))
music.addEventListener('ended', () => changeMusic(1))
music.addEventListener('timeupdate', updateProgressBar)
playerProgress.addEventListener('click', setProgressBar)

loadMusic(songs[musicIndex])
