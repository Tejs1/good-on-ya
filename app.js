window.onSpotifyWebPlaybackSDKReady = () => {
  const userAccessToken = "[access token]";
  const webPlayback = new Spotify.Player({
    name: "Spotify Web Playback SDK",
    getOAuthToken: (callback) => {
      callback(userAccessToken);
    },
  });
  webPlayback.connect();
};
