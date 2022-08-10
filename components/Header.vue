<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <img class="navbar-logo" src="~/assets/images/logo.svg" alt="">
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Contacts
          </a>
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