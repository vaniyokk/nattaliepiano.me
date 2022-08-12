<template>
  <header>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">

      <div class="navbar-brand">
        <NuxtLink to="/">
          <img class="navbar-logo" src="~/assets/images/logo.svg" alt="" />
        </NuxtLink>

        <a role="button" class="navbar-burger" :class="{ 'is-active': state.menuActive }" aria-label="menu"
          aria-expanded="false" @click="toggleMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': state.menuOpen }">
        <div class="navbar-end">
          <NuxtLink to="/about" class="navbar-item">
            {{ $t('about') }}
          </NuxtLink>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              {{ $t('language') }}
            </a>

            <div class="navbar-dropdown">
              <a @click="$i18n.locale = 'en'" class="navbar-item">
                EN
              </a>
              <a @click="$i18n.locale = 'ua'" class="navbar-item">
                UA
              </a>
              <a @click="$i18n.locale = 'ru'" class="navbar-item">
                RU
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  height: 64px;
}

.navbar-logo {
  height: 100%;
}

.navbar-item {
  margin-left: 40px;
}
</style>

<script setup>
const state = reactive({ menuOpen: false });

const toggleMenu = () => {
  state.menuOpen = !state.menuOpen;
}
</script>