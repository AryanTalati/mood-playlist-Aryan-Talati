// spotifyAuth.js
import fetch from "node-fetch"; // npm install node-fetch

// Replace with your Spotify client ID and secret
const CLIENT_ID = "857731152d23449aab89faaa73f7e019";
const CLIENT_SECRET = "ef0a723aa82c42f68ef013bfa9f694a4";

export async function getSpotifyToken() {
  const authString = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const res = await fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authString}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    throw new Error(`Spotify token request failed: ${res.status}`);
  }

  const data = await res.json();
  return data.access_token; // Return the Bearer token
}
