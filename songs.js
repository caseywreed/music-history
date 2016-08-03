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


  //this should be where the .getJSON goes
  var jqxhr = $.getJSON("songs.json")
  console.log(jqxhr)






//ADD MUSIC SECTION

function populateSongs(songs) {
  console.log("inside populateSongs")
  console.log(songs)
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










