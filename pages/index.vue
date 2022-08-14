<template>
  <main>
    <div class="left">
      <div class="fullname">Natalie Kuzmina</div>
      <h1 class="album-name">Waltz<br /> of a<br /> Woman</h1>
      <a class="cta-link" href="https://onerpm.link/265461647136" _target="blank">{{ $t('pages.index.listen_now') }}</a>
    </div>
    <img class="me" src="~/assets/images/me.jpg" alt="me">
    <div class="album-container">
      <img class="album-image" src="~/assets/images/album.jpeg" alt="Waltz of a Woman album image">
      <h2>{{ $t('pages.index.first_album_out') }}</h2>
    </div>
  </main>
</template>

<style lang="scss">
@import '../assets/sass/variables';

header {
  padding: 0 180px;
}

main {
  height: calc(100vh - 146px);
  position: relative;
}

.me {
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  border-radius: 12px;
}

.album-container {
  position: absolute;
  top: 47%;
  left: 82%;
  transform: translate(-50%, -60%);
}

.album-image {
  width: 260px;
  height: 260px;
}

.left {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -60%);

  .cta-link {
    display: block;
    text-align: center;
    background: transparent;
    box-shadow: none;
    border: 1px solid #000;
    padding: 12px 32px;
    margin-top: 20px;
    font-size: 16px;
    transition: all .2s linear;

    &::hover {
      background: #000;
      color: #fff;
    }
  }
}

.album-name {
  font-size: 58px;
  font-weight: bold;
  letter-spacing: 2px;
}
</style>
