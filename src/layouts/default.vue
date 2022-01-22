<template>
  <v-app dark>
    <header-components />
    <snackbar-components @show-snackbar="showSnackbar" :snackbar="snackbar"/>
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      snackbar: true
    }
  },
  methods: {
    showSnackbar(visible) {
      this.snackbar = visible
    }
  }
}
</script>

<style lang="scss">
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
