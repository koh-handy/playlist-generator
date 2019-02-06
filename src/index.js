const axios = require('axios')
const lodash = require('lodash')
const SpotifyWebApi = require('spotify-web-api-node')

// xxx: remove these values and pull them from config.json
const clientId = ''
const clientSecret = ''
const scopes = ['playlist-modify-public']
const redirectUri = 'http://localhost:5768/callback'


const spotifyApi = new SpotifyWebApi({ clientId, clientSecret, redirectUri })
const authUrl = spotifyApi.createAuthorizeURL(scopes)
console.log(authUrl)
//
const foo = `AQBsHJbHdLcnJVUKAHjWxt-W-aEPOIHqVfyi6Uyx1Ooq9FeaGIDhr83JupL23vTb9OUUT0lcKo6B89klX0h4JUq8hJ2As8ogtBJkZ_SLlzAgvUB44iD7zfMWFYea-Y9wEEx_Z6vwRuQqASC1OfyZ8Dmm-Pok_0fl12kCwffkB1TyJOxp8DNnuZN-SNIHJX1h2Yk82IECF2hZVRfk9RipoO3NMR-dj-m11T5XQcDA#_=_`;
function initialize() {
  spotifyApi.authorizationCodeGrant(foo)
    .then(({ body }) => {
      console.log(body)
      spotifyApi.setAccessToken(body.access_token)

      // potifyApi.setRefreshToken(body.refresh_token])
    })
    // spotifyApi.refreshAccessToken()
    .catch(console.error)
}

initialize()

// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
//   function(data) {
//     console.log('Artist albums', data.body);
//   },
//   function(err) {
//     console.error(err);
//   }
// )

// function main() {
//   return initialize()
//     .then(() => console.log(spotifyApi))
//     .then(() => {
//       return spotifyApi.search('father stretch')
//     })
//
// }

// main().then(console.log)

// spotifyApi.setAccessToken('<your_access_token>')

// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(console.log).


// const spotifyTokenUrl = 'https://accounts.spotify.com/api/token'
// axios.post(spotifyTokenUrl, {
//   headers: {'X-Requested-With': 'XMLHttpRequest'},
// })
const storefrontsUrl = 'https://api.music.apple.com/v1/storefronts'
