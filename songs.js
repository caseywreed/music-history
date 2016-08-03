"use strict";

$(document).ready(function () {

//SPA Functionality

$("#homeLink").click(toggleHiddenMain)
$("#addMusicLink").click(toggleHiddenAddMusic)

function toggleHiddenAddMusic() {
  $("#addMusic").removeClass("hidden");
  $("#mainContent").addClass("hidden")
}

function toggleHiddenMain() {
  $("#mainContent").removeClass("hidden")
  $("#addMusic").addClass("hidden")
}

var songs = []




$.getJSON("songs.json").then(function (data) {
  console.log("json successfully loaded")
  console.log(data)
}).catch(function (res, textStatus, err) {
  console.error(res, textStatus, err)
})

// $.getJSON("songs.json", function (data) {
//   console.log("success", data)
// })
//   .done(function (data) {
//     console.log("second success", data)
//   })
//   .fail(function (data) {
//     console.log("it failed", data)
//   })
//   .always(function (data) {
//     console.log("finished running", data)
//   })

// jqxhr.done(console.log(jqxhr.responseText))


//ADD MUSIC SECTION

function populateSongs(songs) {
  $("#results").html("")
  songs.forEach( function (song) {
    console.log('inside for each')
    $("#results").append(
    `<h2>${song.name}</h2>
    <ul><li>${song.artist}</li>
    <li>${song.album}</li>
    <li>${song.genre}</li></ul>`)
    })
}

//The function should collect the values of the input fields,
//add them to the songs object, and then re-run the populateSongs() function

//EVENT LISTENERS

$("#addButton").click(addSong);

function addSong () {
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










