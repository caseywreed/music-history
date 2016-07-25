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






// function populateProducts() {
//   for (i = 0; i < productSpecs.length; i++) {
//     document.getElementById("products").innerHTML +=
//     "<article>" + productSpecs[i].image + "</img>" +
//     "<h1>" + productSpecs[i].name + "</h1>" +
//     "<p>" + productSpecs[i].description + "</p>" +
//     "<h3>Availability: " + productSpecs[i].availability + "</h3>" +
//     "<h4>" + productSpecs[i].price + "</h4>"
//     "</article>"
//   }
// }