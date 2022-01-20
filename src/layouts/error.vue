<template>
  <div id="error-page">
    <h1 v-text="`${error.statusCode} - ${$t($dictionary.PAGE_NOT_FOUND)}.`" />
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404
        ? `${this.error.statusCode} - ${this.$t(this.$dictionary.PAGE_NOT_FOUND)}`
        : `${this.error.statusCode} -  ${this.otherError}`
    return {
      title,
    }
  }
}
</script>

<style scoped>
#error-page {
  position: absolute;
  top: calc(50% - 48px);
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  font-size: 48px;
}
</style>
