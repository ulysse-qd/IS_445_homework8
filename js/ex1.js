const paintings = [
  {
    "name": "The Starry Night",
    "year": "1889",
    "artist": "Vincent Van Gogh"
  },
  {
    "name": "The Scream",
    "year": "1893",
    "artist": "Edvard Munch"
  },
  {
    "name": "Guernica",
    "year": "1937",
    "artist": "Pablo Picasso"
  }
];

const table = document.getElementById("paintings");

// Apply table styles using CSS
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
table.style.paddingLeft = "5px";
table.style.paddingRight = "5px";
table.style.fontFamily = "Calibri";

// Create table rows for each painting
paintings.forEach(painting => {
  try {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const yearCell = row.insertCell();
    const artistCell = row.insertCell();
    nameCell.textContent = painting.name;
    yearCell.textContent = painting.year;
    artistCell.textContent = painting.artist;
  } catch (error) {
    console.error(error);
  }
});