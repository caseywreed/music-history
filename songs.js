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
  songs = data.songs;
  populateSongs(songs)
})

//Grabs the second JSON file and appends each song onto the end of the array

function loadMoreSongs () {
  $.getJSON("moresongs.json").then(function (data) {
    var newSongs = data.songs
      newSongs.forEach(function (song) {
        songs.push(song)
      })
    populateSongs(songs)
  })
}

//ADD MUSIC SECTION

function populateSongs(songs) {
  $("#results").html("")
  songs.forEach( function (song) {
    $("#results").append(
    `<article class="songFile">
    <h2>${song.name}</h2>
    <ul><li>${song.artist}</li>
    <li>${song.album}</li>
    <li>${song.genre}</li>
    <button class="deleteButton">Delete This Song</button></ul>
    </article>`)
    })

  $("#results").append(`<button id="moreSongsButton">More Songs</button>`)
  $("#moreSongsButton").click(loadMoreSongs)

  $(".deleteButton").on("click", function (evt) {
    console.log("deleteSong running")
    console.log(evt)
    evt.target.closest(".songFile").classList.add("hidden")
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

function deleteSong (evt) {
  console.log("deleteSong running")
  console.log(evt)
}

});










