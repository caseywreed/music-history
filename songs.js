
homeLink = document.getElementById("homeLink")
homeLink.addEventListener("click", toggleHiddenMain)

addMusicLink = document.getElementById("addMusicLink")
addMusicLink.addEventListener("click", toggleHiddenAddMusic)

addMusicDiv = document.getElementById("addMusic")
mainContentDiv = document.getElementById("mainContent")

function toggleHiddenAddMusic(evt) {
  addMusicDiv.classList.remove("hidden")
  mainContentDiv.classList.add("hidden")
}

function toggleHiddenMain(evt) {
  mainContentDiv.classList.remove("hidden")
  addMusicDiv.classList.add("hidden")
}






songNameField = document.getElementById("songNameField")
artistNameField = document.getElementById("artistNameField")
albumNameField = document.getElementById("albumNameField")
genreField = document.getElementById("genreField")
resultsField = document.getElementById("results")

var songs = [
        {
          artist: "Bruce Springsteen",
          name: "Tenth Avenue Freeze-Out",
          album: "Born to Run",
          genre: "Rock",
        },

        {
          artist: "Devo",
          name: "Whip It",
          album: "Freedom of Choice",
          genre: "Pop",
        },

        {
          artist: "R.E.M.",
          name: "Radio Free Europe",
          album: "Murmur",
          genre: "Alternative",
        },

        {
          artist: "The Clash",
          name: "Stay Free",
          album: "Give 'Em Enough Rope",
          genre: "Rock",
        },

        {
          artist: "The Replacements",
          name: "Answering Machine",
          album: "Let It Be",
          genre: "Alternative",
        },
  ]


songs.forEach(populateSongs)

function populateSongs(songs) {
  resultsField.innerHTML +=
    `<h2>${songs.name}</h2>
    <ul><li>${songs.artist}</li>
    <li>${songs.album}</li>
    <li>${songs.genre}</li></ul>`

}
