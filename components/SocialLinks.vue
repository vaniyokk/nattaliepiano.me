<template>
  <nav class="socials">
    <ul>
      <li>
        <a target="_blank" href="https://open.spotify.com/album/4IfZTsLQIQ3ngQ2hOjsweV">
          <IconCib:spotify />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://music.amazon.com/albums/B0B5PKCYWX">
          <IconCib:amazon />
        </a>
      </li>
      <li>
        <a href="https://www.deezer.com/album/332672847">
          <IconCib:deezer />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://music.youtube.com/playlist?list=OLAK5uy_mpC_0Gdx77sZAk9DlaWoVDiMuGPeZBj-g">
          <IconCib:youtube />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://instagram.com/nattaliepiano">
          <IconCib:instagram />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://geo.music.apple.com/us/album/waltz-of-a-woman/1632806501?app=music&ls=1">
          <IconCib:apple-music />
        </a>
      </li>
    </ul>
  </nav>
</template>


<style lang="scss">
.socials {
  position: fixed;
  right: 0;
  top: 47%;
  transform: translateY(-50%);
  margin-right: 28px;

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    padding: 12px 8px;
    transform: scale(100%);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(150%)
    }
  }

  img {
    width: 24px;
    height: 24px;
  }
}
</style>