<template>
  <Header />
  <main>
    <div class="left">
      <div class="fullname">Natalie Kuzmina</div>
      <h1 class="album-name">Waltz<br /> of a<br /> Woman</h1>
      <a class="cta-link" href="https://onerpm.link/265461647136" _target="blank">Listen Now</a>
    </div>
    <img class="me" src="~/assets/images/me.jpg" alt="me">
    <div class="album-container">
      <img class="album-image" src="~/assets/images/album.jpeg" alt="Waltz of a Woman album image">
      <h2>The first Album. Out now</h2>
    </div>
  </main>
  <SocialLinks />
</template>

<script setup>
import "bulma/css/bulma.css"

useHead({
  title: 'nattaliepiano - Personal Page',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
})
</script>

<style>
a {
  color: #000;
}

header {
  padding: 0 180px;
}

main {
  height: calc(100vh - 64px);
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
}

.left .cta-link {
  display: block;
  text-align: center;
  background: transparent;
  box-shadow: none;
  border: 1px solid #000;
  padding: 12px 32px;
  margin-top: 20px;
  font-size: 16px;
  transition: all .2s linear;
}

.left .cta-link:hover {
  background: #000;
  color: #fff;
}

.album-name {
  font-size: 58px;
  font-weight: bold;
  letter-spacing: 2px;
}
</style>
