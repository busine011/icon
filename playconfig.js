 const player = new Plyr('#player', {
      fullscreen: {
        enabled: true,
        iosNative: false
      },
      controls: [
        "play-large",
        "play",
        "progress",
        "duration",
        "volume",
        "fullscreen",
        "autoplay"
      ],
      muted: true,
      storage: {
        enabled: false
      }
    });
    player.play();
