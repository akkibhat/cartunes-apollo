module.exports = {
  server: {
    host: 'localhost',
    port: process.env.PORT || 3000,
  },
  mopidy: {
    host: 'localhost:6680'
  },
  googleAuth: {
    consumerKey: '470137314086-vf7t230qquetdnj7uinh2noa0emsr1ov.apps.googleusercontent.com',
    consumerSecret: '_QzcgOCiy8REv4UXkAvIX70I'
  },
  default_playlist_uri: "", // Optional. Spotify playlist URI to play when no songs are queued. Cannot be private
  htmlPretty: "true", // Optional. If the HTML should be outputted as pretty
  bombThreshold: 3, // Optional. How many bomb votes are needed to skip a song
  bomb_track: "spotify:track:1JFeNGtkTjiTWgSSz0iHq5", // Optional. Track to play when a song is skipped
  callback:"http://localhost:3000/auth/google/callback"
};









