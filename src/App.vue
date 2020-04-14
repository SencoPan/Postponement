<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
  min-width: 90em;
}

@media (max-width: 1280px) {
  body {
    overflow-x: hidden;
  }
}
</style>
