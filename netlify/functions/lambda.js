// lambda.js
// lambda.js
// lambda.js
import fetch from "node-fetch";
import { getSpotifyToken } from "../../Backend/spotifyAuth.js";

// Lambda handler
export const handler = async (event) => {
  try {
    // Get moods from query params or use defaults
    const moodsParam = event.queryStringParameters?.moods;
    const moods = moodsParam ? moodsParam.split(",") : ["happy", "sad", "energetic", "chill"];

    // Get Spotify token
    const token = await getSpotifyToken();
    const results = {};

    for (const mood of moods) {
      try {
        const res = await fetch(
          `https://api.spotify.com/v1/search?q=${encodeURIComponent(mood)}&type=playlist&limit=5`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (!res.ok) {
          console.error(`Spotify API error for mood "${mood}": ${res.status}`);
          results[mood] = [];
          continue;
        }

        const data = await res.json();

        results[mood] = (data.playlists?.items || [])
          .filter(pl => pl != null) // remove null playlists
          .map(pl => ({
            name: pl.name || "Untitled",
            url: pl.external_urls?.spotify || "",
            image: pl.images?.[0]?.url || ""
          }));

      } catch (err) {
        console.error(`Error fetching playlists for mood "${mood}":`, err);
        results[mood] = [];
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(results),
      headers: { "Access-Control-Allow-Origin": "*" },
    };

  } catch (err) {
    console.error("Lambda handler error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
      headers: { "Access-Control-Allow-Origin": "*" },
    };
  }
};

