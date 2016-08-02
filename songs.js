$(document).ready(function () {

//SPA Functionality

$("#homeLink").click(toggleHiddenMain)
$("#addMusicLink").click(toggleHiddenAddMusic)

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

//ADD MUSIC SECTION

function populateSongs(songs) {
  console.log("inside populateSongs")
  console.log(songs)
  songs.forEach( function (song) {
    console.log('inside for each')
  $("#resultsField").append(
    `<h2>${song.name}</h2>
    <ul><li>${song.artist}</li>
    <li>${song.album}</li>
    <li>${song.genre}</li></ul>`)
    })
}

//The function should collect the values of the input fields,
//add them to the songs object, and then re-run the populateSongs() function

//EVENT LISTENERS

$("#addButton").click(addSong)

function addSong () {
  console.log("addSong is running")
  songs.push({
    artist: $("#addArtist").val(),
    name: $("#addName").val(),
    album: $("#addAlbum").val(),
    genre: $("#addGenre").val(),
  })
  populateSongs(songs)
  toggleHiddenMain();
}

});










