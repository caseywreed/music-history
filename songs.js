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
  $("#resultsField").append(
    `<h2>${songs.name}</h2>
    <ul><li>${songs.artist}</li>
    <li>${songs.album}</li>
    <li>${songs.genre}</li></ul>`
    )
}

//The function should collect the values of the input fields,
//add them to the songs object, and then re-run the populateSongs() function

//EVENT LISTENERS

$("#addButton").click(addSong)

function addSong () {
  console.log("addSong is running")
  console.log($("#addArtist").val)
  songs.push({
    artist: $("#addArtist").val(),
    name: $("#addName").val(),
    album: $("#addAlbum").val(),
    genre: $("#addGenre").val(),
  })
  console.log(songs)
  populateSongs(songs)
  toggleHiddenMain();
}

});










