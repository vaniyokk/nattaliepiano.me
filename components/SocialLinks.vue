<template>
  <nav class="socials">
    <ul>
      <li>
        <a target="_blank" href="https://open.spotify.com/album/4IfZTsLQIQ3ngQ2hOjsweV">
          <SpotifyIcon />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://music.youtube.com/playlist?list=OLAK5uy_mpC_0Gdx77sZAk9DlaWoVDiMuGPeZBj-g">
          <AmazonIcon />
        </a>
      </li>
      <li>
        <a href="https://www.deezer.com/album/332672847">
          <DeezerIcon />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://music.youtube.com/playlist?list=OLAK5uy_mpC_0Gdx77sZAk9DlaWoVDiMuGPeZBj-g">
          <YoutubeIcon />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://instagram.com/nattaliepiano">
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://geo.music.apple.com/us/album/waltz-of-a-woman/1632806501?app=music&ls=1">
          <AppleMusicIcon />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import SpotifyIcon from "~icons/cib/spotify"
import AmazonIcon from "~icons/cib/amazon"
import YoutubeIcon from "~icons/cib/youtube"
import DeezerIcon from "~icons/cib/deezer"
import AppleMusicIcon from "~icons/cib/apple-music"
import InstagramIcon from "~icons/cib/instagram"
</script>

<style>
.socials {
  position: fixed;
  right: 0;
  top: 47%;
  transform: translateY(-50%);
  margin-right: 28px;
}

.socials ul {
  display: flex;
  flex-direction: column;
}

.socials li {
  padding: 12px 8px;
  transform: scale(100%);
  transition: transform 0.2s ease;
}

.socials li:hover {
  transform: scale(150%)
}
</style>