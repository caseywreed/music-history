$(document).ready(function () {

//SPA Functionality

$("#homeLink").click(toggleHiddenMain)
$("#addMusicLink").click(toggleHiddenAddMusic)


// addMusicDiv = $("#addMusic")
// mainContentDiv = $("#mainContent")

function toggleHiddenAddMusic(evt) {
  $("#addMusic").toggleClass("hidden")
  $("#mainContent").toggleClass("hidden")
}

function toggleHiddenMain(evt) {
  $("#mainContent").toggleClass("hidden")
  $("#addMusic").toggleClass("hidden")
}

var songs = []

var jqxhr = $.getJSON("songs.json", function(res) {
  console.log("success");
})

console.log(jqxhr)

// console.log(songs)

// songs.forEach(populateSongs)

function populateSongs(songs) {
  resultsField.append(
    `<h2>${songs.name}</h2>
    <ul><li>${songs.artist}</li>
    <li>${songs.album}</li>
    <li>${songs.genre}</li></ul>`
    )
}

//ADD MUSIC SECTION

//The function should collect the values of the input fields,
//add them to the songs object, and then re-run the populateSongs() function
//to refresh the main page. Maybe it could even navigate to the main page itself?

//EVENT LISTENERS

$("#addButton").click(addSong)

function addSong () {
  console.log("addSong is running")
  console.log($("#addArtist").val)
  songs.push({
    artist: $("#addArtist").value,
    name: $("#addName").value,
    album: $("#addAlbum").value,
    genre: $("#addGenre").value,
  })
  console.log(songs)
  populateSongs(songs)
  // populateSongs(songs[songs.length - 1])
  toggleHiddenMain();
}

});










