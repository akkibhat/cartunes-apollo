var config = {
  development: {
    server: {
      host: "localhost",
      port: 3000,
    },
    "callback":"http://localhost:3000/auth/google/callback",
    "consumerKey":"470137314086-vf7t230qquetdnj7uinh2noa0emsr1ov.apps.googleusercontent.com",
    "consumerSecret":"_QzcgOCiy8REv4UXkAvIX70I",
//    "default_playlist_uri":"SPOTIFY URI TO DEFAULT PLAY LIST (cannot be private!)", //(optional)
    "htmlPretty": "true", //(optional)
    "bombThreshold": 3, //(optional)
    "bomb_track": "spotify:track:1JFeNGtkTjiTWgSSz0iHq5"
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];

