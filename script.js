async function getLyrics() {
  const artist = document.getElementById("artist").value;
  const title = document.getElementById("title").value;
  const output = document.getElementById("lyrics");

  if (!artist || !title) {
    output.textContent = "Please fill in both fields.";
    return;
  }

  const url = `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    output.textContent = data.lyrics || "Lyrics not found.";
  } catch (error) {
    output.textContent = "Error fetching lyrics.";
  }
}
