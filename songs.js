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

// $.getJSON("https://music-history-9b169.firebaseio.com/songs.json").then(function (data) {
//   console.log("json successfully loaded")
//   console.log(data)
//   songs = data.songs;
//   populateSongs(songs)
// })

function getSongs (callback) {
  return new Promise ( function () {
    $.ajax({
      url: 'https://music-history-9b169.firebaseio.com/songs.json'
    }).done(function (songData) {
      for (let song in songData) {
        songs.push(songData[song])
      }
      callback(songs)
    })
  })
}

//Grabs the second JSON file and appends each song onto the end of the array

function loadMoreSongs () {
  return new Promise ( function () {
    $.ajax({
      url: 'https://music-history-9b169.firebaseio.com/moresongs.json'
    }).done(function (songData) {
      for (let song in songData) {
        songs.push(songData[song])
      }
      populateSongs(songs)
    })
  })
}

//ADD MUSIC SECTION

//Trying to give each song an individual ID based on their index in the array each time populateSongs runs
//This would make the deleteSong function work with the array slice/splice/whatever method

function populateSongs(songs) {
  $("#results").html("")
  songs.forEach( function (song, index) {
    $("#results").append(
    `<article class="songFile" id="`+ index +`">
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
    var songId = evt.target.closest(".songFile").id
    songs.splice(songId, 1)
    populateSongs(songs)
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

getSongs(populateSongs)

});












